import emailjs from 'emailjs-com';
// Email service simulation for contact and booking forms
// In a real application, this would integrate with services like EmailJS, SendGrid, or a backend API

/**
 * Sends form data to the backend for email delivery.
 * @param formData - The form data object
 * @param formType - 'contact' or 'booking'
 * @returns Promise<{ success: boolean; message: string }>
 */
// @ts-ignore
export const sendEmail = async (formData, formType) => {
  if (formType !== 'booking') {
    return { success: false, message: 'Only booking form is supported for email.' };
  }
  try {
    const result = await emailjs.send(
      'service_yhk7j7l',
      'template_vxqb94j',
      formData,
      'ekdc6Znuxl6SJ-zg_'
    );
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('EmailJS error:', error);
    return { success: false, message: 'Failed to send email' };
  }
};

export const sendWhatsAppNotification = (formData, formType) => {
  const phoneNumber = '919666903335';
  
  let message = '';
  
  if (formType === 'contact') {
    message = `New Contact Form Submission:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}
Message: ${formData.message}`;
  } else if (formType === 'booking') {
    message = `New Service Booking:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.serviceType}
Preferred Date: ${formData.preferredDate}
Preferred Time: ${formData.preferredTime}
Budget: ${formData.projectBudget}
Location: ${formData.location}
Urgency: ${formData.urgency}
Description: ${formData.projectDescription}`;
  }

  // Open WhatsApp with pre-filled message
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};