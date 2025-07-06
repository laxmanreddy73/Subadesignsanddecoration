// EmailJS Configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_9aspror',
  CONTACT_TEMPLATE_ID: 'template_s207awp', // Contact Us template
  AUTO_REPLY_TEMPLATE_ID: 'template_ak02mxm', // Auto-Reply template
  PUBLIC_KEY: 'Zczjags9REiNlv8J7' // Replace with your actual public key
};

// Email template parameters interface
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  venue: string;
  eventType: string;
  guestCount: string;
  budget: string;
  message: string;
}

// Template parameters for contact email
export interface ContactTemplateParams {
  from_name: string;
  from_email: string;
  phone: string;
  event_date: string;
  venue: string;
  event_type: string;
  guest_count: string;
  budget: string;
  message: string;
  to_email: string;
}

// Template parameters for auto-reply email
export interface AutoReplyTemplateParams {
  to_name: string;
  to_email: string;
  event_type: string;
  event_date: string;
  from_name: string;
  from_email: string;
}