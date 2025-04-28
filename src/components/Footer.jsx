import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="flex justify-around items-center md:items-start text-center flex-col md:flex-row bg-[#1D2A4D] gap-4 text-base-content px-20 py-10">
    {/* Contact Info Section */}
    <div className='w-2/4'>
      <h6 className="footer-title text-white">Lab Aid, Barishal</h6>
      <p className="text-white">5th Floor, Room no: 607, K Jahan Center, House-106, Sadar Road, Barisal - 8200</p>
      <p className="text-white">Email: <a href="mailto:dr.shahida2007@yahoo.com" className="link link-hover text-white">dr.shahida2007@yahoo.com</a></p>
      <p className="text-white">Phone: <a href="tel:+8801766663305" className="link link-hover text-white">01766-663305</a></p>
    </div>
  
    {/* Quick Links Section */}
    <div>
  <h6 className="footer-title text-white">Quick Links</h6>
<div className='flex flex-col'>
<Link to="/" className="link link-hover text-white">Home</Link>
  <Link to="/about" className="link link-hover text-white">About</Link>
  <Link to="/testimonial" className="link link-hover text-white">Testimonial</Link>
  <Link to="/latest-blogs" className="link link-hover text-white">Latest Blogs</Link>
  <Link to="/appointment" className="link link-hover text-white">Appointment</Link>
</div>
</div>
  
    {/* Social Links Section */}
    <div>
      <h6 className="footer-title text-white">Follow</h6>
      <div className="grid grid-flow-col gap-4">
         {/* Facebook Icon */}
         <a href="https://www.facebook.com/Dr.ShahidaBegumMinu/SS" className="link link-hover">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current text-white">
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
        {/* YouTube Icon */}
        <a href="https://www.youtube.com/@onlineteachingofgynecology3449" className="link link-hover">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current text-white">
            <path
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
      
      </div>
    </div>
  </footer>
  
  
  )
}

export default Footer
