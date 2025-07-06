import React, { useState } from 'react';
import { Palette, Type, Download, Eye } from 'lucide-react';

const InvitationMaker = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [invitationData, setInvitationData] = useState({
    coupleNames: 'Sarah & Michael',
    weddingDate: '12th October 2024',
    venue: 'Rose Garden Hall',
    time: '6:00 PM'
  });

  const templates = [
    {
      name: 'Classic Elegance',
      preview: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      style: 'Traditional with gold accents'
    },
    {
      name: 'Modern Romance',
      preview: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      style: 'Clean lines with floral elements'
    },
    {
      name: 'Vintage Charm',
      preview: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      style: 'Rustic with vintage typography'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setInvitationData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <section id="invitations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            Invitation Maker
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create beautiful, personalized wedding invitations in three simple steps. 
            Choose your template, customize your details, and download instantly.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center font-semibold
                  ${currentStep >= step 
                    ? 'bg-rosegold-500 text-white' 
                    : 'bg-gray-200 text-gray-600'
                  }
                `}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`
                    w-12 h-1 mx-2
                    ${currentStep > step ? 'bg-rosegold-500' : 'bg-gray-200'}
                  `}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Step 1: Choose Template */}
          {currentStep === 1 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-serif font-semibold text-center text-gray-800 mb-8">
                Choose Your Template
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {templates.map((template, index) => (
                  <div 
                    key={index}
                    onClick={() => setSelectedTemplate(index)}
                    className={`
                      cursor-pointer rounded-xl overflow-hidden transition-all duration-300
                      ${selectedTemplate === index 
                        ? 'ring-4 ring-rosegold-500 shadow-xl scale-105' 
                        : 'shadow-lg hover:shadow-xl hover:scale-105'
                      }
                    `}
                  >
                    <img
                      src={template.preview}
                      alt={template.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4 bg-white">
                      <h4 className="font-semibold text-gray-800 mb-2">{template.name}</h4>
                      <p className="text-sm text-gray-600">{template.style}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Customize Details */}
          {currentStep === 2 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-serif font-semibold text-center text-gray-800 mb-8">
                Customize Your Details
              </h3>
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Couple Names
                    </label>
                    <input
                      type="text"
                      value={invitationData.coupleNames}
                      onChange={(e) => handleInputChange('coupleNames', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosegold-500 focus:border-transparent"
                      placeholder="Sarah & Michael"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Wedding Date
                    </label>
                    <input
                      type="text"
                      value={invitationData.weddingDate}
                      onChange={(e) => handleInputChange('weddingDate', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosegold-500 focus:border-transparent"
                      placeholder="12th October 2024"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Venue
                    </label>
                    <input
                      type="text"
                      value={invitationData.venue}
                      onChange={(e) => handleInputChange('venue', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosegold-500 focus:border-transparent"
                      placeholder="Rose Garden Hall"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Time
                    </label>
                    <input
                      type="text"
                      value={invitationData.time}
                      onChange={(e) => handleInputChange('time', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosegold-500 focus:border-transparent"
                      placeholder="6:00 PM"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Preview & Download */}
          {currentStep === 3 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-serif font-semibold text-center text-gray-800 mb-8">
                Preview & Download
              </h3>
              <div className="bg-gradient-to-b from-champagne-50 to-blush-50 rounded-xl p-8">
                {/* Invitation Preview */}
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto mb-8">
                  <div className="text-center">
                    <div className="border-2 border-rosegold-300 rounded-lg p-6">
                      <div className="text-sm text-rosegold-600 mb-2 tracking-widest">
                        {templates[selectedTemplate].name.toUpperCase()}
                      </div>
                      <h4 className="text-2xl font-serif font-bold text-gray-800 mb-4">
                        {invitationData.coupleNames}
                      </h4>
                      <div className="text-gray-600 mb-2">
                        are getting married on
                      </div>
                      <div className="text-lg font-semibold text-gray-800 mb-4">
                        {invitationData.weddingDate}
                      </div>
                      <div className="text-gray-600 mb-1">at</div>
                      <div className="font-semibold text-gray-800 mb-2">
                        {invitationData.venue}
                      </div>
                      <div className="text-rosegold-600 font-medium">
                        {invitationData.time}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-center space-x-4">
                  <button className="flex items-center bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors">
                    <Eye className="h-5 w-5 mr-2" />
                    Preview
                  </button>
                  <button className="flex items-center bg-rosegold-500 hover:bg-rosegold-600 text-white px-6 py-3 rounded-lg transition-colors">
                    <Download className="h-5 w-5 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`
                px-6 py-3 rounded-lg font-semibold transition-all duration-200
                ${currentStep === 1 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-500 hover:bg-gray-600 text-white'
                }
              `}
            >
              Previous
            </button>
            <button
              onClick={nextStep}
              disabled={currentStep === 3}
              className={`
                px-6 py-3 rounded-lg font-semibold transition-all duration-200
                ${currentStep === 3 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-rosegold-500 hover:bg-rosegold-600 text-white'
                }
              `}
            >
              Next
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-gray-600 mb-6">
            Need custom invitation design services?
          </p>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-rosegold-500 hover:bg-rosegold-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Our Designers
          </button>
        </div>
      </div>
    </section>
  );
};

export default InvitationMaker;