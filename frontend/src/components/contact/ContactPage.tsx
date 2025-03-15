import React from 'react';
import ContactSection from './ContactSection';
import ContactHero from './ContactHero';
import ContactForm from './ContactForm';

const ContactPage = () => {
    return (
        <div>
            <ContactSection />

            <div className='flex justify-around h-[600px] gap-3  bg-[#f0e8ff]'>
                <ContactHero />
                <ContactForm />
            </div>

        </div>
    );
};

export default ContactPage;