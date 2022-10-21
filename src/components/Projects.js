import React from "react";
import { projects } from "../data";
// import { Container, Row } from "react-bootstrap";

// import "./projects.css"

export default function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="container text-center" >
                <div className="heading">
                    <h1>Projects</h1>
                    {/* <p>Description</p> */}
                </div>

                {/* <div className="project-contents"> */}
                    <div className="projects">
                        {projects.map((project) => (
                            <div  className="row project-list" key={project.image}>
                                <div className="col project-photo">
                                    <a href={project.linkdemo} target="_blank" rel="noreferrer">
                                        <img 
                                        alt="gallery"
                                        className="gallery"
                                        src={project.image} />
                                    </a>
                                </div>

                                <div className="col project-details">
                                    <h1 className="project-title">{project.title}</h1>
                                    <h2 className="project-subtitle">{project.subtitle}</h2>
                                    <p className="project-description">{project.description}</p>
                                    <p className="login-info">{project.login}</p>
                                    <a href={project.linkdemo} target="_blank" rel="noreferrer" className="btn code-button" role="button">Demo</a>
                                    <a href={project.linkcode} target="_blank" rel="noreferrer" className="btn code-button" role="button">Code</a>
                                </div>
                            </div>
                             
                        ))}
                    </div>
                {/* </div> */}
            </div>
        </section>

    )
    
}