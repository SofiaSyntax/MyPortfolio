import Hero from "@/components/Hero";
import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="">
      <Hero />
      <div style={styles.container}>
        <div style={styles.contactInfo}>
          <h2 className="font-bold text-3xl mb-4">Get in Touch</h2>
          <p className="mb-4 text-xl">
            If you would like to work together or have any questions, feel free
            to reach out to me using the information below.
          </p>
          <p style={styles.email}>Email: sbackeholt@gmail.com</p>
          <div className="">
            <a
              href="https://github.com/SofiaSyntax"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-400 flex items-center"
            >
              View my GitHub
              <FaGithub className="ml-2" />
            </a>

            <a
              href="https://www.linkedin.com/in/sofia-backeholt/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-400 flex items-center"
            >
              {" "}
              Connect on LinkedIn
              <FaLinkedin className="ml-2" />
            </a>
          </div>

          {/* <p style={styles.phone}>Phone: (123) 456-7890</p>  */}
        </div>

        {/* <div style={styles.contactForm}>
          <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
          <form action="your-form-handler-url" method="POST">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              style={styles.input}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              style={styles.input}
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              style={styles.textarea}
            ></textarea>

            <input
              type="submit"
              value="Send Message"
              style={styles.submitButton}
            />
          </form>
        </div> */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "60%",
    margin: "0 auto",
    padding: "50px 0",
  },
  contactInfo: {
    margin: "20px 0",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  email: {
    fontWeight: "bold",
    fontSize: "18px",
    color: "#333",
  },
  phone: {
    fontWeight: "bold",
    color: "#333",
  },
  contactForm: {
    margin: "20px 0",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
  },
  submitButton: {
    backgroundColor: "#3f51b5",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    padding: "10px 20px",
    borderRadius: "4px",
    fontWeight: "bold",
  },
};

export default Contact;
