import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './Hero.css';
import BlobAnimation from './blob';
import './Hero.scss'



export default function Hero(){
    useEffect(() => {
        const options = {
          strings: ["Programmer", "Developer", "Digital Artist"],
          typeSpeed: 150,
          backSpeed: 150,
          loop: true,
        };
        const typed = new Typed(".Autotext", options);
        return () => {
            typed.destroy();
          };
        }, []);
    return(
        <>
        <section id="hero_section" className="hero-section">
            <div className="content-box">
                <div className="content">
                    <div className="headings">
                        <h1 className="hero-title">
                            Hey, I'm Harsh
                            
                        </h1>
                        <h1 className='Auto'>
                            <span className="Autotext">
                                
                            </span>
                        </h1>
                        <p className="description">
                            Trying to combines creativity and technology <br /> to build impactful solutions.
                        </p>
                    </div>
                    <button className='btn hero-btn'>Get in Touch</button>
                </div>

            </div>
            <div className="hero-image">
              {/* <div class="blobs">
                <div class="blob"></div>
                <div class="blob"></div>
                <div class="blob"></div>
              </div> */}
                <BlobAnimation size="30vw" />
            
                <img src="src/assets/prof.png" alt="hero Section" />
            </div>
        </section>
        </>
    )
}