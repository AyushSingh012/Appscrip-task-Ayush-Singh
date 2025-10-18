'use client';
import { useState } from 'react';
import Link from 'next/link';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">LOGO</div>

      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link href="#">Shop</Link>
        <Link href="#">Skills</Link>
        <Link href="#">Stories</Link>
        <Link href="#">About</Link>
        <Link href="#">Contact Us</Link>
      </nav>

      <div className="icons">
        <span>🔍</span>
        <span>❤️</span>
        <span>🛒</span>
        <span>👤</span>
      </div>

      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </header>
  );
}
