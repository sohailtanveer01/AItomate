import React, { useState } from "react";
import Section from "./Section";
import Heading from "./Heading";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-n-6">
      <button
        className="flex items-center justify-between w-full py-6 px-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-base md:text-lg text-n-1">{question}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 8L10 13L5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 px-4' : 'max-h-0'}`}>
        <p className="text-n-3">{answer}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  const faqs = [
  
    {
      question: "How secure is AItomate for handling business data?",
      answer: "AItomate implements enterprise-grade security measures including encryption, secure authentication, and compliance with industry standards. We prioritize data protection and ensure all business information is handled with the highest security protocols."
    },
    {
      question: "Can AItomate integrate with existing business systems?",
      answer: "Yes, AItomate is designed to seamlessly integrate with most common business systems and software. Our platform supports various APIs and connectors to ensure smooth integration with your existing infrastructure."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide comprehensive support including 24/7 technical assistance, dedicated account management for enterprise clients, regular training sessions, and detailed documentation to help you maximize the value of our platform."
    },
    {
      question: "How long does it take to implement AItomate?",
      answer: "Implementation time varies depending on your specific needs and system complexity. Typically, basic implementation can be completed in a few weeks, while more complex enterprise-wide deployments might take 2-3 months."
    },
    {
      question: "What is the pricing ?",
      answer: "There is no upfront fee, you can pay after we come up with a solution that is tailored for your business"
    }
    
   
  ];

  return (
    <Section className="overflow-hidden" id="faq">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Frequently Asked Questions"
        />

        <div className="max-w-[848px] mx-auto mt-12 bg-n-8 rounded-2xl border border-n-6 divide-y divide-n-6">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Faq;