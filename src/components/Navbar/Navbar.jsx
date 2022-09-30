import React, { useEffect, useState } from "react";
import Logo from "../../assets/HollywrldLogo.png";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ logout, userInfo }) => {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  const [hexColor, setHexColor] = useState("#");
  useEffect(() => {
    function iconColor() {
      for (let i = 0; i < 6; i++) {
        setHexColor((prev) => prev + hex[Math.floor(Math.random() * hex.length)]);
      }
    }
    iconColor();
  }, []);

  return (
    <nav>
      <Link to={"/"}>
        <img src={Logo} className="nav__logo--img" />
      </Link>
      <div className="nav__pages--icons">
        <Link to={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="current"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="#DAA520"
            className="w-6 h-6 nav__pages--icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </Link>
        <Link to={"/explore"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="current"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="#DAA520"
            className="w-6 h-6 nav__pages--icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </Link>
        <Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="current"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="#DAA520"
            className="w-6 h-6 nav__pages--icon cursor--not-allowed"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </Link>
      </div>
      <div className="nav__buttons">
        <Link to={"/"}>
          <div
            className={"nav__logout--button"}
            onClick={() => {
              logout();
            }}
          >
            Log Out
          </div>
        </Link>

        <div
          className="nav__user--icon cursor--not-allowed"
          style={{
            backgroundColor: hexColor.slice(0, 7),
          }}
        >
          {userInfo?.email?.[0].toUpperCase()}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
