import React, { useState } from 'react';
import { RiBuilding2Line, RiPhoneLine, RiMailOpenLine, RiLinkedinBoxFill, RiMailLine } from '@remixicon/react';
import { db, collection, addDoc } from './firebase';  // import Firebase functions

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'contacts'), formData);  // Add form data to Firestore
            setStatus('Message Sent Successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus('Error sending message. Please try again later.');
        }
    };

    return (
        <section id="contact" className="contact-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="extra-skills wow fadeInUp delay-0-2s pb-30">
                                <li><i><RiBuilding2Line size={16} /></i>Address: Powai, Mumbai, India</li>
                                <li><i><RiPhoneLine size={16} /></i>Number: +91 7021856548</li>
                                <li><i><RiMailOpenLine size={16} /></i>Email: gaurav2305bisht@mail.com</li>
                                <li><i><RiLinkedinBoxFill size={16} /></i>Linkedin: linkedin.com/in/gaurav23bisht/</li>
                            </ul>
                            <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
                                <form onSubmit={handleSubmit} className="contactForm">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="name">Full Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    className="form-control"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Steve Milner"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="email">Email Address</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className="form-control"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="hello@websitename.com"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="message">Your Message</label>
                                                <textarea
                                                    name="message"
                                                    id="message"
                                                    className="form-control"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    rows="4"
                                                    placeholder="Write Your message"
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-0">
                                                <button type="submit" className="theme-btn">
                                                    Send Me Message <i><RiMailLine size={16} /></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                {status && <p>{status}</p>}  {/* Display success or error message */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
