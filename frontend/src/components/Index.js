import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FaReact } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaDocker } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { FaBrain } from 'react-icons/fa';
import { FaPlug } from 'react-icons/fa';
import { FaSyncAlt } from 'react-icons/fa';
import {FaQuoteLeft} from 'react-icons/fa';

function Index() {
  return (
    <div className="root" style={{ backgroundColor: "midnightblue", marginTop: "-30px" }}>


      { /* ================= First Section Start =========================== */}
      <section>
        {/* heading  left side portion */}
        <div style={{ marginLeft: "20px" }} >
          <p style={{ color: "white", fontSize: "50px", fontWeight: "bold" }}>  Empowering  Businesses </p>
          <p> <span style={{ color: "white", fontSize: "50px", fontWeight: "bold" }}> with </span>    <span style={{ color: "royalblue", fontSize: "50px", fontWeight: "bold" }}> Scalable </span> </p>
          <p>  <span style={{ color: "white", fontSize: "50px", fontWeight: "bold" }}> Tech </span>  <span style={{ color: "purple", fontSize: "50px", fontWeight: "bold" }}> Solutions </span> </p>
          <p style={{ color: "white", fontSize: "20px" }}> We transform visions into reality through cutting-edge   <br />
            technology, artful innovation, and scalable <br />
            architecture.</p>


          {/* button */}
          <a href='#contact'> <Button variant="outline-info">Schedule a Call <i class="bi bi-arrow-right"></i> </Button> </a>
          <a href='#case-studies'> <Button variant="outline-info">View Portfolio <i class="bi bi-box-arrow-in-up-right"></i> </Button> </a>
          <br /><br />

          {/* Tech Stack */}
          <p style={{ color: "white" }}>Leading with modern technology stack</p>
          <span style={{ backgroundColor: "black", color: "white", borderRadius: "10px", border: "1px solid black", padding: "10px", paddingRight: "20px", marginRight: "10px" }}>
            <FaReact />  React </span>
          <span style={{ backgroundColor: "black", color: "white", borderRadius: "10px", border: "1px solid black", padding: "10px", paddingRight: "20px", marginRight: "10px" }}> <FaReact /> React Native  </span>
          <span style={{ backgroundColor: "black", color: "white", borderRadius: "10px", border: "1px solid black", padding: "10px", paddingRight: "20px", marginRight: "10px" }} >   <i class="bi bi-javascript"></i> Node.js</span>
          <span style={{ backgroundColor: "black", color: "white", borderRadius: "10px", border: "1px solid black", padding: "10px", paddingRight: "20px", marginRight: "10px" }}>   <i class="bi bi-javascript"></i> Express.js</span>
          <span style={{ backgroundColor: "black", color: "white", borderRadius: "10px", border: "1px solid black", padding: "10px", paddingRight: "20px" }}> <FaReact /> Next.js </span>
          <br /><br />
          <span style={{ backgroundColor: "black", color: "white", borderRadius: "10px", border: "1px solid black", padding: "10px", paddingRight: "20px", marginRight: "10px" }}> <i class="bi bi-code-slash"></i> TypeScript </span>
          <span style={{ backgroundColor: "black", color: "white", borderRadius: "10px", border: "1px solid black", padding: "10px", paddingRight: "20px", marginRight: "10px" }}> <FaAws /> AWS </span>
          <span style={{ backgroundColor: "black", color: "white", borderRadius: "10px", border: "1px solid black", padding: "10px", paddingRight: "20px", marginRight: "10px" }} >  <FaDatabase /> MongoDB </span>
          <span style={{ backgroundColor: "black", color: "white", borderRadius: "10px", border: "1px solid black", padding: "10px", paddingRight: "20px", marginRight: "10px" }}>  <i class="bi bi-browser-firefox"></i> Firebase </span>
          <span style={{ backgroundColor: "black", color: "white", borderRadius: "10px", border: "1px solid black", padding: "10px", paddingRight: "20px", marginRight: "10px" }}> <FaDocker /> Docker   </span>
          <span style={{ backgroundColor: "black", color: "white", borderRadius: "10px", border: "1px solid black", padding: "10px", paddingRight: "20px", marginRight: "10px" }}> <FaPython /> Python </span>
          <br /><br />
          <span style={{
            backgroundColor: "black", color: "white", borderRadius: "10px", border: "1px solid black", padding: "10px", paddingRight: "20px", marginRight: "10px"
          }}> <GrGraphQl /> GraphQL </span>



          {/* Image set right side portion */}
          <div className=" banner-card">
            <img src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="Advanced technology visualization" className="w-full h-full object-cover opacity-80" />

            <div className=" banner-text">
              <h6> . Building next-gen digital experiences </h6>
            </div>
          </div>


        </div>
      </section>
      {/* ==========================  First Section CLOSE =================================================  */}


      { /* ================= Second Section START =========================== */}

      <section className="trusted-section">
        <div className="trusted-container">
          {/* Heading */}
          <div className="trusted-heading">
            <h2>Trusted by innovative companies worldwide</h2>
          </div>

          {/* Logos */}
          <div className="trusted-logos">
            <div className="trusted-logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="Google" />
            </div>
            <div className="trusted-logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="Amazon" />
            </div>
            <div className="trusted-logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Fiverr_Logo_09.2020.svg/2560px-Fiverr_Logo_09.2020.svg.png" alt="Fiverr" />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================  Second Section CLOSE =================================================  */}


      { /* ================= Third Section START =========================== */}
      <section id="services" className="services">
        {/* Background Overlay */}
        <div className="services-bg"></div>

        <div className="services-container">
          {/* Section Header */}
          <div className="services-header">
            <div className="expertise-badge">
              <span>Our Expertise</span>
            </div>
            <h2>
              Comprehensive Tech Solutions <br />
              for Every Business Need
            </h2>
            <p>
              We merge technical excellence with artistic innovation to deliver
              scalable, high-performance solutions that transform businesses.
            </p>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {/* Example Service Card */}
            <div className="service-card">
              <div className="service-icon">
                <i class="bi bi-code-slash"></i>
              </div>
              <h3>Web & App Development</h3>
              <p>
                Custom web applications and mobile experiences with modern
                frameworks and best practices for optimal performance.
              </p>
              <div className="tech-tags">
                <span>React</span>
                <span>Next.js</span>
                <span>React Native</span>
                <span>Flutter</span>
              </div>
              <a href="/services" className="learn-more">
                Learn more <i className="fas fa-arrow-right"></i>
              </a>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i class="bi bi-cloud-fill"></i>

              </div>
              <h3>Cloud Infrastructure</h3>
              <p>
                Scalable, secure cloud solutions with automated deployment
                pipelines and comprehensive monitoring systems.
              </p>
              <div className="tech-tags">
                <span>AWS</span>
                <span>Azure</span>
                <span>GCP</span>
                <span>Kubernetes</span>
              </div>
              <a href="/services" className="learn-more">
                Learn more <i className="fas fa-arrow-right"></i>
              </a>
            </div>


            <div className="service-card">
              <div className="service-icon">
                <i class="bi bi-rocket-takeoff-fill"></i>
              </div>
              <h3>Saas Platforms</h3>
              <p>

                End-to-end SaaS development from concept to market-ready product with subscription management and analytics.

              </p>
              <div className="tech-tags">
                <span>Microservices</span>
                <span>API-First</span>
                <span>Stripe</span>
                <span>Auth0</span>
              </div>
              <a href="/services" className="learn-more">
                Learn more <i className="fas fa-arrow-right"></i>
              </a>
            </div>

          </div>  {/* .services-grid  #First row close */}



          <div className="services-grid" style={{ marginTop: "20px" }}>
            {/* Example Service Card */}
            <div className="service-card">
              <div className="service-icon">
                <span style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "#38bdf8", fontSize: "1.5rem" }}>
                  <FaBrain /></span>
              </div>
              <h3> AI Solutions </h3>
              <p>
                Custom AI/ML models that drive business intelligence and automate complex workflows with practical applications.
              </p>
              <div className="tech-tags">
                <span>TensorFlow</span>
                <span>PyTorch</span>
                <span>Computer Vision</span>
                <span>NLP</span>
              </div>
              <a href="/services" className="learn-more">
                Learn more <i className="fas fa-arrow-right"></i>
              </a>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <span style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "#38bdf8", fontSize: "1.5rem" }}>
                  <FaPlug /></span>

              </div>
              <h3>Enterprise APIs</h3>
              <p>
                Secure, Scalable, and well-documented APIs that connect systems and enable new business capabilities.
              </p>
              <div className="tech-tags">
                <span>RESTful</span>
                <span>GraphQL</span>
                <span>OAuth</span>
                <span>Swagger</span>
              </div>
              <a href="/services" className="learn-more">
                Learn more <i className="fas fa-arrow-right"></i>
              </a>
            </div>


            <div className="service-card">
              <div className="service-icon">
                <span style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "#38bdf8", fontSize: "1.5rem" }}>
                  <FaSyncAlt /></span>

              </div>
              <h3>Digital Transformation </h3>
              <p>

                Comprehensive strategies that modernize legacy systems and revitalize business processes with modern tech.
              </p>
              <div className="tech-tags">
                <span>Legacy Migration </span>
                <span>Process Automation</span>
                <span>Data Integration</span>
                <span>DevOps</span>
              </div>
              <a href="/services" className="learn-more">
                Learn more <i className="fas fa-arrow-right"></i>
              </a>
            </div>

          </div>  {/* .services-grid  #second row close */}

          {/* CTA Button */}
          <div className="services-cta">
            <a href="#contact">
              <button className="cta-btn">
                <span>Discuss Your Project Needs</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </a>
          </div>
        </div>
      </section>

      { /* ================= Third Section close  =========================== */}

      { /* ================= Fourth Section start  =========================== */}

      <section id="case-studies" className="case-studies">
        <div className="container">
          {/* Header */}
          <div className="header">
            <h2>Our Projects</h2>
            <p>
              Explore our work and see how we've helped businesses achieve their
              goals through innovative solutions.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="filter-buttons">
            <button className="active">Brainbuddy</button>
            <button>OpiGo</button>
            <button>Hindu Calendar & Panchang</button>
          </div>


          {/* Grid Layout */}
          <div className="grid">
            {/* Left - Mobile Mockup */}
            <div className="mockup">
              <div className="phone-frame">
                <div className="phone-notch">
                  <div className="notch"></div>
                </div>
                
                <img src= "/Brainbuddy/opi1a.png"  alt="Brainbuddy: Quit Porn Forever"/>
                
                <div className="phone-indicator"></div>
                <div className="badge">Health & Wellness</div>
              </div>
            </div>

            {/* Right - Case Study Info */}
            <div className="content">
              <div className="category">Health & Wellness</div>
              <h3>Brainbuddy: Quit Porn Forever</h3>
              <p>
                A comprehensive mobile application designed to help users overcome
                porn addiction through personalized recovery plans, progress
                tracking, and community support.
              </p>

              {/* Technologies */}
              <div className="technologies">
                <h4>Technologies</h4>
                <div className="tech-list">
                  <span>React Native</span>
                  <span>Redux</span>
                  <span>Firebase</span>
                  <span>Push Notifications</span>
                </div>
              </div>

              {/* Button */}
              <button className="case-btn">
                View Case Study <i class="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>

          {/* View All Projects */}
          <div className="view-all">
            <a href="/case-studies">View All Projects</a>
          </div>
        </div>
      </section>
      { /* ================= Fourth Section close =========================== */}


      { /* ================= Fifth Section Start  =========================== */}
    

    <section className="testimonials-section">
      <div className="bg-overlay"></div>
      <div className="container">
        {/* Header */}
        <div className="header">
          <div className="tag">Testimonials</div>
          <h2 className="title">What Our Clients Say</h2>
          <p className="subtitle">
            Don't just take our word for it. Hear from businesses we've helped
            transform through technology.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonial-slider">
          <div className="testimonial-grid">
            {/* Card 1 */}
            <div className="testimonial-card">
              <div className="quote-icon"><FaQuoteLeft/></div>
              <p className="message">
                Technokari transformed our outdated systems into a streamlined
                digital ecosystem. Their team's technical excellence combined
                with creative vision delivered results beyond our expectations.
              </p>
              <div className="author">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                  alt="Michael Johnson"
                />
                <div>
                  <h4>Michael Johnson</h4>
                  <p className="role">CTO, InnovateTech</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="testimonial-card">
              <div className="quote-icon"> <FaQuoteLeft/> </div>
              <p className="message">
                Working with Technokari was a game-changer for our startup.
                Their SaaS development expertise helped us bring our product to
                market in half the expected time while maintaining exceptional
                quality.
              </p>
              <div className="author">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                  alt="Priya Sharma"
                />
                <div>
                  <h4>Priya Sharma</h4>
                  <p className="role">CEO, Nexus Solutions</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="testimonial-card">
              <div className="quote-icon"> <FaQuoteLeft/> </div>
              <p className="message">
                The AI-powered analytics solution Technokari built for us has
                completely transformed our decision-making process. We're now
                able to predict market trends with 85% accuracy.
              </p>
              <div className="author">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80"
                  alt="David Rodriguez"
                />
                <div>
                  <h4>David Rodriguez</h4>
                  <p className="role">COO, Meridian Analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Dots */}
        <div className="dots">
          <button className="active"></button>
          <button></button>
          <button></button>
        </div>

        {/* Stats Section */}
        <div className="stats">
          <div>
            <h3>120+</h3>
            <p>Projects Completed</p>
          </div>
          <div>
            <h3>50+</h3>
            <p>Happy Clients</p>
          </div>
          <div>
            <h3>35+</h3>
            <p>Tech Experts</p>
          </div>
          <div>
            <h3>8+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </div>
    </section>

      { /* ================= Fifth Section close =========================== */}





     

    </div>  /* root */
  )
}

export default Index

