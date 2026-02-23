// EmailJS Configuration
// Replace these placeholders with your actual EmailJS credentials
// Get your credentials from: https://www.emailjs.com/

export const mailConfig = {
  // EmailJS Service ID (e.g., "service_xxxxxxx")
  serviceId: "YOUR_EMAILJS_SERVICE_ID",
  
  // EmailJS Template IDs
  templates: {
    registration: "YOUR_REGISTRATION_TEMPLATE_ID",
    contact: "YOUR_CONTACT_TEMPLATE_ID",
  },
  
  // EmailJS Public Key (e.g., "xxxxxxxxxxxxxxxxx")
  publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
  
  // Recipient email for form submissions
  recipientEmail: "info@sakyaedutech.com",
};

// Email template parameters for registration form
export interface RegistrationEmailParams {
  fullName: string;
  email: string;
  phone: string;
  course: string;
  userType: string;
  qualification: string;
  city: string;
  message: string;
}

// Email template parameters for contact form
export interface ContactEmailParams {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
