import React from "react";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import "./About.css"

const About = () => {
    const aboutText = `Hi, my name is Adriano Smith and I began using WordPress when it first began. I've spent most of my waking hours for the last ten years designing, programming and operating WordPress sites.
    One of my specialties is taking an idea from scratch and creating a full-fledged platform. I go beyond to produce sites with a unique, outstanding, contemporary look-and-feel. With extensive knowledge of web mechanics, I'm able to optimize complex integrations to require little-to-no maintenance while running on their own for years.`;

    return (
        <div className="about-container">
            <div className="about-page-title">
                <p>ABOUT</p>
                <h1>About Me</h1>
            </div>
            <div className="about-bio">
                <img src="" />
                <h1>Phelim Chijioke Isichei</h1>
                <p>Software Engineer</p>
                <div className="about-text">
                    <p>{ aboutText }</p>
                </div>
                <div className="about-info">
                    <div>
                        <p><span>Birthday:</span>01.07.1990</p>
                        <p><span>Birthday:</span>01.07.1990</p>
                        <p><span>Birthday:</span>01.07.1990</p>
                        <p><span>Birthday:</span>01.07.1990</p>
                        <p><span>Birthday:</span>01.07.1990</p>
                    </div>
                    <div>
                        <p><span>Birthday:</span>01.07.1990</p>
                        <p><span>Birthday:</span>01.07.1990</p>
                        <p><span>Birthday:</span>01.07.1990</p>
                        <p><span>Birthday:</span>01.07.1990</p>
                        <p><span>Birthday:</span>01.07.1990</p>
                    </div>
                </div>
                <button>Download CV</button>
            </div>
            <div className="about-skill-container">
                <div className="about-skill">
                    <div>
                        <h1>Programming Skills</h1>
                        <div>
                            <p>
                                <span>WordPress</span>
                                <span>95%</span>
                            </p>
                            <ProgressBar barWidth={95} />
                        </div>
                        <div>
                            <p>
                                <span>WordPress</span>
                                <span>50%</span>
                            </p>
                            <ProgressBar barWidth={50} />
                        </div>
                        <div>
                            <p>
                                <span>WordPress</span>
                                <span>95%</span>
                            </p>
                            <ProgressBar barWidth={95} />
                        </div>
                    </div>
                    <div>
                        <h1>Programming Skills</h1>
                        <div>
                            <p>
                                <span>WordPress</span>
                                <span>95%</span>
                            </p>
                            <ProgressBar barWidth={95} />
                        </div>
                        <div>
                            <p>
                                <span>WordPress</span>
                                <span>95%</span>
                            </p>
                            <ProgressBar barWidth={95} />
                        </div>
                        <div>
                            <p>
                                <span>WordPress</span>
                                <span>95%</span>
                            </p>
                            <ProgressBar barWidth={95} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;