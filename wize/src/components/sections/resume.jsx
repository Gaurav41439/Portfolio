import React from 'react'

const Resume = () => {
    return (
        <div className="resume-area" id="resume">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                                <h2>Education & Experience</h2>
                                <p>Here’s a snapshot of my educational background and professional journey.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-10">
                            <div className="resume-wrapper wow fadeInUp delay-0-2s">
                            <Card year={"Aug 2024 - Present"} title={"@ RAIT ACM Student Chapter"} institution={"Technical Chief"} description={"As the Technical Chief at the RAIT ACM Student Chapter, I lead and coordinate technical initiatives, workshops, and events that foster skill development and knowledge sharing among students. My role involves managing technical projects, organizing coding competitions, and facilitating guest lectures and training sessions to enhance our members' expertise in emerging technologies and industry practices."} />
                                <Card year={"Jul 2024 - Present"} title={"@ Sensix Tech Pvt. Ltd."} institution={"Python Developer Intern"} description={"As a Python Developer Intern at Sensix Tech Pvt. Ltd., I work on developing and optimizing Python-based applications, contributing to various projects by writing efficient code and implementing features. My responsibilities include debugging, testing, and collaborating with the team to ensure seamless integration and performance of software solutions. This role allows me to apply my programming skills in a practical environment while gaining valuable industry experience."} />
                                <Card year={"Dec 2023  - Mar 2024"} title={"@ RAIT AR/VR Lab"} institution={"Unity Developer Intern"} description={"As a Unity Developer Intern at RAIT AR/VR Lab, I work on designing and developing immersive applications and experiences using Unity. My role involves creating interactive environments, implementing VR/AR functionalities, and optimizing performance to ensure smooth user experiences. This position enables me to apply my knowledge in game development and virtual reality while collaborating with a team of professionals in the field."} />
                                <Card year={"2022 - Present"} title={"@ Ramrao Adik Institute of Technology"} institution={"IT Undergrad"} description={"As an IT Undergrad at Ramrao Adik Institute of Technology, I am pursuing a Bachelor of Engineering in Information Technology. My coursework and projects provide me with a strong foundation in software development, computer systems, and emerging technologies. This academic experience complements my hands-on work in various technical roles, allowing me to apply theoretical knowledge to real-world challenges."} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume

const Card = ({ year, description, title, institution }) => {
    return (
        <div className="resume-box">
            <span className="resume-date">{year}</span>
            <h5 className="fw-medium">{institution}</h5>
            <span>{title}</span>
            <p>{description}</p>
        </div>
    )
}