import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Mobile.css";
import { Link, useParams } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Chatbot from "./chatbot";
const Display = () => {
  const [data, setData] = useState({});
  const [loader, setloader] = useState(false);
  let { id } = useParams();
  useEffect(() => {
    const searchresults = async () => {
      try {
        setloader(true);
        let value = await axios.get(
          `https://shopping-backend-neon.vercel.app/${id}`,
          { params: { category: id } }
        );
        setData(value.data);
        setloader(false);
      } catch (err) {
        console.log(err);
      }
    };
    searchresults();
  }, [id]);
  let types;
  id === "toys" ? (types = "Type:") : (types = "Display:");
  return (
    <div
      id="mobile_page"
      style={
        loader
          ? {
              display: "flex",
              height: "100vh",
              justifyContent: "center",
              alignItems: "center",
            }
          : {}
      }
    >
      {loader ? (
        <span id="loader" style={{ position: "absolute", left: "45%" }}></span>
      ) : (
        <>
          {Object.values(data).map((item, index) => (
            <Link to={`/${id}/${item._id}`} key={`link_tag${index}`}>
              <div id="container" key={`container_box${index}`}>
                <img
                  src={item.img[0].url}
                  key={`img${index}`}
                  className={`images  ${index}`}
                  alt={`index${index}`}
                />
                <div id="details_box">
                  <h4
                    key={`productname${index}`}
                    id={`productname ${index + 10}`}
                    className={`productnames ${index}`}
                  >
                    {item.productName.length >= 30
                      ? item.productName.slice(0, 30) + " "
                      : item.productName}
                  </h4>
                  {id === "fashion" || id === "furniture" ? (
                    <>
                      <li
                        className="li"
                        key={`1stlist_key${index}`}
                      >{`Color:${item.details[0].color}`}</li>
                      <li
                        key={`second_list_key${index}`}
                        className="li"
                      >{`Material:${item.details[0].material}`}</li>
                    </>
                  ) : (
                    <>
                      <li
                        key={`third_list_key${index}`}
                        className="li"
                      >{`Color:${item.details[0].color}`}</li>
                      {item.details[0].ram === "N/A" ? (
                        <></>
                      ) : (
                        <li className="li" id="extradetails">
                          <span
                            key={`ram_value${index}`}
                          >{`${item.details[0].ram} | `}</span>
                          <span key={`rom_values${index}`}>
                            {item.details[0].rom}
                          </span>
                        </li>
                      )}
                      {item.details[0]?.battery === "N/A" ? (
                        <></>
                      ) : (
                        <li
                          className="li"
                          key={`battery${index}`}
                        >{`Battery:${item.details[0].battery}`}</li>
                      )}
                      <li
                        className="li"
                        key={`${item.details[0].display}${index}`}
                      >{`${types}${item.details[0].display}`}</li>
                    </>
                  )}
                  <li className="li" key={`warrenty ${index}`}>{`warrenty :${
                    item.details[0].warrenty === undefined
                      ? "1year"
                      : item.details[0].warrenty
                  }`}</li>
                  {id === "laptop" ||
                  id === "toys" ||
                  id === "fashion" ||
                  id === "furniture" ? (
                    <></>
                  ) : (
                    <>
                      <li
                        className="li"
                        key={`front_camera${index}`}
                      >{`Front Camera : ${item.details[0].camera[0].front}`}</li>
                      <li className="li">{`Back Camera  : ${item.details[0].camera[0].back}`}</li>
                    </>
                  )}
                </div>
                <div id="prize_s" key={`prizes_details${index}`}>
                  <span
                    id="sellprize"
                    key={`selling_prize ${index}`}
                  >{`₹${item.SELLprize} `}</span>
                  <div id="difference_prize_s">
                    <h3
                      id="MRPprize"
                      key={`mrp_prize ${index}`}
                    >{`₹${item.MRPprize}`}</h3>
                    <h3 className="sellingprize" id="offer">{` ${Math.floor(
                      ((Number(item.MRPprize) - Number(item.SELLprize)) /
                        Number(item.MRPprize)) *
                        100
                    )}%off`}</h3>
                  </div>
                  <h3
                    className="stock"
                    id={item.stock.replace(/\s/g, "")}
                    key={`stock_values${index}`}
                  >
                    {item.stock}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </>
      )}
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
    </div>
  );
};

export default Display; 

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Mobile.css";
// import { Link, useParams } from "react-router-dom";
// const Display = () => {
//   const [data, setData] = useState({});
//   const [loader, setloader] = useState(false);
//   let { id } = useParams();
//   useEffect(() => {
//     const searchresults = async () => {
//       try {
//         setloader(true);
//         let value = await axios.get(
//           `https://shopping-backend-neon.vercel.app/${id}`,
//           { params: { category: id } }
//         );
//         setData(value.data);
//         setloader(false);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     searchresults();
//   }, [id]);
//   let types;
//   id === "toys" ? (types = "Type:") : (types = "Display:");
//   return (
//     <div
//       id="mobile_page"
//       style={
//         loader
//           ? {
//               display: "flex",
//               height: "100vh",
//               justifyContent: "center",
//               alignItems: "center",
//             }
//           : {}
//       }
//     >
//       {loader ? (
//         <span id="loader" style={{ position: "absolute", left: "45%" }}></span>
//       ) : (
//         <>
//           {Object.values(data).map((item, index) => (
//             <Link to={`/${id}/${item._id}`} key={`link_tag${index}`}>
//               <div id="container" key={`container_box${index}`}>
//                 <img
//                   src={item.img[0].url}
//                   key={`img${index}`}
//                   className={`images  ${index}`}
//                   alt={`index${index}`}
//                 />
//                 <div id="details_box">
//                   <h4
//                     key={`productname${index}`}
//                     id={`productname ${index + 10}`}
//                     className={`productnames ${index}`}
//                   >
//                     {item.productName.length >= 30
//                       ? item.productName.slice(0, 30) + " "
//                       : item.productName}
//                   </h4>
//                   {id === "fashion" || id === "furniture" ? (
//                     <>
//                       <li
//                         className="li"
//                         key={`1stlist_key${index}`}
//                       >{`Color:${item.details[0].color}`}</li>
//                       <li
//                         key={`second_list_key${index}`}
//                         className="li"
//                       >{`Material:${item.details[0].material}`}</li>
//                     </>
//                   ) : (
//                     <>
//                       <li
//                         key={`third_list_key${index}`}
//                         className="li"
//                       >{`Color:${item.details[0].color}`}</li>
//                       {item.details[0].ram === "N/A" ? (
//                         <></>
//                       ) : (
//                         <li className="li" id="extradetails">
//                           <span
//                             key={`ram_value${index}`}
//                           >{`${item.details[0].ram} | `}</span>
//                           <span key={`rom_values${index}`}>
//                             {item.details[0].rom}
//                           </span>
//                         </li>
//                       )}
//                       {item.details[0]?.battery === "N/A" ? (
//                         <></>
//                       ) : (
//                         <li
//                           className="li"
//                           key={`battery${index}`}
//                         >{`Battery:${item.details[0].battery}`}</li>
//                       )}
//                       <li
//                         className="li"
//                         key={`${item.details[0].display}${index}`}
//                       >{`${types}${item.details[0].display}`}</li>
//                     </>
//                   )}
//                   <li className="li" key={`warrenty ${index}`}>{`warrenty :${
//                     item.details[0].warrenty === undefined
//                       ? "1year"
//                       : item.details[0].warrenty
//                   }`}</li>
//                   {id === "laptop" ||
//                   id === "toys" ||
//                   id === "fashion" ||
//                   id === "furniture" ? (
//                     <></>
//                   ) : (
//                     <>
//                       <li
//                         className="li"
//                         key={`front_camera${index}`}
//                       >{`Front Camera : ${item.details[0].camera[0].front}`}</li>
//                       <li className="li">{`Back Camera  : ${item.details[0].camera[0].back}`}</li>
//                     </>
//                   )}
//                 </div>
//                 <div id="prize_s" key={`prizes_details${index}`}>
//                   <span
//                     id="sellprize"
//                     key={`selling_prize ${index}`}
//                   >{`₹${item.SELLprize} `}</span>
//                   <div id="difference_prize_s">
//                     <h3
//                       id="MRPprize"
//                       key={`mrp_prize ${index}`}
//                     >{`₹${item.MRPprize}`}</h3>
//                     <h3 className="sellingprize" id="offer">{` ${Math.floor(
//                       ((Number(item.MRPprize) - Number(item.SELLprize)) /
//                         Number(item.MRPprize)) *
//                         100
//                     )}%off`}</h3>
//                   </div>
//                   <h3
//                     className="stock"
//                     id={item.stock.replace(/\s/g, "")}
//                     key={`stock_values${index}`}
//                   >
//                     {item.stock}
//                   </h3>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </>
//       )}
//     </div>
//   );
// };

// export default Display;
