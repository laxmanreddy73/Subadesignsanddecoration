# Suba Designs & Decorations Website

A luxury wedding planning and decoration website built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with beautiful animations
- **Contact Form with EmailJS**: Automated email responses and notifications
- **Portfolio Gallery**: Showcase of wedding projects with video support
- **Service Pages**: Comprehensive wedding services information
- **Loading Animations**: Smooth loading experience
- **SEO Optimized**: Meta tags and structured data

## EmailJS Setup

To enable the contact form email functionality:

1. **Create EmailJS Account**: Sign up at [EmailJS.com](https://www.emailjs.com/)

2. **Get Your Public Key**: 
   - Go to EmailJS Dashboard > Account > API Keys
   - Copy your Public Key

3. **Update Configuration**:
   - Open `src/components/Contact.tsx`
   - Replace `YOUR_EMAILJS_PUBLIC_KEY` with your actual public key

4. **Email Templates**:
   The project is configured to use these templates:
   - **Contact Us Template** (`template_s207awp`): Sends inquiry to business
   - **Auto-Reply Template** (`template_ak02mxm`): Sends confirmation to customer
   - **Service ID** (`service_9aspror`): Gmail service connection

5. **Template Variables**:
   Make sure your EmailJS templates include these variables:
   
   **Contact Us Template**:
   - `{{from_name}}` - Customer name
   - `{{from_email}}` - Customer email
   - `{{phone}}` - Customer phone
   - `{{event_date}}` - Event date
   - `{{venue}}` - Event venue
   - `{{event_type}}` - Type of event
   - `{{guest_count}}` - Number of guests
   - `{{budget}}` - Budget range
   - `{{message}}` - Customer message

   **Auto-Reply Template**:
   - `{{to_name}}` - Customer name
   - `{{to_email}}` - Customer email
   - `{{event_type}}` - Type of event
   - `{{event_date}}` - Event date
   - `{{from_name}}` - Business name
   - `{{from_email}}` - Business email

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- EmailJS
- Lucide React Icons
- Vite

## Contact

For any questions about the website, contact Suba Designs & Decorations at subadesigndecoration@gmail.com