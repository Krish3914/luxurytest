// import React from "react";
// import homepage from "./data";
// import image from "./img/finally.jpg";
// import { Link } from "react-router-dom";
// import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"; // Importing icons for social media

// const Home = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         padding: "2rem",
//         minHeight: "100vh",
//         fontFamily: "Poppins, Arial, sans-serif",
//         background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
//         backgroundAttachment: "fixed",
//       }}
//     >
//       {/* Hero Section */}
//       <div
//         style={{
//           position: "relative",
//           width: "100%",
//           maxWidth: "1200px",
//           height: "600px",
//           borderRadius: "20px",
//           overflow: "hidden",
//           boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
//           marginBottom: "4rem",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <img
//           src={image}
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             filter: "brightness(0.8) contrast(1.2) blur(5px)",
//             transition: "filter 0.5s ease",
//           }}
//           alt="Luxora Background"
//         />
//         <div
//           style={{
//             position: "relative",
//             zIndex: 1,
//             textAlign: "center",
//             color: "white",
//             padding: "0 20px",
//           }}
//         >
//           <h1
//             style={{
//               fontSize: "4rem",
//               fontWeight: "700",
//               lineHeight: "1.2",
//               textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
//               marginBottom: "1rem",
//             }}
//           >
//             Discover Luxora
//           </h1>
//           <p
//             style={{
//               fontSize: "1.8rem",
//               fontWeight: "300",
//               marginBottom: "2rem",
//             }}
//           >
//             Elevate Your Shopping Experience
//           </p>
//           <a
//             href="#shopp"
//             style={{
//               backgroundColor: "#ff6b6b",
//               color: "white",
//               padding: "1.2rem 3rem",
//               borderRadius: "50px",
//               textDecoration: "none",
//               fontWeight: "600",
//               fontSize: "1.4rem",
//               transition: "background-color 0.3s, transform 0.3s",
//               boxShadow: "0 5px 15px rgba(255, 107, 107, 0.4)",
//               display: "inline-block",
//               position: "relative",
//               zIndex: 2,
//               cursor: "pointer", // Ensure the link cursor shows
//             }}
//             onClick={(e) => {
//               e.preventDefault();
//               const shopSection = document.getElementById("shopp");
//               if (shopSection) {
//                 shopSection.scrollIntoView({ behavior: "smooth" });
//               }
//             }}
//           >
//             Shop Now
//           </a>
//         </div>
//       </div>

//       {/* Products Section */}
//       <div
//         style={{
//           width: "100%",
//           maxWidth: "1200px",
//           marginBottom: "4rem",
//           textAlign: "center",
//         }}
//       >
//         <h2
//           style={{
//             fontSize: "3.2rem",
//             color: "#fff",
//             marginBottom: "3rem",
//             textTransform: "uppercase",
//             letterSpacing: "2px",
//             textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
//           }}
//         >
//           Featured Categories
//         </h2>
//         <div
//           id="shopp"
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//             gap: "3rem",
//             justifyContent: "center",
//           }}
//         >
//           {homepage.map((item, index) => (
//             <div
//               key={`container${index}`}
//               style={{
//                 borderRadius: "20px",
//                 overflow: "hidden",
//                 boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
//                 backgroundColor: "rgba(255, 255, 255, 0.1)",
//                 backdropFilter: "blur(10px)",
//                 transition: "transform 0.3s, box-shadow 0.3s",
//                 cursor: "pointer",
//                 position: "relative",
//                 zIndex: 1,
//               }}
//             >
//               <img
//                 src={item.url}
//                 alt={item.alt}
//                 style={{
//                   width: "100%",
//                   height: "300px",
//                   objectFit: "cover",
//                   borderRadius: "20px 20px 0 0",
//                 }}
//                 key={`image_ele${index}`}
//               />
//               <div
//                 key={`contentcontainer${index}`}
//                 style={{
//                   padding: "2rem",
//                 }}
//               >
//                 <h3
//                   style={{
//                     fontSize: "2.4rem",
//                     color: "#467fab",
//                     marginBottom: "1rem",
//                     textShadow: "1px 1px 2px rgba(0,0,0,0.4)",
//                   }}
//                 >
//                   {item.title}
//                 </h3>
//                 <p
//                   key={`para${index}`}
//                   style={{
//                     fontSize: "1.4rem",
//                     color: "#ccc",
//                     marginBottom: "1.5rem",
//                     lineHeight: "1.6",
//                   }}
//                 >
//                   {item.content}
//                 </p>
//                 <Link
//                   to={item.alt}
//                   key={`link_tag${index}`}
//                   style={{
//                     display: "inline-block",
//                     backgroundColor: "#482882",
//                     color: "white",
//                     padding: "1rem 2.5rem",
//                     borderRadius: "50px",
//                     textDecoration: "none",
//                     fontWeight: "600",
//                     fontSize: "1.4rem",
//                     transition: "background-color 0.3s",
//                     boxShadow: "0 5px 15px rgba(38, 208, 206, 0.4)",
//                     ":hover": {
//                       backgroundColor: "#1a2980",
//                       boxShadow: "0 8px 20px rgba(26, 41, 128, 0.6)",
//                     },
//                   }}
//                 >
//                   <p
//                     key={`shop_key${index}`}
//                     style={{
//                       color: "white",
//                       textAlign: "center",
//                       position: "relative",
//                       top: -1.2,
//                       fontSize: 18,
//                       fontWeight: 600,
//                     }}
//                   >
//                     Select {item.title}
//                   </p>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Footer Section */}
//       <footer
//         style={{
//           textAlign: "center",
//           padding: "2rem 0",
//           fontSize: "1.2rem",
//           color: "#fff",
//           background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
//           borderTop: "1px solid rgba(255, 255, 255, 0.2)",
//           width: "100%",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             gap: "1rem",
//             marginBottom: "1rem",
//           }}
//         >
//           {/* LinkedIn */}
//           <a
//             href="https://www.linkedin.com/in/krish-agrawal-26jy/"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{
//               color: "#ff6b6b",
//               fontSize: "1.5rem",
//               transition: "color 0.3s",
//             }}
//           >
//             <FaLinkedin />
//           </a>

//           {/* Instagram */}
//           <a
//             href="https://www.instagram.com/_krish_al"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{
//               color: "#ff6b6b",
//               fontSize: "1.5rem",
//               transition: "color 0.3s",
//             }}
//           >
//             <FaInstagram />
//           </a>

//           {/* Twitter */}
//           <a
//             href="https://twitter.com/KrisH__AgrawaL"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{
//               color: "#ff6b6b",
//               fontSize: "1.5rem",
//               transition: "color 0.3s",
//             }}
//           >
//             <FaTwitter />
//           </a>
//         </div>

//         <p style={{ margin: 0 }}>
//           &copy; {new Date().getFullYear()} Luxora. All rights reserved. |
//           Designed by{" "}
//           <a
//             href="https://www.linkedin.com/in/krish-agrawal-26jy"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{
//               color: "#ff6b6b",
//               fontWeight: "600",
//               textDecoration: "none",
//             }}
//           >
//             Krish Agrawal
//           </a>
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default Home;

import React, { useState } from "react";
import homepage from "./data";
import image from "./img/finally.jpg";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Chatbot from "./chatbot";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        minHeight: "100vh",
        fontFamily: "Poppins, Arial, sans-serif",
        background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1200px",
          height: "600px",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          marginBottom: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={image}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.8) contrast(1.2) blur(5px)",
            transition: "filter 0.5s ease",
          }}
          alt="Luxora Background"
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            color: "white",
            padding: "0 20px",
          }}
        >
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "700",
              lineHeight: "1.2",
              textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
              marginBottom: "1rem",
            }}
          >
            Discover Luxora
          </h1>
          <p
            style={{
              fontSize: "1.8rem",
              fontWeight: "300",
              marginBottom: "2rem",
            }}
          >
            Elevate Your Shopping Experience
          </p>
          <a
            href="#shopp"
            style={{
              backgroundColor: "#ff6b6b",
              color: "white",
              padding: "1.2rem 3rem",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "1.4rem",
              transition: "background-color 0.3s, transform 0.3s",
              boxShadow: "0 5px 15px rgba(255, 107, 107, 0.4)",
              display: "inline-block",
              position: "relative",
              zIndex: 2,
              cursor: "pointer", // Ensure the link cursor shows
            }}
            onClick={(e) => {
              e.preventDefault();
              const shopSection = document.getElementById("shopp");
              if (shopSection) {
                shopSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* Products Section */}
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          marginBottom: "4rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "3.2rem",
            color: "#fff",
            marginBottom: "3rem",
            textTransform: "uppercase",
            letterSpacing: "2px",
            textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
          }}
        >
          Featured Categories
        </h2>
        <div
          id="shopp"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            justifyContent: "center",
          }}
        >
          {homepage.map((item, index) => (
            <div
              key={`container${index}`}
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
                position: "relative",
                zIndex: 1,
              }}
            >
              <img
                src={item.url}
                alt={item.alt}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "20px 20px 0 0",
                }}
                key={`image_ele${index}`}
              />
              <div
                key={`contentcontainer${index}`}
                style={{
                  padding: "2rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "2.4rem",
                    color: "#467fab",
                    marginBottom: "1rem",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.4)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  key={`para${index}`}
                  style={{
                    fontSize: "1.4rem",
                    color: "#ccc",
                    marginBottom: "1.5rem",
                    lineHeight: "1.6",
                  }}
                >
                  {item.content}
                </p>
                <Link
                  to={item.alt}
                  key={`link_tag${index}`}
                  style={{
                    display: "inline-block",
                    backgroundColor: "#482882",
                    color: "white",
                    padding: "1rem 2.5rem",
                    borderRadius: "50px",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "1.4rem",
                    transition: "background-color 0.3s",
                    boxShadow: "0 5px 15px rgba(38, 208, 206, 0.4)",
                    ":hover": {
                      backgroundColor: "#1a2980",
                      boxShadow: "0 8px 20px rgba(26, 41, 128, 0.6)",
                    },
                  }}
                >
                  <p
                    key={`shop_key${index}`}
                    style={{
                      color: "white",
                      textAlign: "center",
                      position: "relative",
                      top: -1.2,
                      fontSize: 18,
                      fontWeight: 600,
                    }}
                  >
                    Select {item.title}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Chatbot
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      />

      <footer
        style={{
          textAlign: "center",
          padding: "2rem 0",
          fontSize: "1.2rem",
          color: "#fff",
          background: "transparent",
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
    </div>
  );
};

export default Home;

// {
//   /* Footer Section */
// }
// <footer
//   style={{
//     textAlign: "center",
//     padding: "2rem 0",
//     fontSize: "1.2rem",
//     color: "#fff",
//     background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
//     borderTop: "1px solid rgba(255, 255, 255, 0.2)",
//     width: "100%",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   }}
// >
//   <div
//     style={{
//       display: "flex",
//       gap: "1rem",
//       marginBottom: "1rem",
//     }}
//   >
//     {/* LinkedIn */}
//     <a
//       href="https://www.linkedin.com/in/krish-agrawal-26jy/"
//       target="_blank"
//       rel="noopener noreferrer"
//       style={{
//         color: "#ff6b6b",
//         fontSize: "1.5rem",
//         transition: "color 0.3s",
//       }}
//     >
//       <FaLinkedin />
//     </a>

//     {/* Instagram */}
//     <a
//       href="https://www.instagram.com/_krish_al"
//       target="_blank"
//       rel="noopener noreferrer"
//       style={{
//         color: "#ff6b6b",
//         fontSize: "1.5rem",
//         transition: "color 0.3s",
//       }}
//     >
//       <FaInstagram />
//     </a>

//     {/* Twitter */}
//     <a
//       href="https://twitter.com/KrisH__AgrawaL"
//       target="_blank"
//       rel="noopener noreferrer"
//       style={{
//         color: "#ff6b6b",
//         fontSize: "1.5rem",
//         transition: "color 0.3s",
//       }}
//     >
//       <FaTwitter />
//     </a>
//   </div>

//   <p style={{ margin: 0 }}>
//     &copy; {new Date().getFullYear()} Luxora. All rights reserved. | Designed by{" "}
//     <a
//       href="https://www.linkedin.com/in/krish-agrawal-26jy"
//       target="_blank"
//       rel="noopener noreferrer"
//       style={{
//         color: "#ff6b6b",
//         fontWeight: "600",
//         textDecoration: "none",
//       }}
//     >
//       Krish Agrawal
//     </a>
//   </p>
// </footer>;

// import React from "react";
// import homepage from "./data";
// import image from "./img/finally.jpg";
// import { Link } from "react-router-dom";
// const Home = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         padding: "2rem",
//         marginTop: 50,
//         height: "100vh",
//         flexWrap: "wrap",
//         flexFlow: "column",
//         gap: "2rem",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           width: "100%",
//           height: "400px",
//           position: "relative",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <img
//           src={image}
//           style={{
//             width: "100%",
//             height: "100%",
//             filter: "blur(1px)",
//             borderRadius: 15,
//           }}
//           alt="image_used"
//         />
//         <p
//           style={{
//             position: "absolute",
//             color: "rgb(0,0,0)",
//             fontFamily: "initial",
//             fontSize: 23,
//             fontWeight: "900",
//             textShadow: "rgba(52, 52, 113, 0.9) 2px 2px 0px",
//             textAlign: "center",
//           }}
//         >
//           Get Unlimited shopping Experience
//         </p>
//       </div>
//       <h1 style={{ fontSize: 23 }}>
//         Products & <span style={{ color: "red" }}>Details</span>
//       </h1>
// {homepage.map((item, index) => (
//   <div
//     key={`container${index}`}
//     style={{
//       flex: ".5 ",
//       border: "1px solid black",
//       borderRadius: 20,
//       boxShadow: "0 4px 5px rgba(0,0,0,.5)",
//       width: "100%",
//       gap: "2rem",
//       padding: "1rem",
//       display: "flex",
//       flexWrap: "wrap",
//       flexDirection: "row",
//     }}
//   >
//     <img
//       src={item.url}
//       alt={item.alt}
//       style={{
//         width: 250,
//         height: 250,
//         objectFit: "contain",
//         flex: "1 0 10rem",
//       }}
//       key={`image_ele${index}`}
//     />
//     <div
//       key={`contentcontainer${index}`}
//       style={{
//         flex: "1 0 10rem",
//         display: "flex",
//         flexDirection: "column",
//         gap: "2rem",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <p key={`para${index}`}>{item.content}</p>
//       <Link
//         to={item.alt}
//         key={`link_tag${index}`}
//         style={{
//           textDecoration: "none",
//           borderRadius: 20,
//           color: "white",
//           width: "120px",
//           height: "40px",
//           backgroundColor: "black",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <p
//           key={`shop_key${index}`}
//           style={{
//             color: "white",
//             textAlign: "center",
//             position: "relative",
//             top: -1.2,
//             fontSize: 18,
//             fontWeight: 600,
//           }}
//         >
//           Shop
//         </p>
//         <img
//           src="https://cdn-icons-png.flaticon.com/128/8213/8213451.png"
//           style={{
//             height: 20,
//             width: 20,
//             position: "relative",
//             right: -10,
//           }}
//           alt="arrow"
//         />
//       </Link>
//     </div>
//   </div>
// ))}
//       <h2 style={{ fontSize: 16 }}>
//         @copyright{" "}
//         <Link to="https://github.com/sivaprasath2004">sivaprasath2004</Link>
//       </h2>
//     </div>
//   );
// };

// export default Home;
