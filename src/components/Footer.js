import React from "react";
import linkedin from "../img/linkedin.svg";
import github from "../img/github.svg";
import twitter from "../img/twitter.svg"

export default function Footer () {
    return (
        <section id="footer" className="footer">
            <div className="footer-info">
                <ul className="social">
                    <li className="social-icons">
                        <a href="https://www.linkedin.com/in/bethany-keplinger/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin logo"></img></a>
                    </li>
                    <li className="social-icons">
                        <a href="https://github.com/BethanyKeplinger" target="_blank" rel="noopener noreferrer"><img src={github} alt="linkedin logo"></img></a>
                    </li>
                    <li className="social-icons">
                        <a href="https://twitter.com/BethanyKep2" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="linkedin logo"></img></a>
                    </li>

                </ul>

                {/* <a target="_blank" href="https://icons8.com/icon/37VT6ruj1sNX/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
            </div>
        </section>
    )
    }

    