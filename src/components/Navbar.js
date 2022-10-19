import React from "react";

export default function Navbar() {
    return (
        <header className="md:sitcky">
           
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="containter-fluid"> 
                        <div className="collapse navbar-collapse">
                            <a href="#home" className="navbar-brand">B | K</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

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
                
                            </ul>
                        </div>
                    </div>
                </nav>
        </header>
    )
    
}