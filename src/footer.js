import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer
        style={{
          textAlign: "center",
          padding: "2rem 0",
          fontSize: "1.2rem",
          color: "#fff",
          background:
            "linear-gradient(to right, #7c3bd0, #17859e, #456ee9, #b108ab)",
          //   background: "transparent", // Change this line to make the background transparent
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/krish-agrawal-26jy/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#ff6b6b",
              fontSize: "1.5rem",
              transition: "color 0.3s",
            }}
          >
            <FaLinkedin />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/_krish_al"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#ff6b6b",
              fontSize: "1.5rem",
              transition: "color 0.3s",
            }}
          >
            <FaInstagram />
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/KrisH__AgrawaL"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#ff6b6b",
              fontSize: "1.5rem",
              transition: "color 0.3s",
            }}
          >
            <FaTwitter />
          </a>
        </div>

        <p style={{ margin: 0 }}>
          &copy; {new Date().getFullYear()} Luxora. All rights reserved. |
          Designed by{" "}
          <a
            href="https://www.linkedin.com/in/krish-agrawal-26jy"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#ff6b6b",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Krish Agrawal
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
