import React from "react";

const Footer = () => (
  <footer className="bg-black text-white pt-10 pb-4 px-4 md:px-16">
    {/* Subscribe Section */}
    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 border-b border-gray-700 pb-8">
      <div className="flex-1 max-w-md">
        <div className="font-bold text-lg mb-2">BE THE FIRST TO KNOW</div>
        <div className="mb-3 text-sm text-gray-300">Sign up for updates from mettā muse.</div>
        <div className="flex gap-2 mt-4">
          <input
            type="email"
            placeholder="Enter your e-mail..."
            className="flex-1 px-4 py-3 rounded bg-white text-black placeholder-gray-400 outline-none"
          />
          <button className="bg-gray-800 text-white px-6 py-3 rounded font-semibold border border-gray-700">SUBSCRIBE</button>
        </div>
      </div>
      <div className="flex-1 max-w-md mt-8 md:mt-0">
        <div className="font-bold mb-2">CONTACT US</div>
        <div className="mb-2 text-sm">+44 221 133 5360</div>
        <div className="mb-4 text-sm">customercare@mettamuse.com</div>
        <div className="font-bold mb-2">CURRENCY</div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xl">🇺🇸</span>
          <span className="font-semibold">USD</span>
        </div>
        <div className="text-xs text-gray-400">
          Transactions will be completed in Euros and a currency reference is available on hover.
        </div>
      </div>
    </div>

    {/* Links and Social */}
    <div className="flex flex-col md:flex-row justify-between gap-8 mt-10">
      {/* Left Links */}
      <div className="flex-1 flex flex-col md:flex-row gap-8">
        <div>
          <div className="font-bold mb-3">mettā muse</div>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-3">QUICK LINKS</div>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
      {/* Right Social & Payment */}
      <div className="flex-1 flex flex-col gap-6">
        <div>
          <div className="font-bold mb-3">FOLLOW US</div>
          <div className="flex gap-4 text-2xl">
            <a href="#" aria-label="Instagram" className="hover:text-gray-400">📷</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">🔗</a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-3">mettā muse ACCEPTS</div>
          <div className="flex gap-2 flex-wrap">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Pay" className="h-8 bg-white rounded p-1" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="h-8 bg-white rounded p-1" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-8 bg-white rounded p-1" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Amex_logo.svg" alt="Amex" className="h-8 bg-white rounded p-1" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Apple_Pay_logo.svg" alt="Apple Pay" className="h-8 bg-white rounded p-1" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/PayPal_2014_logo.png" alt="PayPal" className="h-8 bg-white rounded p-1" />
          </div>
        </div>
      </div>
    </div>
    {/* Copyright */}
    <div className="text-center text-xs text-gray-400 mt-10">
      Copyright © 2023 mettamuse. All rights reserved.
    </div>
  </footer>
);

export default Footer; 