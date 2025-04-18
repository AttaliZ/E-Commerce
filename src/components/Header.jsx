import React, { useState } from 'react';
import '../App.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-logo">
          <span className="header-logo-text">TeaHaven</span>
          <span className="header-logo-tagline">ชาคุณภาพเยี่ยม</span>
        </div>
        
        <nav className={`header-nav ${isMenuOpen ? 'mobile-open' : ''}`}>
          <ul>
            <li><a href="#" className="header-nav-link">หน้าหลัก</a></li>
            <li><a href="#" className="header-nav-link">สินค้า</a></li>
            <li><a href="#" className="header-nav-link">เกี่ยวกับเรา</a></li>
            <li><a href="#" className="header-nav-link">ติดต่อ</a></li>
          </ul>
        </nav>
        
        <div className="header-actions">
          <button className="header-icon-btn">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          <button className="header-icon-btn">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="cart-badge">{cartItems}</span>
          </button>
          
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content slide-in-up">
          <h1 className="hero-title">ค้นพบโลกแห่งชาคุณภาพ</h1>
          <p className="hero-description">ชาชั้นเลิศคัดสรรจากแหล่งปลูกที่ดีที่สุดทั่วโลก เพื่อมอบประสบการณ์การดื่มชาที่พิเศษให้กับคุณ</p>
          <button className="btn btn-primary">
            ช้อปเลย
          </button>
        </div>
        
        <div className="hero-image-container fade-in">
          <img src="/api/placeholder/600/400" alt="ชาคุณภาพ" className="hero-image" />
        </div>
        
        {/* Decorative Elements */}
        <svg className="hero-leaf-decoration hero-leaf-1" width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.5,12c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5s2.5-1.1,2.5-2.5S18.9,12,17.5,12z M17.5,16c-0.8,0-1.5-0.7-1.5-1.5 s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S18.3,16,17.5,16z M12.8,12.9c0,0-0.1-0.1-0.2-0.1c-0.2-0.1-0.3-0.3-0.3-0.5 c0-0.1,0.1-0.3,0.5-0.3c0.2,0,0.4,0.1,0.6,0.2c0.1,0,0.1,0.1,0.2,0.1c0.2,0.1,0.3,0.1,0.5,0c0.1-0.1,0.2-0.3,0.1-0.5 c-0.4-1-1.4-1.7-2.5-1.7c-1.5,0-2.7,1-2.7,2.4c0,0.8,0.3,1.4,1,1.8c0.1,0.1,0.2,0.1,0.3,0.2c0.2,0.1,0.4,0.2,0.5,0.3 c0.2,0.2,0.3,0.4,0.3,0.6c0,0.3-0.3,0.6-0.8,0.6c-0.5,0-0.8-0.2-1.2-0.5c-0.1-0.1-0.2-0.1-0.3-0.2c-0.1-0.1-0.3-0.1-0.4-0.1 c-0.2,0-0.3,0.1-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5c0.1,0.1,0.2,0.2,0.3,0.3c0.9,0.7,1.7,1,2.7,1c1.6,0,2.8-1.1,2.8-2.6 C14,14,13.6,13.3,12.8,12.9z M6.5,12C5.1,12,4,13.1,4,14.5S5.1,17,6.5,17S9,15.9,9,14.5S7.9,12,6.5,12z M6.5,16 C5.7,16,5,15.3,5,14.5S5.7,13,6.5,13S8,13.7,8,14.5S7.3,16,6.5,16z M16,2H8C4.4,2,2,4.4,2,8v8c0,3.6,2.4,6,6,6h8c3.6,0,6-2.4,6-6 V8C22,4.4,19.6,2,16,2z"/>
        </svg>
        
        <svg className="hero-leaf-decoration hero-leaf-2" width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.5,12c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5s2.5-1.1,2.5-2.5S18.9,12,17.5,12z M17.5,16c-0.8,0-1.5-0.7-1.5-1.5 s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S18.3,16,17.5,16z M12.8,12.9c0,0-0.1-0.1-0.2-0.1c-0.2-0.1-0.3-0.3-0.3-0.5 c0-0.1,0.1-0.3,0.5-0.3c0.2,0,0.4,0.1,0.6,0.2c0.1,0,0.1,0.1,0.2,0.1c0.2,0.1,0.3,0.1,0.5,0c0.1-0.1,0.2-0.3,0.1-0.5 c-0.4-1-1.4-1.7-2.5-1.7c-1.5,0-2.7,1-2.7,2.4c0,0.8,0.3,1.4,1,1.8c0.1,0.1,0.2,0.1,0.3,0.2c0.2,0.1,0.4,0.2,0.5,0.3 c0.2,0.2,0.3,0.4,0.3,0.6c0,0.3-0.3,0.6-0.8,0.6c-0.5,0-0.8-0.2-1.2-0.5c-0.1-0.1-0.2-0.1-0.3-0.2c-0.1-0.1-0.3-0.1-0.4-0.1 c-0.2,0-0.3,0.1-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5c0.1,0.1,0.2,0.2,0.3,0.3c0.9,0.7,1.7,1,2.7,1c1.6,0,2.8-1.1,2.8-2.6 C14,14,13.6,13.3,12.8,12.9z M6.5,12C5.1,12,4,13.1,4,14.5S5.1,17,6.5,17S9,15.9,9,14.5S7.9,12,6.5,12z M6.5,16 C5.7,16,5,15.3,5,14.5S5.7,13,6.5,13S8,13.7,8,14.5S7.3,16,6.5,16z M16,2H8C4.4,2,2,4.4,2,8v8c0,3.6,2.4,6,6,6h8c3.6,0,6-2.4,6-6 V8C22,4.4,19.6,2,16,2z"/>
        </svg>
      </div>
    </section>
  );
}

export default Header;