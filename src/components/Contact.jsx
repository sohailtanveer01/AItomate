import React from 'react';
import { InlineWidget } from 'react-calendly';
import Section from './Section';
import Heading from './Heading';
import NewsletterSubscription from './NewsletterSubscription';

const Contact = () => {
  return (
    <Section className="overflow-hidden" id="contact">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Book a Call With Us"
          text="Schedule a consultation to discuss how AItomate can transform your business"
        />

        <div className="flex flex-col items-center">
          <div className="w-full max-w-[950px] h-[700px] rounded-2xl overflow-hidden bg-n-8/40 backdrop-blur border border-n-6">
            <InlineWidget
              url="https://calendly.com/sohail-aitomates/30min"
              styles={{
                height: '100%',
                width: '100%',
                minWidth: '320px',
                border: 'none'
              }}
              prefill={{
                email: '',
                firstName: '',
                lastName: '',
                name: ''
              }}
              pageSettings={{
                backgroundColor: '0E0C15',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: 'AC6AFF',
                textColor: 'FFFFFF'
              }}
            />
          </div>
          
          <NewsletterSubscription />
        </div>
      </div>
    </Section>
  );
};

export default Contact;