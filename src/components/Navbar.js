import React from "react";
import { motion } from "framer-motion";
import resume from "../files/resume.pdf";

export default function Navbar() {
    return (
        <header className="md:sitcky">
           
                <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
                    <div className="container-fluid"> 
                        {/* <div className="collapse navbar-collapse"> */}
                            <motion.a
                                whileHover={{scale:1.2}} 
                                href="#home" className="navbar-brand">B | K</motion.a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}

                            <ul className="navbar-nav ml-auto mb-auto mb-lg-0 ">

                                <li className="nav-item">
                                    <a href="#about" className="nav-link active" aria-current="page">About</a>
                                </li>

                                <li className="nav-item">
                                    <a href="#projects" className="nav-link">Projects</a>
                                </li>

                                <li className="nav-item">
                                    <a href="#skills" className="nav-link">Skills</a>
                                </li>

                                <li className="nav-item">
                                    <a href="#contact" className="nav-link">Contact</a>
                                </li>

                                <li className="nav-item">
                                    <a className="btn btn-sm btn-outline-secondary resume-button-nav" href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
                                </li>
                
                            </ul>
                            {/* </div> */}
                        {/* </div> */}
                    </div>
                </nav>
        </header>
    )
    
}