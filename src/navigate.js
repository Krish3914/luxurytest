// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import "./Navigate.css"; // Import your CSS file where you define styles
// import {
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   Avatar,
//   Menu,
//   MenuItem,
// } from "@mui/material";

// const Navigate = () => {
//   const [menuUse, setMenuUse] = useState(true);
//   const navigate = useNavigate();
//   const menuBar = () => {
//     setMenuUse(!menuUse);
//   };

//   const [anchorEl, setAnchorEl] = useState(null);
//   const user = {
//     name: localStorage.getItem("name") || "Admin",
//     profilePic: localStorage.getItem("profilePic"),
//     email: localStorage.getItem("email") || "admin@testmail.com",
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleLogout = () => {
//     localStorage.removeItem("name");
//     localStorage.removeItem("profilePic");
//     localStorage.removeItem("email");
//     navigate("/");
//   };

//   const cart = () => {
//     let user_id = localStorage.getItem("9ouenbcvgetywMhIOEJD") || "null";
//     if (user_id === "null") {
//       navigate("/login");
//     } else {
//       navigate("/cart");
//     }
//   };

//   let menu = menuUse
//     ? "https://cdn-icons-png.flaticon.com/128/5036/5036960.png"
//     : "https://cdn-icons-png.flaticon.com/128/10288/10288720.png";
//   let classname = menuUse ? "true" : "false";

//   return (
//     <>
//       <div
//         className="menubar"
//         style={{
//           cursor: "pointer",
//         }}
//       >
//         <img id="menuBar" src={menu} alt="Menu" onClick={menuBar} />
//       </div>
//       <nav
//         id={`navigation${classname}`}
//         className="navbar"
//         style={{
//           backgroundColor: "rgba(77, 111, 168, 0.5)",
//           color: "#ffffff",
//           borderRadius: "15%", // This makes the navbar oval-shaped
//         }}
//       >
//         <Link to="/" className="brand-link">
//           <img
//             src="./LuxoraLogo.png" // Replace with your actual logo image path
//             alt="Luxora Logo"
//             style={{ width: "100px", height: "auto" }} // Adjust width and height as needed
//           />
//         </Link>
//         <Link to="/" style={{ color: "#ffffff" }}></Link>
//         <Link to="/" style={{ color: "#ffffff" }}></Link>
//         <Link to="/" style={{ color: "#ffffff" }}></Link>
//         <Link to="/" style={{ color: "#ffffff" }}></Link>
//         <Link to="/" style={{ color: "#ffffff" }}></Link>
//         <Link to="/" style={{ color: "#ffffff" }}></Link>
//         <Link to="/" style={{ color: "#ffffff" }}></Link>
//         <Link to="/" style={{ color: "#ffffff",
//           marginLeft:"15%",
//          }}>
//           Home
//         </Link>
//         <Link to="/signup" style={{ color: "#ffffff" }}>
//           Signup
//         </Link>
//         <Link to="/login" style={{ color: "#ffffff" }}>
//           Login
//         </Link>
//         <img
//           src="https://cdn-icons-png.flaticon.com/128/4290/4290722.png"
//           alt="cart"
//           className="cart"
//           onClick={cart}
//         />

//         <div classname="profile">
//           <ProfilePic onClick={handleClick}>
//             <AvatarStyled src={user.profilePic} alt="Profile Picture" />
//           </ProfilePic>
//           <StyledMenu
//             id="profile-menu"
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={handleClose}
//           >
//             <MenuItem onClick={handleClose}>
//               User Email: <br />
//               {user.email}
//             </MenuItem>
//             <MenuItem onClick={handleLogout}>Logout</MenuItem>
//           </StyledMenu>
//         </div>
//       </nav>
//       <div
//         className="menus"
//         id={classname}
//         style={{ backgroundColor: "#392459", color: "#ffffff" }}
//       >
//         <Link to="/" style={{ color: "#ffffff" }}>
//           <img
//             src="https://cdn-icons-png.flaticon.com/128/25/25694.png"
//             alt="home"
//           />
//           <p>Home</p>
//         </Link>
//         <Link to="/signup" style={{ color: "#ffffff" }}>
//           <img
//             src="https://cdn-icons-png.flaticon.com/128/7542/7542128.png"
//             alt="signup"
//           />
//           <p>Signup</p>
//         </Link>
//         <Link to="/login" style={{ color: "#ffffff" }}>
//           <img
//             src="https://cdn-icons-png.flaticon.com/128/14575/14575259.png"
//             alt="login"
//           />
//           <p>Login</p>
//         </Link>
//         <Link to="/mobile" style={{ color: "#ffffff" }}>
//           <img
//             src="https://cdn-icons-png.flaticon.com/128/1551/1551353.png"
//             alt="mobile"
//           />
//           <p>Mobile</p>
//         </Link>
//         <Link to="/laptop" style={{ color: "#ffffff" }}>
//           <img
//             src="https://cdn-icons-png.flaticon.com/128/99/99488.png"
//             alt="laptop"
//           />
//           <p>Laptop</p>
//         </Link>
//         <Link to="/toys" style={{ color: "#ffffff" }}>
//           <img
//             src="https://cdn-icons-png.flaticon.com/128/3171/3171959.png"
//             alt="Toys"
//           />
//           <p>Toys</p>
//         </Link>
//         <Link to="/cart" style={{ color: "#ffffff" }}>
//           <img
//             src="https://cdn-icons-png.flaticon.com/128/4290/4290722.png"
//             alt="Cart"
//           />
//           <p>Cart</p>
//         </Link>
//         <a
//           href="https://github.com/Krish3914"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ color: "#ffffff" }}
//         >
//           <img
//             src="https://cdn-icons-png.flaticon.com/128/4460/4460756.png"
//             alt="Support"
//           />
//           <p>Support</p>
//         </a>
//       </div>
//     </>
//   );
// };

// export default Navigate;

// const ProfilePic = styled.div`
//   display: flex;
//   align-items: center;
//   margin-left: auto;
//   cursor: pointer;
// `;

// const AvatarStyled = styled(Avatar)`
//   width: 50px;
//   height: 50px;
//   margin-left: 10px;
//   @media (max-width: 768px) {
//     width: 40px;
//     height: 40px;
//   }
// `;

// const StyledMenu = styled(Menu)`
//   & .MuiPaper-root {
//     background-color: #4a3670;
//     color: white;
//     border: 1px solid #4a3670;
//   }

//   & .MuiList-root {
//     padding: 0;
//   }

//   & .MuiMenuItem-root {
//     padding: 10px 20px;
//     font-size: 14px;
//     &:hover {
//       background-color: rgba(255, 255, 255, 0.1);
//     }
//   }

//   & .MuiMenuItem-root.Mui-disabled {
//     opacity: 0.7;
//   }
// `;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./Navigate.css"; // Import your CSS file where you define styles
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  InputBase,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Navigate = () => {
  const [menuUse, setMenuUse] = useState(true);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const menuBar = () => {
    setMenuUse(!menuUse);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const user = {
    name: localStorage.getItem("name") || "Admin",
    profilePic: localStorage.getItem("profilePic"),
    email: localStorage.getItem("email") || "admin@testmail.com",
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("profilePic");
    localStorage.removeItem("email");
    navigate("/");
  };

  const cart = () => {
    let user_id = localStorage.getItem("9ouenbcvgetywMhIOEJD") || "null";
    if (user_id === "null") {
      navigate("/login");
    } else {
      navigate("/cart");
    }
  };

  let menu = menuUse
    ? "https://cdn-icons-png.flaticon.com/128/5036/5036960.png"
    : "https://cdn-icons-png.flaticon.com/128/10288/10288720.png";
  let classname = menuUse ? "true" : "false";

 
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      if (searchQuery) {
        navigate(`/search?query=${searchQuery}`);
      }
    }
  };
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };



  return (
    <>
      <div
        className="menubar"
        style={{
          cursor: "pointer",
          background:
            "linear-gradient(135deg, rgba(150, 81, 241, 0.5), rgba(76, 199, 226, 0.5), rgba(228, 85, 123, 0.5), rgba(243, 83, 237, 0.5))",
        }}
      >
        <img id="menuBar" src={menu} alt="Menu" onClick={menuBar} />
      </div>
      <nav
        id={`navigation${classname}`}
        className="navbar"
        style={{
          backgroundColor: "rgba(77, 111, 168, 0.5)",
          color: "#ffffff",
          borderRadius: "15%", // This makes the navbar oval-shaped
        }}
      >
        <Link to="/" className="brand-link">
          <img
            src="./LuxoraLogo.png" // Replace with your actual logo image path
            alt="Luxora Logo"
            style={{ width: "100px", height: "auto" }} // Adjust width and height as needed
          />
        </Link>
        <SearchBox>
          <InputBaseStyled
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            value={searchQuery}
            onChange={handleInputChange}
            onKeyPress={handleSearch}
          />
          <IconButtonStyled
            type="button"
            id="searchicon"
            aria-label="search"
            onClick={() => navigate(`/search?query=${searchQuery}`)}
          >
            <SearchIcon />
          </IconButtonStyled>
        </SearchBox>
        <Link to="/" id="colornamehome">
          Home
        </Link>
        <Link to="/signup" id="colornamesignup">
          Signup
        </Link>
        <Link to="/login" id="colornamelogin">
          Login
        </Link>
        <img
          src="https://cdn-icons-png.flaticon.com/128/4290/4290722.png"
          alt="cart"
          className="cart"
          onClick={cart}
        />

        <div classname="profile">
          <ProfilePic onClick={handleClick}>
            <AvatarStyled src={user.profilePic} alt="Profile Picture" />
          </ProfilePic>
          <StyledMenu
            id="profile-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              User Email: <br />
              {user.email}
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </StyledMenu>
        </div>
      </nav>
      <div
        className="menus"
        id={classname}
        style={{ backgroundColor: "#392459", color: "#ffffff" }}
      >
        <Link to="/" style={{ color: "#ffffff" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/25/25694.png"
            alt="home"
          />
          <p>Home</p>
        </Link>
        <Link to="/signup" style={{ color: "#ffffff" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/7542/7542128.png"
            alt="signup"
          />
          <p>Signup</p>
        </Link>
        <Link to="/login" style={{ color: "#ffffff" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/14575/14575259.png"
            alt="login"
          />
          <p>Login</p>
        </Link>
        <Link to="/mobile" style={{ color: "#ffffff" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/1551/1551353.png"
            alt="mobile"
          />
          <p>Mobile</p>
        </Link>
        <Link to="/laptop" style={{ color: "#ffffff" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/99/99488.png"
            alt="laptop"
          />
          <p>Laptop</p>
        </Link>
        <Link to="/toys" style={{ color: "#ffffff" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3171/3171959.png"
            alt="Toys"
          />
          <p>Toys</p>
        </Link>
        <Link to="/cart" style={{ color: "#ffffff" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/4290/4290722.png"
            alt="Cart"
          />
          <p>Cart</p>
        </Link>
        <a
          href="https://github.com/Krish3914"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#ffffff" }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/4460/4460756.png"
            alt="Support"
          />
          <p>Support</p>
        </a>
      </div>
    </>
  );
};

export default Navigate;

const ProfilePic = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
`;

const AvatarStyled = styled(Avatar)`
  width: 50px;
  height: 50px;
  margin-left: 10px;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const StyledMenu = styled(Menu)`
  & .MuiPaper-root {
    background-color: #4a3670;
    color: white;
    border: 1px solid #4a3670;
  }

  & .MuiList-root {
    padding: 0;
  }

  & .MuiMenuItem-root {
    padding: 10px 20px;
    font-size: 14px;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  & .MuiMenuItem-root.Mui-disabled {
    opacity: 0.7;
  }
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(
    135deg,
    rgba(84, 51, 127, 0.6),
    rgba(43, 121, 139, 0.6),
    rgba(243, 68, 112, 0.6),
    rgba(166, 61, 163, 0.6)
  );
  padding: 5px 15px;
  border-radius: 50px;
  width: 40%;
  margin: 0 20px;
  box-shadow: 0px 4px 6px rgba(255, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(84, 51, 127, 0.8),
      rgba(43, 121, 139, 0.8),
      rgba(243, 68, 112, 0.8),
      rgba(166, 61, 163, 0.8)
    );
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 250px;
  }
`;

const InputBaseStyled = styled(InputBase)`
  flex: 1;
  padding: 5px;
  color: white;
  font-size: 16px;
  width: 10px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const IconButtonStyled = styled(IconButton)`
  color: white;
  padding: 10px;

  &:hover {
    color: #ffeb3b;
  }
`;


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// const Navigate = () => {
//   const [menuUse, setMenuUse] = useState(true);
//   const navigate = useNavigate();
//   const menuBar = () => {
//     setMenuUse(!menuUse);
//   };
//   let menu = menuUse
//     ? "https://cdn-icons-png.flaticon.com/128/5036/5036960.png"
//     : "https://cdn-icons-png.flaticon.com/128/10288/10288720.png";
//   let classname = menuUse ? "true" : "false";
//   const cart = () => {
//     let user_id = localStorage.getItem("9ouenbcvgetywMhIOEJD") || "null";
//     if (user_id === "null") {
//       navigate("/login");
//     } else {
//       navigate("/cart");
//     }
//   };
//   return (
//     <>
//       <div className="menubar">
//         <img id="menuBar" src={menu} alt="Menu" onClick={menuBar} />
//       </div>
//       <nav id={`naviation${classname}`}>
//         <h1 id="h1">shopper.com</h1>
//         <Link to="/">Home</Link>
//         <Link to="/signup">Signup</Link>
//         <Link to="/login">Login</Link>
//         <img
//           src="https://cdn-icons-png.flaticon.com/128/4290/4290722.png"
//           alt="cart"
//           className="cart"
//           onClick={cart}
//         />
//       </nav>
//       <div className="menus" id={classname}>
//         <Link to="/">
//           <img
//             src="https://cdn-icons-png.flaticon.com/128/25/25694.png"
//             alt="home"
//           />
//           <p>Home</p>
//         </Link>
//         <Link to="/signup">
//           <img
//             src="https://cdn-icons-png.flaticon.com/128/7542/7542128.png"
//             alt="signup"
//           />
//           <p>Signup</p>
//         </Link>
//         <Link to="/login">
//           <img
//             src="https://cdn-icons-png.flaticon.com/128/14575/14575259.png"
//             alt="login"
//           />
//           <p>Login</p>
//         </Link>
//         <Link to="/mobile">
//           <img
//             src="https://cdn-icons-png.flaticon.com/128/1551/1551353.png"
//             alt="mobile"
//           />
//           <p>Mobile</p>
//         </Link>
//         <Link to="/laptop">
//           <img
//             src="https://cdn-icons-png.flaticon.com/128/99/99488.png"
//             alt="laptop"
//           />
//           <p>Laptop</p>
//         </Link>
//         <Link to="/toys">
//           <img
//             src="https://cdn-icons-png.flaticon.com/128/3171/3171959.png"
//             alt="Toys"
//           />
//           <p>Toys</p>
//         </Link>
//         <Link to="/cart">
//           <img
//             src="https://cdn-icons-png.flaticon.com/128/4290/4290722.png"
//             alt="Cart"
//           />
//           <p>Cart</p>
//         </Link>
//         <Link to="https://github.com/sivaprasath2004">
//           <img
//             src="https://cdn-icons-png.flaticon.com/128/4460/4460756.png"
//             alt="Cart"
//           />
//           <p>Support</p>
//         </Link>
//       </div>
//     </>
//   );
// };

// export default Navigate;
