import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="">
      <Navbar />
      <div style={styles.container}>
        <h1 className="font-bold text-3xl mb-10">Contact Me</h1>

        <div style={styles.contactInfo}>
          <h2 className="font-bold text-xl mb-4">Get in Touch</h2>
          <p className="mb-2">
            If you would like to work together or have any questions, feel free
            to reach out to me!
          </p>
          <p style={styles.email}>Email: your.email@example.com</p>
          <p style={styles.phone}>Phone: (123) 456-7890</p>
        </div>

        <div style={styles.contactForm}>
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    width: "80%",
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
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    padding: "10px 20px",
    borderRadius: "4px",
  },
};

export default Contact;
