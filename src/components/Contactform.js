import React, { useState } from "react";

export default function Contactform () {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ message, setMessage ] = useState("");

    function encode(data) {
        return Object.keys(data).map(
            (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&")
    }

    function handleSubmit(e) {
        e.preventdefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
            .then(() => alert("Message sent!"))
            .catch((error) => alert(error));
    }

    return (
        <section id="contact" className="">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form className="contact form" onSubmit={handleSubmit}>

                        <h2 className="contact-title">Contact</h2>

                        <div className="mb-3">
                            <label htmlFor="text" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" aria-describedby="name" name="name" onChange={(e) => setName(e.target.value)}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea type="message" className="form-control" id="message" name="message" onChange={(e) => setMessage(e.target.value)}/>
                        </div>
                    
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>

                    <div className="col">
                        <div className="myInfo">
                            <h3>My Information</h3>
                            <p><a href="mailto:bethanymkeplinger@gmail.com" className="button">bethanymkeplinger@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
    
}