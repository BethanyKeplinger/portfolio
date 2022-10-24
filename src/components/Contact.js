import { motion } from "framer-motion";
import React from "react";

export default function Contact () {
    return (
        <section id="contact">
            <div className="container">
                <h1 className="contact-title">Contact</h1>
                <div className="contact-contents">
                    <h3 className="contact-sub">Interested in working together?</h3>
                    <motion.a 
                        transition= {{duration: ".8", type: "tween"}}
                        whileHover={{backgroundColor: "#E2D1F9", 
                            color: "#317773",                  
                            boxShadow: "0px 0px 8px (rgb 255, 255, 255)",
                        }}
                        href="mailto:bethanymkeplinger@gmail.com" className="btn btn-lg projects-button" role="button" >Yes!
                    </motion.a>
                </div>

            </div>
        </section>
    )
}