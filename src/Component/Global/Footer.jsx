import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-cover bg-center text-white" style={{ backgroundImage: `url('/footer-bg.jpg')` }}>
      <div className="bg-black/60">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Address */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">Unitech Club Patio, NH 8 Near Huda City Metro Station,<br/> Block E, South City I, Gurugram, Haryana 122001</p>
            <p className="mb-2">📧 info@whitecub.in</p>
            <p>📞 +91 98186 99795</p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Vegan Ice Cream</a></li>
              <li><a href="#" className="hover:underline">Popsicles</a></li>
              <li><a href="#" className="hover:underline">Subscription</a></li>
              <li><a href="#" className="hover:underline">Vegan Butter</a></li>
              <li><a href="#" className="hover:underline">Vegan Curd</a></li>
              <li><a href="#" className="hover:underline">Combos</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Shipping & Return Policy</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter Signup</h3>
            <p className="mb-4">Subscribe to our newsletter and get 10% off your first purchase</p>
            <div className="flex mb-4">
              <input
                type="email"
                placeholder="Your email address"
                className="p-2 rounded-l-md w-full text-black"
              />
              <button className="bg-pink-600 hover:bg-pink-700 p-2 rounded-r-md font-semibold">Subscribe</button>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:scale-110 transition"><i className="fab fa-facebook-f text-2xl"></i></a>
              <a href="#" className="hover:scale-110 transition"><i className="fab fa-instagram text-2xl"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
