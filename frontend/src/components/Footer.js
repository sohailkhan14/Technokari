import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
function Footer() {
  return (
  <div>
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-grid">
          {/* Company Info */}
          <div>
            <a href="#" className="footer-logo">
              <span className="accent">Techno</span>kari
              <span className="secondary">.</span>
            </a>
            <p>
              Empowering businesses with scalable tech solutions that merge
              technical excellence with artistic innovation.
            </p>

            {/* Social Icons */}
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn">
              <FaLinkedin/>
              </a>
              <a href="#" aria-label="Twitter">
              <FaTwitter/>
              </a>
              <a href="#" aria-label="GitHub">
              <FaGithub/>
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram/>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3>Services</h3>
            <ul>
              <li><a href="#">Web & App Development</a></li>
              <li><a href="#">Cloud Infrastructure</a></li>
              <li><a href="#">SaaS Platforms</a></li>
              <li><a href="#">AI Solutions</a></li>
              <li><a href="#">Enterprise APIs</a></li>
              <li><a href="#">Digital Transformation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3>Company</h3>
            <ul>
              <li><a href="about">About Us</a></li>
              <li><a href="case-studies">Case Studies</a></li>
              <li><a href="careers">Careers</a></li>
              <li><a href="blog">Blog</a></li>
              <li><a href="contact">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>© 2025 Technokari. All rights reserved.</p>
          <div>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/cookie-policy">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  
  </div>
  )
}

export default Footer;
