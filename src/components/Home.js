import React from "react";
// import Jumbotron from "react-bootstrap/Jumbotron";

export default function Home () {
    return (
        <section id="home" className="jumbotron">
            <div id="container home-container">
                <h1 className="display-4 hero-title"> Hi, I'm Bethany Keplinger</h1>
                <p className="lead">I'm a Software Engineer and nature super fan. </p>

                <div className="button-container">
                    <a href="#projects" className="btn btn-primary projects-button" role="button" >Take a Look <div className="fill"></div></a>
                </div>

               
                <hr className="my-4"/>
                
            </div>
        </section>
    )
}