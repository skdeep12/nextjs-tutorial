'use client'
import { Button } from '@/app/ui/button';
import React, { useState } from 'react';

export default function Page() { 
    const [formData, setFormData] = useState({
      name: '',
      sector: '',
    });
  
    const handleChange = (e: any) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e: any) => {
      e.preventDefault();
      // Add your form submission logic here
      console.log('Form data submitted:', formData);
      // You can send the form data to a server or perform any other necessary actions.
    };
  
    return (
        <div>
            <p> Add Company </p>
            <form onSubmit={handleSubmit}>
        <label className='flex h-10 items-center rounded-lg px-4 text-sm font-medium transition-colors'>
          Name :
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className='flex h-10 items-center rounded-lg px-4 text-sm font-medium transition-colors'>
          Sector :
          <input
            type="email"
            name="email"
            value={formData.sector}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <Button type="submit">Submit</Button>
      </form>
        </div>
      
    );
}
