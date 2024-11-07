import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Divider from '@mui/material/Divider'; // For Material-UI
import eye from "./img/eye.png";
import hide from "./img/hide.png";
import alert from "./img/alert.png";
import googlee from "./img/google.png";
import githubb from "./img/github.png";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
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
import "./Signup.css";
import Chatbot from "./chatbot";

const Signup = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passChange, setPassChange] = useState(false);
  const [repassChange, setRepassChange] = useState(false);
  const [repassword, setRepassword] = useState("");

  const navigate = useNavigate();

  const setDataToserver = async (e) => {
    e.preventDefault();
    setLoader(true);
    let _id = localStorage.getItem("9ouenbcvgetywMhIOEJD") || "null";
    if (password === repassword) {
      try {
        let response = await axios.post(
          "https://shopping-backend-neon.vercel.app/signup",
          {
            id: _id,
            name: name,
            email: email,
            password: password,
          }
        );
        setLoader(false);
        if (response.data === "Already Have a account Going to Login page") {
          setError(response.data);
          navigate("/login"); // Redirect to login page
        } else {
          await localStorage.setItem("9ouenbcvgetywMhIOEJD", response.data);
          navigate("/login"); // Redirect to login page
        }
      } catch (err) {
        console.log(err);
        setLoader(false);
        setError("An error occurred. Please try again.");
      }
    } else {
      setLoader(false);
      setError("Passwords do not match.");
    }
  };

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

  const handle_Click = () => {
    setRepassChange(!repassChange);
  };

  let repassType = repassChange ? "text" : "password";
  let repassImg = repassChange ? hide : eye;

  return (
    <section>
      <div id="loginBox">
        {loader && (
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
            <p style={{ fontSize: 20, fontWeight: 900 }}>Registering....</p>
          </div>
        )}
        <form onSubmit={setDataToserver}>
          <h2 className="gradient-text">SignUp at Luxora</h2>
          <br />
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
              type="text"
              required
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <label> User name</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>{" "}
            </span>
            <input
              type="email"
              required
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label> Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <img
                src={passImg}
                alt="image_click_checked_change"
                id="handlePasswordClick"
                onClick={() => handleClick()}
              />
            </span>
            <input
              type={passType}
              required
              name="password"
              id="enterpassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Enter Password</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <img
                src={repassImg}
                alt="image_click_handle_checked_image"
                id="handlePassword_Click"
                onClick={() => handle_Click()}
              />
            </span>
            <input
              type={repassType}
              required
              name="repassword"
              id="repassword"
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
            />
            <label>ReConfirm-Password</label>
          </div>
          {error && (
            <div id="errors">
              <img src={alert} alt="alert_image" />
              <p className="errorMessage">{error}</p>
            </div>
          )}
          <button type="Submit" value="Signup">
            Sign-Up
          </button>
          <div className="register-link">
            <p id="account">
              Already have an account?
              <a href="/login"> Login</a>
            </p>
          </div>
        </form>
      </div>
      <Chatbot />
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
    </section>
  );
};

export default Signup;

// import React from 'react'
// import axios from 'axios';
// import {useState} from 'react';
// import eye from './img/eye.png'
// import hide from './img/hide.png'
// import alert from './img/alert.png'
// const Signup = () => {
//     const [name,setname]=useState('')
//     const [error,setError]=useState('null')
//     const [loader,setloader]=useState(false)
//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')
//     const [pass_change,setPass_change]=useState(false)
//     const [repass_change,setRepass_change]=useState(false)
//     const [repassword,setRepassword]=useState('')
//     const setDataToserver=async(e)=>{
//       e.preventDefault();
//       setloader(true)
//       let _id=localStorage.getItem("9ouenbcvgetywMhIOEJD") || 'null'
//       if(password===repassword){
//       try{
//      let response =await axios.post('https://shopping-backend-neon.vercel.app/signup',{
//       id:_id,
//       name:name,
//       email:email,
//       password:password,
//     })
//     setloader(false)
//     if(response.data==="Already Have a account Going to Login page"){setError(response.data)}
//     else{
//     await localStorage.setItem("9ouenbcvgetywMhIOEJD",response.data)
//     }
//       }
//       catch(err){
//      console.log(err)
//       }
//     }
//   }
//   const handleClick=()=>{
//     setPass_change(!pass_change)
//   }
//   let pass_type=pass_change?'text':'password';
//   let pass_img=pass_change?hide:eye
//   const handle_Click=()=>{
//     setRepass_change(!repass_change)
//   }
//   let repass_type=repass_change?'text':'password';
//   let repass_img=repass_change?hide:eye
//   return (
//       <section>
//     <div id="loginBox">
//     {loader ?
//       <div style={{height:'50%',width:'50%',display:'flex',justifyContent:'center',alignItems:'center',alignSelf:'center',position:'absolute',zIndex:2,gap:20}}>
//       <div className="loader"></div><p  style={{fontSize:20,fontWeight:900}}>SignUp....</p>
//       </div>
//       :<></>
// }
//       <form onSubmit={setDataToserver}>
//         <h2>SignUp</h2>
//         <div className="input-box">
//           <input type="text" required name="name" onChange={(e)=>setname(e.target.value)} value={name}/>
//           <label> User name</label>
//         </div>
//         <div className="input-box">
//           <span className="icon"><ion-icon name="mail"></ion-icon> </span>
//           <input type="email" required name="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
//           <label> Email</label>
//         </div>
//         <div className="input-box">
//           <span className="icon"><img src={pass_img} alt="image_click_chacked_change" id="handlePasswordClick" onClick={()=>handleClick()}/></span>
//           <input type={pass_type} required name="password" id="enterpassword" value={password} onChange={(e)=>setPassword(e.target.value)}/>
//           <label>Enter Password</label>
//         </div>
//         <div className="input-box">
//         <span className="icon"><img src={repass_img} alt="image_click_handle_checked_image" id="handlePassword_Click" onClick={()=>handle_Click()}/></span>
//           <input type={repass_type} required name="repassword" id="repassword" value={repassword} onChange={(e)=>setRepassword(e.target.value)}/>
//             <label>Re-Password</label>
//           </div>
//           {error==='null'?<></>:
//           <div id="errors">
//             <img src={alert} alt='alert_image'/>
//         <p className="errorMessage">{error}</p>
//          </div>
// }
//         <button type="Submit" value='Signup'>signup</button></form>
//     </div>
//   </section>
//   )
// }

// export default Signup
