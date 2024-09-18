import React from 'react'
import profile from "../../../assets/images/about/me1.jpg"
const Summary = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row align-items-center">
                        {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                        <div className="col-lg-5">
                            <div className="about-image-part wow fadeInUp delay-0-3s">
                                <img src={profile} alt="About Me" />
                            </div>
                        </div>
                        {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                        <!-- START ABOUT TEXT DESIGN AREA --> */}
                        <div className="col-lg-7">
                            <div className="about-content-part wow fadeInUp delay-0-5s">
                                <h2>
                                    A passionate <span>IT Student</span> turning <span>ideas</span> into visually stunning, user-friendly and practical Projects.
                                </h2>
                                <p>
                                I’m Gaurav Singh Bisht, a 21-year-old entrepreneur, developer, and the founder of Agavi Technologies
                                </p>
                                <p>My work primarily involves AI, deep learning, and computer vision, with key projects including a YOLO-based theft detection system using PyTorch, and a women's safety initiative leveraging real-time monitoring for public safety. I’m also developing SMPL (Stock Market Premier League), a platform for stock market education. I frequently work with frameworks like TensorFlow, PyTorch, React, and Firebase, applying them to real-time analytics and user-centric platforms.</p>
                            </div>
                        </div>
                        {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Summary