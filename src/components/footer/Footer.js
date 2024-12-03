import React from 'react';
import ContactButton from './ContactButton';
import './Footer.css';


function Footer() {
    return (
        <div className="Footer">
            <ContactButton 
                icon='github'
                url="https://github.com/halleking"
            />
            <ContactButton
                icon='linkedin'
                url="https://www.linkedin.com/in/halleking/"/>
            <ContactButton
                icon='email'
                url="mailto:hnking515@gmail.com"/>
            {/*<ContactButton
                icon='resume'/> */}
        </div>
    );
}

export default Footer;