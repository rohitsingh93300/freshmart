import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12  px-4 md:px-0 ">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FreshMart</h3>
            <p className="mb-4">Your one-stop shop for fresh groceries delivered to your doorstep.</p>
            <div className="mt-3">
              <h3 className="font-medium mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <button variant="outline" size="icon" className="rounded-full">
                  <FaFacebook className="h-5 w-5 text-white" />
                  <span className="sr-only">Facebook</span>
                </button>
                <button variant="outline" size="icon" className="rounded-full">
                  <FaInstagram className="h-5 w-5 text-white" />
                  <span className="sr-only">Instagram</span>
                </button>
                <button variant="outline" size="icon" className="rounded-full">
                  <FaTwitter className="h-5 w-5 text-white" />
                  <span className="sr-only">Twitter</span>
                </button>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-green-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-green-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-green-400">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-green-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-green-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-green-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-green-400">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-green-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="mb-2">123 Grocery St, Food City</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p className="mb-2">Email: info@freshmart.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} FreshMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
