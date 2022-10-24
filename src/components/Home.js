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
                    <h1 className="display-3 hero-title"> Hi, I'm <span className="name-span">Bethany Keplinger,</span></h1>
                    <p className="lead subtitle">I'm a Software Engineer. </p>
                </motion.div>

                <div className="button-container">
                    <motion.a 
                        animate={{backgroundColor: "#ae6bf2"}}
                        transition= {{duration: "1", type: "tween"}}
                        whileHover={{backgroundColor: "#3a6df0", 
                            color: "white",                  
                            boxShadow: "0px 0px 8px (rgb 255, 255, 255)",
                        }}
                        href="#projects" className="btn btn-lg projects-button" role="button" >Take a Look <div className="fill"></div>
                    </motion.a>
                </div>

                {/* btn btn-primary projects-button */}
                {/* <hr className="my-4"/> */}
                
            </div>
        </section>
    )
}