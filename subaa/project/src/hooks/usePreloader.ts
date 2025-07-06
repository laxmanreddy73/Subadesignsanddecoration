import { useState, useEffect } from 'react';

interface UsePreloaderOptions {
  images?: string[];
  videos?: string[];
  minLoadingTime?: number;
}

export const usePreloader = (options: UsePreloaderOptions = {}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const {
    images = [],
    videos = [],
    minLoadingTime = 1200 // Reduced from 2000 to 1200ms
  } = options;

  useEffect(() => {
    const startTime = Date.now();
    let loadedCount = 0;
    const totalAssets = images.length + videos.length;

    if (totalAssets === 0) {
      // If no assets to preload, just wait for minimum time
      setTimeout(() => {
        setIsLoading(false);
      }, minLoadingTime);
      return;
    }

    const updateProgress = () => {
      loadedCount++;
      setProgress((loadedCount / totalAssets) * 100);

      if (loadedCount === totalAssets) {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

        setTimeout(() => {
          setIsLoading(false);
        }, remainingTime);
      }
    };

    // Optimized image preloading
    images.forEach((src) => {
      const img = new Image();
      img.onload = updateProgress;
      img.onerror = updateProgress;
      // Use lower quality for faster loading
      img.src = src.includes('cloudinary') ? src.replace('/upload/', '/upload/q_auto,f_auto,w_800/') : src;
    });

    // Optimized video preloading - only metadata
    videos.forEach((src) => {
      const video = document.createElement('video');
      video.onloadedmetadata = updateProgress;
      video.onerror = updateProgress;
      video.src = src;
      video.preload = 'metadata'; // Only load metadata, not full video
    });

  }, [images, videos, minLoadingTime]);

  return { isLoading, progress };
};