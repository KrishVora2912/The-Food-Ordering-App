import { useState } from "react";
import logo from "../../logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
const Header = ({ setIsHomePressed }) => {
  const [loginInfo, setLoginInfo] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });
  return (
    <div
      className="header flex bg-blue-200 shadow-lg justify-between sticky top-0 left-0 z-10"
      id="header"
    >
      <div className="brandLogoContainer ml-1">
        <img
          className="brandLogo w-32 rounded-md"
          id="brandLogo"
          src={logo}
          alt="Brand Logo"
        />
      </div>
      <div className="navLinks">
        <ul className="flex my-5">
          <li className="mx-2 text-lg">
            Online Status: {onlineStatus ? "💚" : "💔"}
          </li>
          <li className="mx-2 text-lg" id="home">
            <Link to="/" onClick={() => {
              console.log("hi")
              setIsHomePressed((prev) => prev + 1)}}>
              Home
            </Link>
          </li>
          <li className="mx-2 text-lg">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-2 text-lg">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mx-2 text-lg">
            <Link to="/grocery">Grocery</Link>
          </li>
          {/* {loginInfo === "Logout" && <li className="mx-2 text-lg">Cart</li>} */}
          <li className="mx-2 text-lg">
            {" "}
            <Link to="/cart">🛒- {cartItems.length}</Link>
          </li>
          <button
            className="login-btn mx-2 px-2 text-lg border border-gray-500 rounded-md"
            onClick={() => {
              loginInfo === "Login"
                ? setLoginInfo("Logout")
                : setLoginInfo("Login");
            }}
          >
            {loginInfo}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
