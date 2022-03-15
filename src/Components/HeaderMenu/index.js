import React, { useState, useEffect } from "react";
import { Menu, Button, Row, Col } from "antd";
import "./index.css";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const HeaderMenu = () => {
  const [expanded, setExpand] = useState(false);
  const changeMenuSlidebarStyle = () => {
    if (expanded) {
      let selectedDiv = document.querySelector(".hamburger-menu-slider");
      selectedDiv.style.width = "0%";
      selectedDiv.style.transition = "width .3s ease-in";
      setExpand(false);
    } else {
      let selectedDiv = document.querySelector(".hamburger-menu-slider");
      selectedDiv.style.width = "100%";
      selectedDiv.style.transition = "width .3s ease-in";
      setExpand(true);

      let selectedButtonHam = document.querySelector(".hamburger-menu-col");
      selectedButtonHam.style.display = "none !important";
      let selectedButtonHamMenu = document.querySelector(".hamburger-menu");
      selectedButtonHamMenu.style.display = "none !important";
    }
  };
  let screenWidth = window.screen.width;
  // useEffect(() => {
  //   alert(screenWidth)
  // }, [screenWidth]);
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <ul className="menu-bar-style">
          <l1 className="seed-logo-li">
            <a href="#">
              <img
                className="seed-logo"
                alt=""
                src={require("../../assets/seed-log.png")}
              />
            </a>
          </l1>
          <l1 className="header-list-default-style header-menu-option about-us">
            <a href="#"> About Us</a>
          </l1>
          <l1 className="header-list-default-style header-menu-option about-us">
            <a href="#">Services</a>
          </l1>
          <l1 className="header-list-default-style header-menu-option about-us">
            <a href="#">Pricing</a>
          </l1>
          <l1 className="header-list-default-style header-menu-option about-us">
            <a href="#">Contact Us</a>
          </l1>
          <l1 className="header-list-default-style header-menu-option about-us">
            <a href="#">FAQ</a>
          </l1>
          <l1>
            <Button
              className="header-button-style"
              onClick={() => navigate("/booking")}
            >
              <span className="book-now-button-text">BOOK NOW</span>
            </Button>
          </l1>
          <l1 className="hamburger-menu-col">
              <MenuOutlined
                className="hamburger-menu"
                onClick={changeMenuSlidebarStyle}
              />
          </l1>
        </ul>
      </nav>
      <div className="hamburger-menu-slider">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="hamburger-menu-items first">About Us</div>
          <div className="hamburger-menu-items">Services</div>
          <div className="hamburger-menu-items">Pricing</div>
          <div className="hamburger-menu-items">Contact Us</div>
          <div className="hamburger-menu-items">FAQ</div>
          <div>
            <Button
              className="hamburger-button-style"
              onClick={() => navigate("/booking")}
            >
              <span className="book-now-button-text">BOOK NOW</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderMenu;
