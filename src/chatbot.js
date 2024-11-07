import React, { useState, useEffect, useRef } from "react";
import "./chatbot.css";
import axios from "axios";
import {
  FaPaperclip,
  FaMicrophone,
  FaSmile,
  FaSun,
  FaMoon,
  FaTimes,
  FaPalette,
} from "react-icons/fa";
import { RiSendPlane2Fill } from "react-icons/ri";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! How can I help you today?",
      time: new Date().toLocaleTimeString(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState("default");
  const messagesEndRef = useRef(null);

  const themes = {
    default: {
      header: "#4b4b4b",
      body: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
      userMessage: "linear-gradient(135deg, #0ba360 0%, #3cba92 100%)",
      botMessage: "linear-gradient(135deg, #ffafbd 0%, #ffc3a0 100%)",
      inputBg: "#fff",
      inputColor: "#000",
    },
    coral: {
      header: "#ff6f61",
      body: "linear-gradient(135deg, #f64f59 0%, #c471ed 50%, #12c2e9 100%)",
      userMessage: "linear-gradient(135deg, #feb47b 0%, #ff7e5f 100%)",
      botMessage: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
      inputBg: "#fff3e6",
      inputColor: "#333",
    },
    green: {
      header: "#2f9e44",
      body: "linear-gradient(135deg, #38ef7d 0%, #11998e 100%)",
      userMessage: "linear-gradient(135deg, #00b09b 0%, #96c93d 100%)",
      botMessage: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
      inputBg: "#e6ffe6",
      inputColor: "#004d00",
    },
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = async (e) => {
    if (e.key === "Enter" && input.trim()) {
      const newMessages = [
        ...messages,
        { from: "user", text: input, time: new Date().toLocaleTimeString() },
      ];
      setMessages(newMessages);
      setInput("");
      setIsTyping(true);

      try {
        const response = await axios.post("http://localhost:3001/api/chatbot", {
          message: input,
        });
        console.log("Response from server:", response.data.reply);
        setMessages([
          ...newMessages,
          {
            from: "bot",
            text: response.data.reply,
            time: new Date().toLocaleTimeString(),
          },
        ]);
      } catch (error) {
        console.error(error);
        setMessages([
          ...newMessages,
          {
            from: "bot",
            text: "Sorry, something went wrong.",
            time: new Date().toLocaleTimeString(),
          },
        ]);
      }
      setIsTyping(false);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleThemeChange = (themeKey) => {
    setTheme(themeKey);
  };

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#1a1a1a" : "#ffffff";
  }, [isDarkMode]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const currentTheme = themes[theme];

  return (
    <div>
      <button className="chatbot-btn" onClick={toggleChatbot}>
        <span className="fab-icon">💬</span>
      </button>
      {isOpen && (
        <div className="chatbot-container">
          <div
            className={`chatbot-window ${
              isDarkMode ? "dark-mode" : "light-mode"
            }`}
            style={{ background: currentTheme.body }}
          >
            <div
              className="chatbot-header"
              style={{ backgroundColor: currentTheme.header }}
            >
              Chat with us!
              <div className="header-actions">
                <button className="theme-toggle-btn" onClick={toggleTheme}>
                  {isDarkMode ? <FaSun /> : <FaMoon />}
                </button>
                <button
                  className="theme-change-btn"
                  onClick={() =>
                    handleThemeChange(
                      theme === "default"
                        ? "coral"
                        : theme === "coral"
                        ? "green"
                        : "default"
                    )
                  }
                >
                  <FaPalette />
                </button>
                <button className="close-btn" onClick={toggleChatbot}>
                  <FaTimes />
                </button>
              </div>
            </div>
            <div className="chatbot-body">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={
                    msg.from === "user"
                      ? "message-container user"
                      : "message-container bot"
                  }
                >
                  <div
                    className={
                      msg.from === "user" ? "user-message" : "bot-message"
                    }
                    style={{
                      background:
                        msg.from === "user"
                          ? currentTheme.userMessage
                          : currentTheme.botMessage,
                    }}
                  >
                    {msg.text}
                    <span className="timestamp">{msg.time}</span>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="typing-indicator">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div
              className="chatbot-footer"
              style={{ backgroundColor: currentTheme.inputBg }}
            >
              <button className="icon-btn" title="Attach a file">
                <FaPaperclip />
              </button>
              <button className="icon-btn" title="Send an emoji">
                <FaSmile />
              </button>
              <input
                type="text"
                className="chatbot-input"
                value={input}
                onChange={handleInputChange}
                onKeyDown={sendMessage}
                placeholder="Type a message..."
                style={{
                  backgroundColor: currentTheme.inputBg,
                  color: currentTheme.inputColor,
                }}
              />
              <button className="icon-btn" title="Record a voice message">
                <FaMicrophone />
              </button>
              <button
                className="send-btn"
                onClick={(e) => sendMessage({ key: "Enter" })}
              >
                <RiSendPlane2Fill />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

// import React, { useState, useEffect } from "react";
// import "./chatbot.css";
// import axios from "axios";
// import {
//   FaPaperclip,
//   FaMicrophone,
//   FaSmile,
//   FaSun,
//   FaMoon,
//   FaTimes,
//   FaPalette,
// } from "react-icons/fa";
// import { RiSendPlane2Fill } from "react-icons/ri";

// const Chatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     {
//       from: "bot",
//       text: "Hi! How can I help you today?",
//       time: new Date().toLocaleTimeString(),
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [theme, setTheme] = useState("default");

//   const themes = {
//     default: {
//       header: "#4b4b4b",
//       body: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
//       userMessage: "linear-gradient(135deg, #0ba360 0%, #3cba92 100%)",
//       botMessage: "linear-gradient(135deg, #ffafbd 0%, #ffc3a0 100%)",
//       inputBg: "#fff",
//       inputColor: "#000",
//     },
//     coral: {
//       header: "#ff6f61",
//       body: "linear-gradient(135deg, #f64f59 0%, #c471ed 50%, #12c2e9 100%)",
//       userMessage: "linear-gradient(135deg, #feb47b 0%, #ff7e5f 100%)",
//       botMessage: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
//       inputBg: "#fff3e6",
//       inputColor: "#333",
//     },
//     green: {
//       header: "#2f9e44",
//       body: "linear-gradient(135deg, #38ef7d 0%, #11998e 100%)",
//       userMessage: "linear-gradient(135deg, #00b09b 0%, #96c93d 100%)",
//       botMessage: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
//       inputBg: "#e6ffe6",
//       inputColor: "#004d00",
//     },
//   };

//   const toggleChatbot = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   };

//   const sendMessage = async (e) => {
//     if (e.key === "Enter" && input.trim()) {
//       const newMessages = [
//         ...messages,
//         { from: "user", text: input, time: new Date().toLocaleTimeString() },
//       ];
//       setMessages(newMessages);
//       setInput("");
//       setIsTyping(true);

//       try {
//         const response = await axios.post("/api/chatbot", { message: input });
//         setMessages([
//           ...newMessages,
//           {
//             from: "bot",
//             text: response.data.reply,
//             time: new Date().toLocaleTimeString(),
//           },
//         ]);
//       } catch (error) {
//         console.error(error);
//         setMessages([
//           ...newMessages,
//           {
//             from: "bot",
//             text: "Sorry, something went wrong.",
//             time: new Date().toLocaleTimeString(),
//           },
//         ]);
//       }
//       setIsTyping(false);
//     }
//   };

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   const handleThemeChange = (themeKey) => {
//     setTheme(themeKey);
//   };

//   useEffect(() => {
//     document.body.style.backgroundColor = isDarkMode ? "#1a1a1a" : "#ffffff";
//   }, [isDarkMode]);

//   const currentTheme = themes[theme];

//   return (
//     <div>
//       <button className="chatbot-btn" onClick={toggleChatbot}>
//         <span className="fab-icon">💬</span>
//       </button>
//       {isOpen && (
//         <div className="chatbot-container">
//           <div
//             className={`chatbot-window ${
//               isDarkMode ? "dark-mode" : "light-mode"
//             }`}
//             style={{ background: currentTheme.body }}
//           >
//             <div
//               className="chatbot-header"
//               style={{ backgroundColor: currentTheme.header }}
//             >
//               Chat with us!
//               <div className="header-actions">
//                 <button className="close-btn" onClick={toggleChatbot}>
//                   <FaTimes />
//                 </button>
//                 <button className="theme-toggle-btn" onClick={toggleTheme}>
//                   {isDarkMode ? <FaSun /> : <FaMoon />}
//                 </button>
//                 <button
//                   className="theme-change-btn"
//                   onClick={() =>
//                     handleThemeChange(
//                       theme === "default"
//                         ? "coral"
//                         : theme === "coral"
//                         ? "green"
//                         : "default"
//                     )
//                   }
//                 >
//                   <FaPalette />
//                 </button>
//               </div>
//             </div>
//             <div className="chatbot-body">
//               {messages.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={
//                     msg.from === "user"
//                       ? "message-container user"
//                       : "message-container bot"
//                   }
//                 >
//                   <div
//                     className={
//                       msg.from === "user" ? "user-message" : "bot-message"
//                     }
//                     style={{
//                       background:
//                         msg.from === "user"
//                           ? currentTheme.userMessage
//                           : currentTheme.botMessage,
//                     }}
//                   >
//                     {msg.text}
//                     <span className="timestamp">{msg.time}</span>
//                   </div>
//                 </div>
//               ))}
//               {isTyping && (
//                 <div className="typing-indicator">
//                   <span className="dot"></span>
//                   <span className="dot"></span>
//                   <span className="dot"></span>
//                 </div>
//               )}
//             </div>
//             <div
//               className="chatbot-footer"
//               style={{ backgroundColor: currentTheme.inputBg }}
//             >
//               <button className="icon-btn" title="Attach a file">
//                 <FaPaperclip />
//               </button>
//               <button className="icon-btn" title="Send an emoji">
//                 <FaSmile />
//               </button>
//               <input
//                 type="text"
//                 className="chatbot-input"
//                 value={input}
//                 onChange={handleInputChange}
//                 onKeyDown={sendMessage}
//                 placeholder="Type a message..."
//                 style={{
//                   backgroundColor: currentTheme.inputBg,
//                   color: currentTheme.inputColor,
//                 }}
//               />
//               <button className="icon-btn" title="Record a voice message">
//                 <FaMicrophone />
//               </button>
//               <button
//                 className="send-btn"
//                 onClick={(e) => sendMessage({ key: "Enter" })}
//               >
//                 <RiSendPlane2Fill />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;
