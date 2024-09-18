import { RiCodeBoxLine, RiCodeSSlashLine, RiFireLine, RiGitRepositoryLine, RiGithubFill, RiGlobalFill, RiPantoneFill, RiQuillPenLine, RiReactjsLine, RiRobot2Line, RiTableLine } from '@remixicon/react'
import React from 'react'

const Services = () => {
    return (
        <section id="services" className="services-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                                <h2>Expertise</h2>
                                <p>Proficient in Python, Web development, and AI technologies, with hands-on experience in real-time applications and immersive experiences."</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Card description={"Expertise in Python programming with extensive experience in libraries such as NumPy, pandas, and Scikit-learn for data analysis and machine learning."} icon={<RiGitRepositoryLine size={55} />} title={"Python & Libraries"} />
                        <Card description={"Proficient in using PyTorch for developing and deploying deep learning models, with a focus on real-time applications and computer vision."} icon={<RiFireLine size={55}/>} title={"PyTorch"} />
                        <Card description={"Advanced knowledge in modern web development using frameworks such as React, Next.js, and Firebase for building dynamic and scalable web applications."} icon={<RiReactjsLine size={55}/>} title={"Web Technologies"} />
                    </div>
                    <div className="row">
                        <Card description={"Expertise in implementing machine learning algorithms and AI models for predictive analytics, classification, and automation tasks."} icon={<RiRobot2Line size={55} />} title={"Machine Learning and AI"} />
                        <Card description={"Experience with data pipeline development and management, leveraging tools for ETL processes and data integration."} icon={<RiTableLine size={55}/>} title={"Data Engineering"} />
                        <Card description={"Experienced in using Git and GitHub for version control, code management, and collaborative development, ensuring smooth and efficient team workflows."} icon={<RiGithubFill size={55}/>} title={"Version Control & Collaboration"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services

const Card = ({ title, description, icon }) => {
    return (
        <div className="col-lg-4 col-md-4">
            <div className="service-item wow fadeInUp delay-0-2s">
                <div className="content">
                    <i>{icon}</i>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}