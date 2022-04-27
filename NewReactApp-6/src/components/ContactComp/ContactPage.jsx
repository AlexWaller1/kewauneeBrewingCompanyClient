import React from 'react'
import ContactPageHeader from './ContactPageHeader';
import ContactFormDiv from './ContactFormDiv';
import {useState, useEffect} from "react";

 const ContactPage = () => {
  return (
    <div className="contact-page-div">
        <ContactPageHeader text="Reach Out To Us!"/>
        <ContactFormDiv />
    </div>
  )
}

export default ContactPage;
