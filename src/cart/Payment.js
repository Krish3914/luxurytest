import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useLocation } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Chatbot from "../chatbot";
const Payment = () => {
  const location = useLocation();
  const id = location.state.id;
  const prize = location.state.SELLprize * 100;
  const productname = location.state.productName;
  const _id = location.state._id;
  const payment = (token) => {
    const body = {
      token,
      _id,
      id,
      productname,
      prize,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch("https://shopping-backend-neon.vercel.app/payment", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div id="payment_page">
      <StripeCheckout
        token={payment}
        stripeKey="pk_test_51OK7pRSIOJiY1NziSnmeuAJ7udLC2cVlchYfE0RezSLpJjb4PPCTGUfUCtginJS699g1ElVa55KQNMOyJCu8yUF500AoGEKRgT"
        name={productname}
        amount={prize}
        currency="INR"
      >
        <div
          style={{
            display: "flex",
            padding: "2rem",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "rgb(203, 156, 156)",
            marginBottom: "100px",
            gap: "2rem",
          }}
        >
          <p>This payment will be a Test mode Not money needed</p>
          <p>If you face any problem please contact page builder on Github..</p>
          <h2 style={{ fontSize: 18, fontWeight: 500 }}>
            Contact:
            <a
              style={{ paddingLeft: 10, color: "gainsboro" }}
              href="https://www.linkedin.com/in/krish-agrawal-26jy/"
            >
              <img
                style={{
                  height: 20,
                  width: 20,
                  position: "relative",
                  left: 5,
                  top: 3,
                }}
                // href="./LinkedIn.jpg"
                // src="https://cdn-icons-png.flaticon.com/128/2111/2111425.png"
                // src="https://pngtree.com/freepng/linkedin-icon-logo_3560501.html"
                src="https://blog.waalaxy.com/wp-content/uploads/2021/01/linkedin-2.png"
                alt="LinkedIn"
              />{" "}
              ▪️ Krish Agrawal
            </a>
          </h2>
          <button
            style={{
              width: 200,
              height: 40,
              boxShadow: "0 5px 5px rgba(0,0,0,0.5)",
            }}
          >
            PayNow
          </button>
        </div>
      </StripeCheckout>
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
          marginTop: "50px",
          paddingTop: "30px",
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

export default Payment; 




// import React from 'react'
// import StripeCheckout from 'react-stripe-checkout';
// import { useLocation } from 'react-router-dom';
// const Payment = () => {
//     const location = useLocation();
//     const id=location.state.id
//     const prize = location.state.SELLprize*100;
//     const productname = location.state.productName
//     const _id=location.state._id
//     const payment=(token)=>{
//         const body={
//         token,
//         _id,
//           id,
//           productname,
//           prize
//         }
//           const headers={
//             "Content-Type":"application/json"
//           }
//           return fetch('https://shopping-backend-neon.vercel.app/payment',{
//             method:"POST",
//             headers,
//             body:JSON.stringify(body)
//           })
//           .then((res)=>console.log(res))
//           .catch((err)=>console.log(err))
//       }
//   return (
//     <div id='payment_page'>
//         <StripeCheckout
//             token={payment}
//             stripeKey='pk_test_51OK7pRSIOJiY1NziSnmeuAJ7udLC2cVlchYfE0RezSLpJjb4PPCTGUfUCtginJS699g1ElVa55KQNMOyJCu8yUF500AoGEKRgT'
//             name={productname}
//             amount={prize}
//             currency='INR'
//              >
//               <div style={{display:'flex',padding:'2rem',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'2rem'}}>
//               <p>This payment will be a Test mode Not money needed</p>
//               <p>If you want Anything problem please contact us page builder on Github..</p>
//               <h2 style={{fontSize:18,fontWeight:500}}>contact <a style={{paddingLeft:10}} href='https://github.com/sivaprasath2004'>sivaprasath2004<img style={{height
//               :20,width:20,position:'relative',left:5,top:3}} src='https://cdn-icons-png.flaticon.com/128/2111/2111425.png' alt='github'  /></a></h2>
//             <button style={{width:200,height:40,boxShadow:'0 5px 5px rgba(0,0,0,0.5)'}}>PayNow</button>
//             </div>
//             </StripeCheckout>
//     </div>
//   )
// }

// export default Payment
