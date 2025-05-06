import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className="border-b border-gray-400 bg-white px-4 py-3 md:px-12 md:py-6 flex items-center justify-between">
     
      <div className="flex items-center gap-2 md:gap-8">
       
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Bitmap_Logo.png" alt="logo" className="h-10 w-10 object-contain" />
      </div>
      {/* Center: LOGO and Nav */}
      <div className="flex-1 flex flex-col items-center md:static md:flex md:flex-col">
        <div className="font-extrabold text-2xl md:text-3xl tracking-wide mb-1 md:mb-2">LOGO</div>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 lg:gap-12 mt-2">
          <Link to="/shop" className="font-bold tracking-wide hover:underline">SHOP</Link>
          <Link to="/skills" className="font-bold tracking-wide hover:underline">SKILLS</Link>
          <Link to="/stories" className="font-bold tracking-wide hover:underline">STORIES</Link>
          <Link to="/about" className="font-bold tracking-wide hover:underline">ABOUT</Link>
          <Link to="/contact" className="font-bold tracking-wide hover:underline">CONTACT US</Link>
        </div>
        {/* Mobile Nav Drawer */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center z-50 md:hidden animate-fade-in">
            <Link to="/shop" className="py-3 w-full text-center font-bold border-b" onClick={()=>setMenuOpen(false)}>SHOP</Link>
            <Link to="/skills" className="py-3 w-full text-center font-bold border-b" onClick={()=>setMenuOpen(false)}>SKILLS</Link>
            <Link to="/stories" className="py-3 w-full text-center font-bold border-b" onClick={()=>setMenuOpen(false)}>STORIES</Link>
            <Link to="/about" className="py-3 w-full text-center font-bold border-b" onClick={()=>setMenuOpen(false)}>ABOUT</Link>
            <Link to="/contact" className="py-3 w-full text-center font-bold" onClick={()=>setMenuOpen(false)}>CONTACT US</Link>
          </div>
        )}
      </div>
      {/* Right: Icons */}
      <div className="flex items-center gap-4 md:gap-6 text-xl md:text-2xl">
        <span title="Search">&#128269;</span>
        <span title="Wishlist">&#9825;</span>
        <span title="Cart">&#128722;</span>
        <span title="Profile" className='hidden md:block'>&#128100;</span>
        <span className="ml-1 text-sm md:text-base font-semibold hidden md:block">ENG <span className="text-xs">▼</span></span>
      </div>
    </nav>
  )
}

export default Navbar 