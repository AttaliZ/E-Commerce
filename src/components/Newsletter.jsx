import React, { useState } from 'react';
import '../App.css';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };
  
  return (
    <section className="newsletter">
      <div className="container newsletter-container">
        {/* SVG Tea Cup Icon */}
        <svg className="tea-cup-icon" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2,21h14v-2H2V21z M20,8h-2V5h2V8z M20,19h-2v-9h2V19z M16,5v3H6C4.343,8,3,9.343,3,11v5 c0,2.757,2.243,5,5,5h3c2.757,0,5-2.243,5-5v-9C16,6.343,17.343,5,19,5H16z M14,16c0,1.654-1.346,3-3,3H8c-1.654,0-3-1.346-3-3v-5 c0-0.552,0.448-1,1-1h8V16z"/>
        </svg>
        
        <h2 className="newsletter-title">รับข่าวสารและโปรโมชั่นพิเศษ</h2>
        <p className="newsletter-description">
          ลงทะเบียนเพื่อรับข่าวสาร เคล็ดลับการชงชา และโปรโมชั่นพิเศษส่งตรงถึงอีเมลของคุณ
        </p>
        
        {isSubmitted ? (
          <div className="newsletter-success">
            <p>🎉 ขอบคุณที่ลงทะเบียนรับข่าวสาร!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input 
              type="email" 
              placeholder="อีเมลของคุณ" 
              className="newsletter-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit" 
              className="newsletter-button"
            >
              สมัครรับข่าวสาร
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Newsletter;