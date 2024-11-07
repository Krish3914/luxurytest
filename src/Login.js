// import React from "react";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { css } from "@emotion/react";
// import Divider from '@mui/material/Divider'; // For Material-UI
// import eye from "./img/eye.png";
// import hide from "./img/hide.png";
// import alert_img from "./img/alert.png";
// import { useNavigate } from "react-router-dom";
// import googlee from "./img/google.png";
// import githubb from "./img/github.png";
// import {
//   auth,
//   googleProvider,
//   facebookProvider,
//   githubProvider,
//   signInwithGoogle,
//   signInwithGithub,
// } from "./firebase"; // Correct import path
// // import { signInWithPopup, updateEmail } from "firebase/auth";
// import {
//   signInWithPopup,
//   fetchSignInMethodsForEmail,
//   linkWithCredential,
//   GoogleAuthProvider,
//   GithubAuthProvider,
// } from "firebase/auth";
// import "./Login.css";
// const Login = () => {
//   const [message, setMessage] = useState("null");
//   const [username, setUsername] = useState("");
//   const navigate = useNavigate();
//   const [redirect, setRedirect] = useState(false);
//   const [loader, setloader] = useState(false);
//   const [pass_change, setPass_change] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const setDataToserver = async (e) => {
//     setMessage("null");
//     e.preventDefault();
//     setloader(true);
//     try {
//       let post = await axios.post(
//         "https://shopping-backend-neon.vercel.app/login",
//         {
//           email: email,
//           password: password,
//         }
//       );
//       setMessage(post.data);
//       setloader(false);
//       if (
//         post.data !== "Email Incorrect" &&
//         post.data !== "Email or password is not match"
//       ) {
//         setMessage("null");
//         console.log(post.data);
//         localStorage.setItem("9ouenbcvgetywMhIOEJD", post.data);
//         setRedirect(true);
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       setloader(false);
//     }
//   };
//   // const handleGoogleSignIn = () => {
//   //   signInWithPopup(auth, googleProvider)
//   //     .then((result) => {
//   //       const name = result.user.displayName;
//   //       const profilePic = result.user.photoURL;
//   //       const email = result.user.email;

//   //       localStorage.setItem("name", name);
//   //       localStorage.setItem("profilePic", profilePic);
//   //       localStorage.setItem("email", email);

//   //       navigate("/");
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error signing in with Google:", error);
//   //     });
//   // };
//   // const handleGithubSignIn = async () => {
//   //   try {
//   //     const result = await signInWithPopup(auth, githubProvider);
//   //     const name = result.user.displayName;
//   //     const profilePic = result.user.photoURL;
//   //     const email = result.user.email;

//   //     localStorage.setItem("name", name);
//   //     localStorage.setItem("profilePic", profilePic);
//   //     localStorage.setItem("email", email);

//   //     navigate("/");
//   //   } catch (error) {
//   //     if (error.code === "auth/account-exists-with-different-credential") {
//   //       const email = error.customData.email;
//   //       const pendingCredential = error.credential;

//   //       // Fetch all the sign-in methods for this user
//   //       fetchSignInMethodsForEmail(auth, email).then((methods) => {
//   //         if (methods.includes(GoogleAuthProvider.PROVIDER_ID)) {
//   //           const provider = new GoogleAuthProvider();
//   //           signInWithPopup(auth, provider)
//   //             .then((result) => {
//   //               return linkWithCredential(result.user, pendingCredential);
//   //             })
//   //             .then(() => {
//   //               navigate("/");
//   //             })
//   //             .catch((linkError) => {
//   //               console.error(
//   //                 "Error linking with Google credential:",
//   //                 linkError
//   //               );
//   //             });
//   //         }
//   //       });
//   //     } else {
//   //       console.error("Error signing in with Github:", error);
//   //     }
//   //   }
//   // };
//   useEffect(() => {
//     if (redirect) {
//       navigate("/");
//     }
//   }, [redirect, navigate]);
//   const handleClick = () => {
//     setPass_change(!pass_change);
//   };
//   let pass_type = pass_change ? "text" : "password";
//   let pass_img = pass_change ? hide : eye;
//   return (
//     <main>
//       <div id="loginBox">
//         {loader ? (
//           <div
//             style={{
//               height: "50%",
//               width: "50%",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               alignSelf: "center",
//               position: "absolute",
//               zIndex: 2,
//               gap: 20,
//             }}
//           >
//             <div className="loader"></div>
//             <p style={{ fontSize: 20, fontWeight: 900 }}>Authenticating...</p>
//           </div>
//         ) : (
//           <></>
//         )}
//         <form onSubmit={setDataToserver}>
//           <h2 class="gradient-text">Login to Luxora</h2>
//           <br />
//           <div className="auth-container">
//             <button className="auth-button google" onClick={signInwithGoogle}>
//               <img src={googlee} alt="G" className="auth-icon" />
//               SignIn with Google
//             </button>
//             <button className="auth-button github" onClick={signInwithGithub}>
//               <img src={githubb} alt="G" className="auth-icon" />
//               SignIn with Github
//             </button>
//           </div>
//           <Divider>or</Divider>
//           <div className="input-box">
//             <input
//               type="email"
//               required
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <label> Email</label>
//           </div>
//           <div className="input-box">
//             <span className="icon">
//               <img
//                 src={pass_img}
//                 alt="image_clicked_handle"
//                 id="handlePasswordClick"
//                 onClick={() => handleClick()}
//               />
//             </span>
//             <input
//               type={pass_type}
//               required
//               name="password"
//               id="enterpassword"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <label>Enter Password</label>
//           </div>
//           <br />
//           <div className="remember-forget">
//             <label>
//               <input type="checkbox" />
//               <span>Remember Me</span>
//             </label>
//             <a href="/signup">Forgot Password ?</a>
//           </div>
//           <br />
//           {message === "null" ? (
//             <></>
//           ) : (
//             <div id="errors">
//               <img src={alert_img} alt="alert_image_settled" />
//               <p className="errorMessage">{message}</p>
//             </div>
//           )}
//           <button type="Submit">Login</button>
//           <div className="register-link">
//             <p id="account">
//               Don't have an account?
//               <a href="/signup"> Register</a>
//             </p>
//           </div>
//         </form>
//       </div>
//     </main>
//   );
// };

// export default Login; 




import React, { useState, useEffect } from "react";
import axios from "axios";
import { css } from "@emotion/react";
import Divider from "@mui/material/Divider"; // For Material-UI
import eye from "./img/eye.png";
import hide from "./img/hide.png";
import alert_img from "./img/alert.png";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import googlee from "./img/google.png";
import githubb from "./img/github.png";
import Chatbot from "./chatbot";
import {
  signInwithGoogle,
  signInwithGithub,
  auth,
  googleProvider,
  githubProvider,
} from "./firebase"; // Correct import path
import {
  fetchSignInMethodsForEmail,
  linkWithCredential,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import "./Login.css";

const Login = () => {
  const [message, setMessage] = useState("null");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);
  const [loader, setLoader] = useState(false);
  const [passChange, setPassChange] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setDataToserver = async (e) => {
    e.preventDefault();
    setMessage("null");
    setLoader(true);
    try {
      let post = await axios.post(
        "https://shopping-backend-neon.vercel.app/login",
        {
          email: email,
          password: password,
        }
      );
      setMessage(post.data);
      setLoader(false);
      if (
        post.data !== "Email Incorrect" &&
        post.data !== "Email or password is not match"
      ) {
        setMessage("null");
        console.log(post.data);
        localStorage.setItem("9ouenbcvgetywMhIOEJD", post.data);
        setRedirect(true);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setLoader(false);
    }
  };

  useEffect(() => {
    if (redirect) {
      navigate("/");
    }
  }, [redirect, navigate]);

  const handleClick = () => {
    setPassChange(!passChange);
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      const result = await signInwithGoogle();
      const name = result.user.displayName;
      const profilePic = result.user.photoURL;
      const email = result.user.email;

      localStorage.setItem("name", name);
      localStorage.setItem("profilePic", profilePic);
      localStorage.setItem("email", email);

      navigate("/");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleGithubSignIn = async (e) => {
    e.preventDefault();
    try {
      const result = await signInwithGithub();
      const name = result.user.displayName;
      const profilePic = result.user.photoURL;
      const email = result.user.email;

      localStorage.setItem("name", name);
      localStorage.setItem("profilePic", profilePic);
      localStorage.setItem("email", email);

      navigate("/");
    } catch (error) {
      if (error.code === "auth/account-exists-with-different-credential") {
        const email = error.customData.email;
        const pendingCredential = error.credential;

        // Fetch all the sign-in methods for this user
        fetchSignInMethodsForEmail(auth, email).then((methods) => {
          if (methods.includes(GoogleAuthProvider.PROVIDER_ID)) {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
              .then((result) => {
                return linkWithCredential(result.user, pendingCredential);
              })
              .then(() => {
                navigate("/");
              })
              .catch((linkError) => {
                console.error(
                  "Error linking with Google credential:",
                  linkError
                );
              });
          }
        });
      } else {
        console.error("Error signing in with Github:", error);
      }
    }
  };

  let passType = passChange ? "text" : "password";
  let passImg = passChange ? hide : eye;

  return (
    <main>
      <div id="loginBox">
        {loader ? (
          <div
            style={{
              height: "50%",
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              position: "absolute",
              zIndex: 2,
              gap: 20,
            }}
          >
            <div className="loader"></div>
            <p style={{ fontSize: 20, fontWeight: 900 }}>Authenticating...</p>
          </div>
        ) : (
          <></>
        )}
        <form onSubmit={setDataToserver}>
          <h2 className="gradient-text">Login to Luxora</h2>
          <br/>
          <div className="auth-container">
            <button className="auth-button google" onClick={handleGoogleSignIn}>
              <img src={googlee} alt="G" className="auth-icon" />
              SignIn with Google
            </button>
            <button className="auth-button github" onClick={handleGithubSignIn}>
              <img src={githubb} alt="G" className="auth-icon" />
              SignIn with Github
            </button>
          </div>
          <Divider>or</Divider>
          <div className="input-box">
            <input
              type="email"
              required
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <img
                src={passImg}
                alt="toggle password visibility"
                onClick={handleClick}
              />
            </span>
            <input
              type={passType}
              required
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Enter Password</label>
          </div>
          <br />
          <div className="remember-forget">
            <label>
              <input type="checkbox" />
              <span>Remember Me</span>
            </label>
            <a href="/signup">Forgot Password?</a>
          </div>
          <br />
          {message === "null" ? (
            <></>
          ) : (
            <div id="errors">
              <img src={alert_img} alt="alert" />
              <p className="errorMessage">{message}</p>
            </div>
          )}
          <button type="submit">Login</button>
          <div className="register-link">
            <p id="account">
              Don't have an account?
              <a href="/signup"> Register</a>
            </p>
          </div>
        </form>
      </div>
      <Chatbot/>
      <footer
        style={{
          textAlign: "center",
          padding: "2rem 0",
          fontSize: "1.2rem",
          color: "#fff",
          background:
            "transparent",
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
    </main>
  );
};

export default Login;












// import React from 'react'
// import axios from 'axios';
// import {useState,useEffect} from 'react';
// import eye from './img/eye.png'
// import hide from './img/hide.png'
// import alert_img from './img/alert.png'
// import { useNavigate } from 'react-router-dom';
// const Login = () => {
//     const [message,setMessage]=useState('null')
//     const navigate=useNavigate()
//     const [redirect,setRedirect]=useState(false)
//     const [loader,setloader]=useState(false)
//     const [pass_change,setPass_change]=useState(false)
//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')
//     const setDataToserver=async(e)=>{
//       setMessage('null')
//      e.preventDefault()
//      setloader(true)
//      let post=await axios.post('https://shopping-backend-neon.vercel.app/login',{
//       email:email,
//       password:password
//      })
//      setMessage(post.data)
//      setloader(false)
//      if(post.data!=='Email Incorrect' && post.data!=='Email or password is not match'){
//       setMessage('null')
//       console.log(post.data)
//     localStorage.setItem("9ouenbcvgetywMhIOEJD",post.data)
//       setRedirect(true)
//      }
//     }
//     useEffect(() => {
//       if (redirect) {
//         navigate('/');
//       }
//     }, [redirect, navigate]);
//     const handleClick=()=>{
//       setPass_change(!pass_change)
//     }
//     let pass_type=pass_change?'text':'password';
//   let pass_img=pass_change?hide:eye
//   return (
//     <main>
//     <div id="loginBox">
//     {loader?
//       <div style={{height:'50%',width:'50%',display:'flex',justifyContent:'center',alignItems:'center',alignSelf:'center',position:'absolute',zIndex:2,gap:20}}>
//       <div className="loader"></div><p  style={{fontSize:20,fontWeight:900}}>checking...</p>
//       </div>
//       :<></>
// }
//       <form onSubmit={setDataToserver}>
//         <h2>Login</h2>
//         <div className="input-box">
//           <input type="email" required name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
//           <label> Email</label>
//         </div>
//         <div className="input-box">
//           <span className="icon"><img src={pass_img} alt="image_clicked_handle" id="handlePasswordClick" onClick={()=>handleClick()}/></span>
//           <input type={pass_type} required name="password" id="enterpassword" value={password} onChange={(e)=>setPassword(e.target.value)}/>
//           <label>Enter Password</label>
//         </div>
//         <div className="remember-forget">
//           <label>
//             <input type="checkbox" /><span>Remember Me</span>
//           </label>
//           <a href='/signup'>Forget Password</a>
//         </div>
//         {message==='null'?<></>:
//         <div id="errors">
//          <img src={alert_img} alt='alert_image_settled' />
//         <p className="errorMessage">{message}</p>
//         </div>
// }
//         <button type="Submit">Login</button>
//         <div className="register-link">
//           <p id="account">Don't have an account?
//             <a href="/signup">Register</a>
//           </p>
//         </div>
//       </form>
//     </div>
// </main>
//   )
// }

// export default Login
