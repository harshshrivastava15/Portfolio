import React, { useEffect } from 'react';
import Typed from 'typed.js';



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
        <div id="hero_section" className="hero-section">
            <div className="content-box">
                <div className="content">
                    <div className="headings">
                        <h1 className="hero-title">
                            Hey, I'm Harsh
                        </h1>
                        <h1>
                            <span className="Autotext">
                                
                            </span>
                        </h1>
                        <p className="description">
                            Trying to combines creativity and technology to build impactful,
                            <br />
                            visually engaging solutions.
                        </p>
                    </div>
                    <button>Get in Touch</button>
                </div>

            </div>
            <div className="hero-image">
                <img src="src/assets/prof.png" alt="hero Section" />
            </div>
        </div>
        </>
    )
}