// src/pages/Contact.js
import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <section className="main padding-top-2xl padding-bottom-2xl bg-primary">
        <div className="content">
          <div className="flex-container flex-col gap-xl items-center">
            
            <div className="col-lg-8">
              <div className="flex-container flex-col gap-sm text-center">
                <div className="flex-container flex-col gap-xxs">
                  <h1 className="body-lg weight-500 text-highlight-secondary">Contact Us</h1>
                  <span className="heading heading-xl">Have a Question?</span>
                </div>
                <p className="body-lg">
                  We're here to help! Whether you have a question about our product, need support with your order, 
                  or just want to share feedback — we'd love to hear from you.  
                  Fill out the form below and we'll get back to you within 1-2 business days.
                </p>
              </div>
            </div>

            <div className="narrow">
              <ContactForm />
            </div>

            <div className="col-lg-8 text-center">
              <p>You can also reach us directly at{" "} <a href="mailto:hello@theplayyears.com" className="text-highlight-secondary">hello@theplayyears.com</a>.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;