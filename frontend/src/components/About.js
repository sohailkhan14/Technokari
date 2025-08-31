import React from 'react'
function About() {
  return (
    <div>

  { /* ============  First Section Start ================= */ }

    <section className="about-section">
      <div className="about-bg"></div>
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-title">
            About <span className="highlight">Technokari</span>
          </h1>
          <p className="about-description">
           We're a team of passionate technologists on a mission to help businesses leverage the power <br/>
            of technology to drive innovation and achieve their goals.
          </p>
        </div>
      </div>
    </section>
  { /* ============  First Section Close ======================*/ }
  

 <section className="our-story">
      <div className="container">
        <div className="story-grid">
          {/* Background Gradient Box */}
          <div className="gradient-box"></div>

          {/* Story Content */}
          <div className="story-content">
            <h2 className="title">
              Our <span className="highlight">Story</span>
            </h2>
            <div className="text-content">
              <p>
                Founded in 2015, Technokari began with a simple vision: to create
                technology solutions that make a difference. Our founders,
                experienced technologists themselves, saw that many businesses
                were struggling to navigate the rapidly evolving digital
                landscape and needed a partner who could guide them through
                their transformation journey.
              </p>
              <p>
                Starting with a small team of dedicated developers and
                designers, we've grown into a full-service technology agency
                with expertise spanning web and mobile development, cloud
                infrastructure, artificial intelligence, and cybersecurity.
              </p>
              <p>
                Over the years, we've had the privilege of working with clients
                ranging from ambitious startups to established enterprises
                across various industries, helping them leverage technology to
                drive innovation, efficiency, and growth.
              </p>
              <p>
                Today, with offices in multiple countries and a team of over 100
                professionals, we remain committed to our founding principles:
                delivering exceptional quality, fostering genuine partnerships
                with our clients, and pushing the boundaries of what's possible
                with technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


    </div>
  )
}

export default About
