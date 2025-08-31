import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from "react-icons/fa";

const Contact = () =>{    
const [Name ,setName] = useState('');
const [Email , setEmail] = useState('');
const [Service , setService] = useState('');
const [Message , setMessage] = useState('');

    const collectdata = async() => {
        if (!Name || !Email || !Service || !Message) {
  alert("All fields are required");
  return;
}
        console.warn(Name,Email,Service,Message)
        let result = await fetch('http://localhost:5000/register-forms',{
            method:'POST',
            body: JSON.stringify({Name,Email,Service,Message}),
            headers: {
                'Content-Type':'application/json'
            },
        });
      
     
            result = await result.json()
        console.warn(result);
        localStorage.setItem("user",JSON.stringify(result.result));    
        localStorage.setItem("token",JSON.stringify(result.auth));
      }
      
  return (
    <div>
      
  { /* ============  First Section Start ================= */ }

    <section className="contact-section">
      <div className="contact-bg"></div>
      <div className="contact-container">
        <div className="contact-content">
          <h1 className="contact-title">
             <span className="highlight">Get in Touch</span>
          </h1>
          <p className="contact-description">
           Have a project in mind or want to learn more about our services? We'd love to hear from you <br/>
           and discuss how we can help.
          </p>
        </div>
      </div>
    </section>

  { /* ============  First Section Close ======================*/ }


    { /* ============  Second Section Start ================= */ }

    <section className="contact-section2">
      <div className="container">
        <div className="contact-grid">
          {/* ===== Left Side (Form) ===== */}
          <div className="form-box">
            <h2 className="section-title">Send Us a Message</h2>
            <form className="register-forms"> 
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="Enter your name" value = {Name} onChange={(e)=>setName(e.target.value) } />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" name="email" value={Email} onChange={(e) =>setEmail(e.target.value)}/>
              </div>

              <div className="form-group">
                <label>Service of Interest </label>
                <input type= "text" placeholder="Select a service" id= "course"  name= "course"  list="mytechlist"  value={Service} onChange={(e)=>setService(e.target.value)} />
                <datalist id= "mytechlist">  
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="cloud-infrastructure">Cloud Infrastructure</option>
                  <option value="ai-ml">AI & Machine Learning</option>
                  <option value="database-api">Database & API Development</option>
                  <option value="cybersecurity">Cybersecurity Solutions</option>
                  <option value="other">Other</option>
              </datalist>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  placeholder="Tell us about your project or inquiry"
                  name="message" value={Message} onChange={(e)=> setMessage(e.target.value)}
                ></textarea>
              </div>

              <button type="submit" onClick= {collectdata}  className="submit-btn">
                Send Message
              </button>
            </form>
          </div>

          {/* ===== Right Side (Info + Socials) ===== */}
          <div className="info-box">
            <div>
              <h2 className="section-title">Other Ways to Connect</h2>

              {/* Email */}
              <div className="info-card">
                <div className="icon-circle">
<MdEmail />
                </div>
                <div>
                  <h3>Email Us</h3>
                  <p>General Inquiries:</p>
                  <a href="mailto:info@technokari.com">info@technokari.com</a>
                </div>
              </div>

              {/* Phone */}
              <div className="info-card">
                <div className="icon-circle">
                  <IoIosCall />

                </div>
                <div>
                  <h3>Call Us</h3>
                  <p><a href="tel:+919638819704">+91 96388 19704</a></p>
                  <p><a href="tel:+919904029899">+91 99040 29899</a></p>
                  <p><a href="tel:+918530088085">+91 85300 88085</a></p>
                  <p><a href="tel:+919879491994">+91 98794 91994</a></p>
                </div>
              </div>

              {/* Schedule a Call */}
              <div className="info-card">
                <div className="icon-circle">
                  <SlCalender />

                </div>
                <div>
                  <h3>Schedule a Call</h3>
                  <p>
                    Would you prefer a direct conversation? Schedule a call with
                    one of our experts at a time that works for you.
                  </p>
                  <a
                    href="mailto:meetings@technokari.com?subject=Meeting%20Request"
                    className="call-btn"
                  >
                     Request a Call
                  </a>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div className="social-section">
              <h2 className="section-title">Follow Us</h2>
              <div className="social-links">
                <a href="#">  <FaTwitter/> </a>
                <a href="#">  <FaLinkedin/> </a>
                <a href="#">  <FaGithub/>  </a>
                <a href="#"> <FaInstagram/> </a>
                <a href="#"> <FaYoutube/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


        { /* ============  Second Section End ================= */ }



    </div>
  )
}

export default Contact;

