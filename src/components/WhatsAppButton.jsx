import React from 'react';

const WhatsAppButton = ({ serviceName }) => {
    const phoneNumber = '2348083117154';
    const message = `I will like to make enquiries about ${serviceName}. My name is _________.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-block',
        backgroundColor: '#25D366',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        textDecoration: 'none',
        fontWeight: 'bold',
        textAlign: 'center',
      }}
    >
      Chat on WhatsApp
    </a>
  );
};

export default WhatsAppButton;
