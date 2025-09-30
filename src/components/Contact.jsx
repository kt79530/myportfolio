
import React from "react";
import { motion } from "framer-motion";
import {Container, Row, Col} from "react-bootstrap";

import '../css/_Contact.scss';


const Contact = () => {
  return (
    <Container 
     className="d-flex justify-content-center align-items-center">
        <Col lg={9} md={8} sm={12}>
            <section className="contact-section">
                <motion.div
                    className="contact-card"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h1 >
                    <strong>Contact Me</strong>
                    </h1>

                    <form className="contact-form">
                    <div className="form-group">
                        <input
                        type="text"
                        id="name"
                        required
                        placeholder=" "
                        className="peer w-full border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-2 bg-transparent"
                        />
                        <label
                        htmlFor="name"
                        className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-gray-700 peer-focus:text-sm"
                        >
                        Name
                        </label>
                    </div>

                    <div className="form-group">
                        <input
                        type="email"
                        id="email"
                        required
                        placeholder=" "
                        className="peer w-full border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-2 bg-transparent"
                        />
                        <label
                        htmlFor="email"
                        className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-gray-700 peer-focus:text-sm"
                        >
                        Email
                        </label>
                    </div>

                    <div className="form-group">
                        <textarea
                        id="message"
                        rows="4"
                        required
                        placeholder=" "
                        className="peer w-full border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-2 bg-transparent resize-none"
                        ></textarea>
                        <label
                        htmlFor="message"
                        className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-gray-700 peer-focus:text-sm"
                        >
                        Message
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-600 hover:shadow-xl transition-all"
                    >
                        Send Message
                    </button>
                    </form>
                </motion.div>
            </section>
        </Col>
    </Container>
  );
};

export default Contact;