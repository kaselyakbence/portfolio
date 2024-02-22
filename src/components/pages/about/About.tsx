import { useState } from "react"
import "./about.scss"


type AboutType = "personal" | "education" | "professional"

const About = () => {

    const [about, setAbout] = useState<AboutType>("personal")

    return (
        <div className="about-page">
            <div className="side">
                <h1>Bence Kaselyák</h1>
                <p className="about-info">Living in Berlin, Germany</p>
                <p className="about-info">I build web complex application with the help of modern frameworks and test complex software solutions.</p>
                <ul>
                    <li className={`${about === "personal" ? "active" : ""} button`} onClick={() => setAbout("personal")}>Personal goals</li>
                    <li className={`${about === "professional" ? "active" : ""} button`} onClick={() => setAbout("professional")}>Professional experience</li>
                    <li className={`${about === "education" ? "active" : ""} button`} onClick={() => setAbout("education")}>Academic experience</li>
                </ul>
            </div>
            <div className="side">
                {
                    about === "personal" &&
                    <ul>
                        <li>I was born in Debrecen, went to university and worked in Budapest, and studied in Copenhagen. I came to Berlin to do an Erasmus+ semester and learn fluent German, but fell in love with the city and all its people, so I decided to stay and build a career here. I love traveling around Europe, reading, and meeting people from all around the world.</li>
                        <li>My goal is to gain relevant professional experience in every aspect of Web Development. I'm hoping to experience all roles required to develop and maintain a Web Application, so that one day I can start my own startup and create something truly unique, that helps others.</li>
                    </ul>

                }
            </div>
        </div>
    )
}

export default About