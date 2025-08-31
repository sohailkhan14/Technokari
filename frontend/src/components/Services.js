import React from 'react';
import {FaLaptopCode} from "react-icons/fa6";
import { FaArrowAltCircleRight } from 'react-icons/fa';
function Services() {
  return (
<div>   

  { /* ============  First Section Start ================= */ }

    <section className="services-section">
      <div className="services-bg"></div>
      <div className="services-container">
        <div className="services-content">
          <h1 className="services-title">
            Our <span className="highlight">Services</span>
          </h1>
          <p className="services-description">
            From web and mobile development to cloud infrastructure, AI
            solutions, and cybersecurity, we provide end-to-end technology
            services to help businesses thrive in the digital age.
          </p>
        </div>
      </div>
    </section>


  { /* ============  First Section Close ======================*/ }


{ /* ============  Second Section Start  ===================  */ }


    <section className="services">
      <div className="container">
        {/* Web & App Development */}
        <div className="service-grid">
          <div className="card-detail">
            <div className="icon-box">
              <FaLaptopCode/>
            </div>
            <h2>Web & Application Development</h2>
            <p>
              We build scalable, high-performance web applications and platforms tailored to your specific business needs. Our development team specializes in creating responsive web experiences that work flawlessly across all devices and browsers. From simple informational websites to complex enterprise platforms, we deliver solutions that combine cutting-edge technology with intuitive user experiences.
            </p>

            <h3>Technologies</h3>
            <div className="tags">
              <span>React</span>
              <span>Node.js</span>
              <span>TypeScript</span>
              <span>Next.js</span>
              <span>Express</span>
              <span>PostgreSQL</span>
              <span>MongoDB</span>
            </div>

            <button className="service-btn ">
              Learn More <FaArrowAltCircleRight/>
            </button>
          </div>

          <div className="benefits">
            <h3>Key Benefits</h3>
            <ul>
              <li>Responsive designs that work on all devices</li>
              <li>Optimized performance and loading speeds</li>
              <li>Accessible and user-friendly interfaces</li>
              <li>Secure coding practices and data protection</li>
              <li>Scalable architecture for future growth</li>
            </ul>
          </div>
        </div>




        {/* Shopify Website Development */}
        <div className="service-grid reverse">
          <div className="card-detail">
            <div className="icon-box">
              <FaLaptopCode/>
            </div>
            <h2>Shopify Website Development</h2>
            <p>
              We build fast, secure, and fully customized Shopify websites
              tailored to match your brand identity and business goals. Our
              expert team specializes in Shopify theme development and
              optimization.
            </p>

            <h3>Technologies</h3>
            <div className="tags">
              <span>Shopify</span>
              <span>Liquid</span>
              <span>JavaScript</span>
              <span>HTML/CSS</span>
              <span>Shopify CLI</span>
              <span>GitHub</span>
            </div>

            <button className="service-btn">
              Learn More <FaArrowAltCircleRight/>
            </button>
          </div>

          <div className="benefits">
            <h3>Key Benefits</h3>
            <ul>
              <li>Mobile-first responsive design</li>
              <li>Fast-loading and performance-optimized storefront</li>
              <li>Easy product management via Shopify Admin</li>
              <li>Secure checkout and payment gateway integration</li>
              <li>SEO-friendly and scalable architecture</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

{ /* ============  Second Section Close ===================  */ }

   </div>
  )
}

export default Services;
