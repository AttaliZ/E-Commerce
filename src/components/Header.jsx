import React, { useState } from 'react';

// Header Component
function Header() {
  return (
    <header className="bg-green-700 text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <span className="text-2xl font-bold">TeaHaven</span>
          <span className="ml-2 italic text-green-200">ชาคุณภาพเยี่ยม</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-green-200">หน้าหลัก</a></li>
            <li><a href="#" className="hover:text-green-200">สินค้า</a></li>
            <li><a href="#" className="hover:text-green-200">เกี่ยวกับเรา</a></li>
            <li><a href="#" className="hover:text-green-200">ติดต่อ</a></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="hover:text-green-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="hover:text-green-200 relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xs">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="bg-green-50 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">ค้นพบโลกแห่งชาคุณภาพ</h1>
          <p className="text-lg text-gray-600 mb-6">ชาชั้นเลิศคัดสรรจากแหล่งปลูกที่ดีที่สุดทั่วโลก เพื่อมอบประสบการณ์การดื่มชาที่พิเศษให้กับคุณ</p>
          <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition">
            ช้อปเลย
          </button>
        </div>
        <div className="md:w-1/2">
          <img src="/api/placeholder/600/400" alt="ชาคุณภาพ" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}

// Featured Products Component
function FeaturedProducts() {
  const products = [
    { id: 1, name: 'ชาเขียวมัทฉะ', price: 350, image: '/api/placeholder/300/300' },
    { id: 2, name: 'ชาอู่หลงเบอร์ 12', price: 450, image: '/api/placeholder/300/300' },
    { id: 3, name: 'ชาอัสสัม', price: 280, image: '/api/placeholder/300/300' },
    { id: 4, name: 'ชาดำออแกนิค', price: 320, image: '/api/placeholder/300/300' }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">สินค้าแนะนำ</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-lg font-bold text-green-700">{product.price} บาท</span>
                  <button className="bg-green-100 text-green-800 px-3 py-1 rounded-full hover:bg-green-200 transition">
                    เพิ่มลงตะกร้า
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="border-2 border-green-700 text-green-700 px-6 py-2 rounded-lg hover:bg-green-50 transition">
            ดูสินค้าทั้งหมด
          </button>
        </div>
      </div>
    </section>
  );
}

// Tea Benefits Section
function TeaBenefits() {
  const benefits = [
    { title: 'อุดมด้วยสารต้านอนุมูลอิสระ', description: 'ช่วยปกป้องเซลล์จากความเสียหาย' },
    { title: 'เสริมสร้างระบบภูมิคุ้มกัน', description: 'ช่วยให้ร่างกายแข็งแรง ต้านทานโรคได้ดี' },
    { title: 'ช่วยผ่อนคลายความเครียด', description: 'ดื่มชาอุ่นๆ เพื่อความผ่อนคลายทั้งกายและใจ' }
  ];
  
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-green-800">ประโยชน์ของชา</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">การดื่มชาเป็นประจำไม่เพียงแต่ให้ความสุขแก่คุณ แต่ยังมอบประโยชน์มากมายต่อสุขภาพ</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-green-700">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function Testimonials() {
  const testimonials = [
    { name: 'สมศรี จิตรดี', comment: 'ชาที่นี่มีคุณภาพมากๆ กลิ่นหอมและรสชาติกลมกล่อม ประทับใจมาก!', avatar: '/api/placeholder/64/64' },
    { name: 'ประสิทธิ์ ใจดี', comment: 'สั่งชาจากร้านนี้เป็นประจำ บริการดีเยี่ยม สินค้าส่งเร็ว รสชาติคงที่', avatar: '/api/placeholder/64/64' }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">ลูกค้าของเรา</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              </div>
              <p className="text-gray-700 italic">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Newsletter Section
function Newsletter() {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('ขอบคุณที่ลงทะเบียนรับข่าวสาร!');
    setEmail('');
  };
  
  return (
    <section className="py-12 bg-green-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">รับข่าวสารและโปรโมชั่นพิเศษ</h2>
        <p className="mb-6 max-w-2xl mx-auto">ลงทะเบียนเพื่อรับข่าวสาร เคล็ดลับการชงชา และโปรโมชั่นพิเศษ</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="อีเมลของคุณ" 
            className="px-4 py-3 rounded-l md:rounded-r-none outline-none text-gray-800 flex-grow"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button 
            type="submit" 
            className="bg-green-900 px-6 py-3 rounded-r md:rounded-l-none hover:bg-green-800 transition mt-2 md:mt-0"
          >
            สมัครรับข่าวสาร
          </button>
        </form>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">TeaHaven</h3>
            <p className="mb-4">ร้านชาคุณภาพที่คัดสรรชาชั้นดีจากทั่วทุกมุมโลก</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white">
                <span className="sr-only">LINE</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595a.64.64 0 01.199-.035c.211 0 .391.09.51.25l2.444 3.318V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771h-.002zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.626-.285-.626-.629V8.108c0-.345.281-.63.626-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">หมวดหมู่</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">ชาเขียว</a></li>
              <li><a href="#" className="hover:text-white">ชาดำ</a></li>
              <li><a href="#" className="hover:text-white">ชาอู่หลง</a></li>
              <li><a href="#" className="hover:text-white">ชาขาว</a></li>
              <li><a href="#" className="hover:text-white">ชาสมุนไพร</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">ช่วยเหลือ</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">คำถามที่พบบ่อย</a></li>
              <li><a href="#" className="hover:text-white">การสั่งซื้อ</a></li>
              <li><a href="#" className="hover:text-white">การจัดส่ง</a></li>
              <li><a href="#" className="hover:text-white">การชำระเงิน</a></li>
              <li><a href="#" className="hover:text-white">นโยบายความเป็นส่วนตัว</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">ติดต่อเรา</h4>
            <address className="not-italic">
              <p className="mb-2">123 ถนนสุขุมวิท</p>
              <p className="mb-2">กรุงเทพมหานคร 10110</p>
              <p className="mb-2">โทร: 02-123-4567</p>
              <p className="mb-2">อีเมล: info@teahaven.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} TeaHaven. สงวนลิขสิทธิ์.</p>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
function TeaWebsite() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProducts />
        <TeaBenefits />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default Header;
export { HeroSection, FeaturedProducts, TeaBenefits, Testimonials, Newsletter, Footer, TeaWebsite };