import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#000000] text-white'>
      <div className='max-w-7xl mx-auto px-4 py-16'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {/* Company Info */}
          <div className='space-y-4'>
            <h3 className='text-2xl font-poppins font-bold'>MediCare</h3>
            <p className='text-gray-300 text-sm leading-relaxed'>
              Your trusted partner for comprehensive healthcare services, medical equipment rental, and expert medical consultations.
            </p>
            <div className='flex space-x-4'>
              <div className='w-8 h-8 bg-[#f1f0f1] rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors'>
                <span className='text-black text-sm font-bold'>f</span>
              </div>
              <div className='w-8 h-8 bg-[#f1f0f1] rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors'>
                <span className='text-black text-sm font-bold'>t</span>
              </div>
              <div className='w-8 h-8 bg-[#f1f0f1] rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors'>
                <span className='text-black text-sm font-bold'>in</span>
              </div>
              <div className='w-8 h-8 bg-[#f1f0f1] rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors'>
                <span className='text-black text-sm font-bold'>ig</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h4 className='text-lg font-poppins font-semibold'>Quick Links</h4>
            <ul className='space-y-2'>
              <li><a href="#" className='text-gray-300 hover:text-white transition-colors text-sm'>Home</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white transition-colors text-sm'>Services</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white transition-colors text-sm'>Equipment</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white transition-colors text-sm'>Experts</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white transition-colors text-sm'>Categories</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white transition-colors text-sm'>Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className='space-y-4'>
            <h4 className='text-lg font-poppins font-semibold'>Our Services</h4>
            <ul className='space-y-2'>
              <li><a href="#" className='text-gray-300 hover:text-white transition-colors text-sm'>MRI Scan</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white transition-colors text-sm'>CT Scan</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white transition-colors text-sm'>X-Ray</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white transition-colors text-sm'>Health Checkup</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white transition-colors text-sm'>Covid Testing</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white transition-colors text-sm'>Homeopathy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h4 className='text-lg font-poppins font-semibold'>Contact Info</h4>
            <div className='space-y-3'>
              <div className='flex items-start space-x-3'>
                <div className='w-5 h-5 bg-[#f1f0f1] rounded-full flex items-center justify-center mt-0.5'>
                  <span className='text-black text-xs'>📍</span>
                </div>
                <p className='text-gray-300 text-sm'>
                  123 Medical Street<br />
                  Health City, HC 12345
                </p>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-5 h-5 bg-[#f1f0f1] rounded-full flex items-center justify-center'>
                  <span className='text-black text-xs'>📞</span>
                </div>
                <p className='text-gray-300 text-sm'>+1 (555) 123-4567</p>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-5 h-5 bg-[#f1f0f1] rounded-full flex items-center justify-center'>
                  <span className='text-black text-xs'>✉️</span>
                </div>
                <p className='text-gray-300 text-sm'>info@medicare.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Equipment Section */}
        <div className='border-t border-gray-700 pt-8 mb-8'>
          <h4 className='text-lg font-poppins font-semibold mb-4'>Medical Equipment Available</h4>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
            {[
              'Oxygen Cylinders',
              'Holter Machines',
              'N95 Masks',
              'Hospital Beds',
              'BiBap Machines',
              'Wheel Chairs'
            ].map((equipment, index) => (
              <div key={index} className='bg-[#f1f0f1] text-black px-3 py-2 rounded-lg text-center'>
                <span className='text-sm font-medium'>{equipment}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className='border-t border-gray-700 pt-8 mb-8'>
          <div className='max-w-md mx-auto text-center'>
            <h4 className='text-lg font-poppins font-semibold mb-2'>Stay Updated</h4>
            <p className='text-gray-300 text-sm mb-4'>Subscribe to our newsletter for health tips and updates</p>
            <div className='flex space-x-2'>
              <input
                type="email"
                placeholder="Enter your email"
                className='flex-1 px-4 py-2 bg-[#f1f0f1] text-black rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white'
              />
              <button className='bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors'>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-700 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='text-gray-300 text-sm'>
              © 2024 MediCare. All rights reserved.
            </div>
            <div className='flex space-x-6'>
              <a href="#" className='text-gray-300 hover:text-white transition-colors text-sm'>Privacy Policy</a>
              <a href="#" className='text-gray-300 hover:text-white transition-colors text-sm'>Terms of Service</a>
              <a href="#" className='text-gray-300 hover:text-white transition-colors text-sm'>Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
