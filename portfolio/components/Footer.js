import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12 sticky">
      <div className="container mx-auto px-4">
        {/* Links or other elements */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#about" className="hover:text-gray-400">
            About Me
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>

          <a href="#portfolio" className="hover:text-gray-400">
            Portfolio
          </a>
        </div>

        {/* Social media icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright text) */}
        <div className="text-center text-sm text-gray-400">
          <p>&copy; 2025 Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
