"use client"

import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: '',
    equipment: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      service: '',
      equipment: ''
    })
  }

  return (
    <div className='bg-white flex flex-col items-center justify-center pt-20'>
      <h2 className='text-4xl font-poppins'>Contact Us</h2>
      <div className='mt-12 w-[800px]'>

        <Tabs defaultValue="general" className="w-full">
          <TabsList>
            <TabsTrigger value="general">General Inquiry</TabsTrigger>
            <TabsTrigger value="equipment">Equipment Rental</TabsTrigger>
            <TabsTrigger value="services">Medical Services</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <div className='bg-white p-6 rounded-[30px] h-[500px] flex flex-col'>
              <h3 className='text-2xl font-poppins mb-4'>General Inquiry</h3>
              <form onSubmit={handleSubmit} className='space-y-4 flex-1 flex flex-col'>
                <div className='grid grid-cols-2 gap-4'>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className='px-4 py-2 border border-gray-300 rounded-lg'
                    placeholder="Full Name *"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className='px-4 py-2 border border-gray-300 rounded-lg'
                    placeholder="Email Address *"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg'
                  placeholder="Phone Number"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg flex-1'
                  placeholder="Message *"
                />
                <button
                  type="submit"
                  className='bg-black text-white px-8 py-2 rounded-[8px] cursor-pointer mt-auto'
                >
                  Send Message
                </button>
              </form>
            </div>
          </TabsContent>

          <TabsContent value="equipment">
            <div className='bg-white p-6 rounded-[30px] h-[500px] flex flex-col'>
              <h3 className='text-2xl font-poppins mb-4'>Equipment Rental</h3>
              <form onSubmit={handleSubmit} className='space-y-4 flex-1 flex flex-col'>
                <div className='grid grid-cols-2 gap-4'>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className='px-4 py-2 border border-gray-300 rounded-lg'
                    placeholder="Full Name *"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className='px-4 py-2 border border-gray-300 rounded-lg'
                    placeholder="Email Address *"
                  />
                </div>
                <select
                  name="equipment"
                  value={formData.equipment}
                  onChange={handleInputChange}
                  required
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg'
                >
                  <option value="">Select equipment</option>
                  <option value="oxygen">Oxygen Cylinders</option>
                  <option value="holter">Holter Machines</option>
                  <option value="mask">3M N95 Masks</option>
                  <option value="bed">Hospital Beds</option>
                  <option value="bibap">BiBap Machines</option>
                  <option value="wheelchair">Wheel Chairs</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg'
                  placeholder="Phone Number *"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg flex-1'
                  placeholder="Rental Details *"
                />
                <button
                  type="submit"
                  className='bg-black text-white px-8 py-2 rounded-[8px] cursor-pointer mt-auto'
                >
                  Request Equipment
                </button>
              </form>
            </div>
          </TabsContent>

          <TabsContent value="services">
            <div className='bg-white p-6 rounded-[30px] h-[500px] flex flex-col'>
              <h3 className='text-2xl font-poppins mb-4'>Medical Services</h3>
              <form onSubmit={handleSubmit} className='space-y-4 flex-1 flex flex-col'>
                <div className='grid grid-cols-2 gap-4'>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className='px-4 py-2 border border-gray-300 rounded-lg'
                    placeholder="Full Name *"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className='px-4 py-2 border border-gray-300 rounded-lg'
                    placeholder="Email Address *"
                  />
                </div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg'
                >
                  <option value="">Select service</option>
                  <option value="checkup">Corporate Health Checkup</option>
                  <option value="covid">Covid Test at Home</option>
                  <option value="homeopathy">Homeopathy Treatment</option>
                  <option value="naturopathy">Naturopathy Treatment</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg'
                  placeholder="Phone Number *"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg flex-1'
                  placeholder="Service Details *"
                />
                <button
                  type="submit"
                  className='bg-black text-white px-8 py-2 rounded-[8px] cursor-pointer mt-auto'
                >
                  Book Service
                </button>
              </form>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Contact
