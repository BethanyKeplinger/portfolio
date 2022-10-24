import React from "react";
import { motion } from "framer-motion"

export default function Home () {
    return (
        <section id="home" className="jumbotron ">
            <div id="container home-container">
                <motion.div 
                    animate={{
                        x: '100px'    
                    }}
                    transition={{
                        type: 'tween',
                        duration: 2
                    }}
                    >
                    <h1 className="display-3 hero-title"> Hi, I'm 
                        <motion.span 

                        className="name-span"> Bethany Keplinger.</motion.span></h1>
                        <p className="lead subtitle">I'm a Software Engineer. </p>
                </motion.div>

                <div className="button-container">
                    <motion.a 
                        transition= {{duration: ".8", type: "tween"}}
                        whileHover={{backgroundColor: "#E2D1F9", 
                            color: "#317773",                  
                            boxShadow: "0px 0px 8px (rgb 255, 255, 255)",
                        }}
                        href="#projects" className="btn btn-lg projects-button" role="button" >Take a Look
                    </motion.a>
                </div>

                {/* btn btn-primary projects-button */}
                {/* <hr className="my-4"/> */}
                
            </div>
        </section>
    )
}