import React from "react";
import { motion } from "framer-motion";
import bethany from "../img/bethany.jpg";
import resume from "../files/resume.pdf";


export default function About() {
    return (
        <section id="about">
            <div className="container about-section">
                <div className="row">
                    <div className="col-4">
                        <img src={bethany} className="headshot" alt="Headshot of Bethany Keplinger looking at the camera with plants on shelves behind her"></img>
                    </div>
                    <div className="col-8 about-contents">
                        <p>I’m a web developer living in Portland, Maine seeking to support environmental
                        sustainability in my work life. After several years in childhood
                        development, I enrolled in a coding bootcamp and it turned out that programming required many similar
                        skills, like problem
                        solving and multi-tasking. As a developer, I want to use code to solve some of the planets’
                        biggest problems.</p>

                        <p>When I'm not working on my web development skills, you can find me in my garden, at a greenhouse
                        or thrifting to find new treasures for my home.</p>

                        <p>I am currently available for full-time work in the New England area or remotely.</p>
                        
                        <p>HTML | CSS | JavaScript | React | Angular | Node.js | MongoDB</p>

                        {/* <div className="resumebtn-container"> */}
                            <motion.a 
                           
                            transition= {{duration: ".8", type: "tween"}}
                            whileHover={{backgroundColor: "#E2D1F9", 
                                color: "#317773",                  
                                boxShadow: "0px 0px 8px (rgb 255, 255, 255)",
                            }}href= {resume} target="_blank" className="btn btn-lg resume-button" role="button" >Resume</motion.a>
                        {/* </div> */}

                    </div>
                </div>    
            </div>
        </section>
    )

}