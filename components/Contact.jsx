'use client'
import React, { useState } from 'react';
import { Button } from './ui/button';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d6ce666c-5d50-4410-8d2d-1d6a343dd3a7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });

    const result = await response.json();

    if (result.success) {
      console.log(result);
      setFormSubmitted(true);
      event.target.reset();
    }
  }

  return (
    <section id='contact' className='py-8 border-t mt-8 mb-6 border-b'>
        <h1 className='text-2xl font-medium'>Contact me</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-y-4 mt-4 md:w-[50%]'>
            <label htmlFor="email">Email</label>
            <input 
                className='bg-muted p-2 border rounded-sm outline-none'
                type="email" 
                name="email" 
                id="email"
                required
            />
            <label htmlFor="message">Message</label>
            <textarea 
                className='bg-muted p-2 border rounded-sm outline-none resize-none mb-4'
                type="text" 
                name="message" 
                id="message"
                rows={5}
                required
            />  
            <Button type="submit">Send</Button>
        </form>
        {formSubmitted && <p className='p-4 w-full md:w-[50%] mt-8 border rounded-sm'>Your message has been successfully sent. Thank you for reaching out to me!</p>}
    </section>
  );
};
 
export default Contact;
