import React from 'react';
import '../App.css';
import image1 from '../img/p1.jpg';
import image2 from '../img/p2.jpg';

function Testimonials() {
  const testimonials = [
    { 
      name: 'ประหยัด จันอังคาร', 
      comment: 'ชาที่นี่มีคุณภาพมากๆ กลิ่นหอมและรสชาติกลมกล่อม ประทับใจมาก! ต้องบอกว่าเป็นร้านชาที่ดีที่สุดที่เคยสั่งซื้อ', 
      avatar: image1,
      rating: 5
    },
    { 
      name: 'ประสิทธิ์ ใจดี', 
      comment: 'สั่งชาจากร้านนี้เป็นประจำ บริการดีเยี่ยม สินค้าส่งเร็ว รสชาติคงที่ และบรรจุภัณฑ์สวยงามเป็นมิตรกับสิ่งแวดล้อม', 
      avatar: image2,
      rating: 5
    }
  ];
  
  // Render star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className="star">
          {i < rating ? '★' : '☆'}
        </span>
      );
    }
    return stars;
  };
  
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">ลูกค้าของเรา</h2>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="testimonial-avatar" 
                />
                <div>
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <div className="rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="testimonial-comment">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;