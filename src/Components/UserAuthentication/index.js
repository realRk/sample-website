import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import SliderDiv from "./slider";

const UserAuthenticationPage = () => {
  const [currentWidth, setCurrentWidth] = useState();
  let resizeObserver = new ResizeObserver((data) => {
    if (currentWidth != data[0]?.contentRect?.width) {
      console.log("hahahah",currentWidth,"hihihihih",data[0]?.contentRect?.width)
      setCurrentWidth(data[0]?.contentRect?.width);
      // window.location.reload()
    }
  });
  const resizeWatcher = () => {
    resizeObserver.observe(document.querySelector(".mainLayout"));
  };
  useEffect(() => {
    resizeWatcher();
  }, []);
  useEffect(() => {
    if (currentWidth <= 914) {
      let signInDiv = document.querySelector(".sign-in-div-col");
      signInDiv.style.display = "none";
      let signUpDiv = document.querySelector(".sign-up-div-col");
      signUpDiv.style.display = "block";
      signUpDiv.style.transition = " 3s ease-in";
    } else {
      let signInDiv = document.querySelector(".sign-in-div-col");
      signInDiv.style.display = "block";
      let signUpDiv = document.querySelector(".sign-up-div-col");
      signUpDiv.style.display = "block";
      signUpDiv.style.transition = " 3s ease-in";
    }
  }, [currentWidth]);


const moveDivToRight = (screenWidth) => {
  if (screenWidth <= 914) {
    let signInDiv = document.querySelector(".sign-in-div-col");
    signInDiv.style.display = "none";
    let signUpDiv = document.querySelector(".sign-up-div-col");
    signUpDiv.style.display = "block";
    signUpDiv.style.transition = " 3s ease-in";
  } else {
    let signInDiv = document.querySelector(".sign-in-div-col");
    signInDiv.style.display = "block";
    let signUpDiv = document.querySelector(".sign-up-div-col");
    signUpDiv.style.display = "block";
    let selectedDiv = document.querySelector(".floatingDiv");
    selectedDiv.style.marginLeft = "50%";
    selectedDiv.style.transition = "margin-left .8s ease-in";
  }
};

const moveDivToLeft = (screenWidth) => {
  if (screenWidth <= 914) {
    let signUpDiv = document.querySelector(".sign-up-div-col");
    signUpDiv.style.display = "none";
    let signInDiv = document.querySelector(".sign-in-div-col");
    signInDiv.style.display = "block";
  } else {
    let signUpDiv = document.querySelector(".sign-up-div-col");
    signUpDiv.style.display = "block";
    let signInDiv = document.querySelector(".sign-in-div-col");
    signInDiv.style.display = "block";
    let selectedDiv = document.querySelector(".floatingDiv");
    selectedDiv.style.marginLeft = `${determineLeftSideWidth()}`;
    selectedDiv.style.transition = "margin-left .8s ease-in";
  }
};

const determineLeftSideWidth=()=>{
  let screen_width = window.screen.width;
  console.log(currentWidth)
  if(currentWidth<=1024 && currentWidth >!1024){
    return '20px'
  }
  else if(currentWidth<=1336 && currentWidth >1024){
    return '90px'
  }
  else if(currentWidth<=1440 && currentWidth >1336){
    return '100px'
  }
  else if(currentWidth<=1600 && currentWidth >1440){
    return '90px'
  }
}
  return (
    <div style={{ position: "relative", backgroundColor: "#f7f7f7" }}>
      <SliderDiv/>
      {/* <div style={{ display: "flex", height: "90vh" }}>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <SignUp onModeChange={moveDivToLeft} />
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <SignIn onModeChange={moveDivToRight} />
        </div>
      </div> */}
      <Row gutter={[8, 8]}>
        <Col lg={12} sm={24} xs={24} className="sign-up-div-col">
          <SignUp onModeChange={moveDivToLeft} />
        </Col>
        <Col
          lg={12}
          xs={{ push: 1 }}
          sm={{ push: 0 }}
          className="sign-in-div-col"
        >
          <SignIn onModeChange={moveDivToRight} />
        </Col>
      </Row>
    </div>
  );
};
export default UserAuthenticationPage;
