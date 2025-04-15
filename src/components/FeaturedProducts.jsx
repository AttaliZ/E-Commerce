import React from 'react';
import '../App.css';
import image1 from '../img/1.jpeg';
import image2 from '../img/2.jpg';
import image3 from '../img/3.jpg';
import image4 from '../img/4.jpg';

function FeaturedProducts() {
  const products = [
    { id: 1, name: 'ชาเขียวมัทฉะ', price: 350, image: image1, tag: 'organic' },
    { id: 2, name: 'ชาอู่หลงเบอร์ 12', price: 450, image: image2, tag: 'new' },
    { id: 3, name: 'ชาอัสสัม', price: 280, image: image3 },
    { id: 4, name: 'ชาดำออแกนิค', price: 320, image: image4, tag: 'sale' },
  ];

  return (
    <section className="featured-products">
      <div className="container">
        <h2 className="section-title">สินค้าแนะนำ</h2>
        
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div style={{ position: 'relative' }}>
                {product.tag && (
                  <span className={`product-tag tag-${product.tag}`}>
                    {product.tag === 'new' && 'ใหม่'}
                    {product.tag === 'sale' && 'ลดราคา'}
                    {product.tag === 'organic' && 'ออแกนิค'}
                  </span>
                )}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-image" 
                />
              </div>
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-price-row">
                  <span className="product-price">{product.price} บาท</span>
                  <button className="add-to-cart-btn">
                    เพิ่มลงตะกร้า
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all-btn-container">
          <button className="btn btn-outline">
            ดูสินค้าทั้งหมด
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;