import React from "react";
import  { useRef } from 'react';
import emailjs from "emailjs-com";
import "./contact.css"
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_w4h7thk', 'template_kcsxi5k', form.current, 'CMqYPKrHsV-3Rbra9')
        form.current.reset();
    };
  return (
    <div className="h-screen w-full  py-6 -z-10 mt-10" id="contact">
      <h2 className="text-4xl sm:text-6xl text-center text-white font-bold mt-30"> Contact</h2>
      <div className="h-screen flex items-center justify-center  py-6 w-full">
        <div className="w-full max-w-md p-6">
        <form className=" px-8 pt-6 pb-8 mb-4 bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-lg" ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2 "
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none  rounded w-full py-2 px-3 text-white leading-tight focus:outline-none  bg-white bg-opacity-10 backdrop-blur-md"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none  rounded w-full py-2 px-3 text-white leading-tight focus:outline-none  bg-white bg-opacity-10 backdrop-blur-md"
              id="email"
              type="email"
              placeholder="Your Email"
              name="email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none  rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline h-32 resize-none  bg-white bg-opacity-10 backdrop-blur-md"
              id="message"
              placeholder="Your Message"
              name="message"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
        </div>
      </div>
   
    </div>
  );
};

export default Contact;
