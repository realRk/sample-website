import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Row, Col } from "antd";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import SliderDiv from "./slider";
import { isEqual } from "lodash";

const UserAuthenticationPage = () => {
  const [currentWidth, setCurrentWidth] = useState();
  const [dimensions, setDimensions] = useState({ top: 0, left: 0 });
  const elementRef = useRef();
  let currentWidthRef;
  currentWidthRef = useRef(currentWidth);
  // const optionalCallback = (entry) =>
  //   setDimensions({ top: entry.x, left: entry.left });
  // // useEffect(() => {}, []);
  // // const [width, height] = useResizeObserver(elementRef, optionalCallback);
  // // console.log(width, height);
  const checkWithPReviousWidth = (current, previous) => {
    console.log(current, previous);
    return isEqual(current, previous);
  };
  let resizeObserver = new ResizeObserver((data) => {
    if (currentWidth != data[0]?.contentRect?.width) {
      // console.log(checkWithPReviousWidth(window.screen.width,data[0]?.contentRect?.width))
      // console.log("hahahah",currentWidth,"hihihihih",data[0]?.contentRect?.width)
      setCurrentWidth(data[0]?.contentRect?.width);
      // window.location.reload()
    }
  });
  const resizeWatcher = () => {
    resizeObserver.observe(document.querySelector(".mainLayout"));
  };
  useEffect(() => {
    console.log(currentWidthRef.current, "hahahahah");
  }, [currentWidthRef]);
  useEffect(() => {
    resizeWatcher();
  }, []);
  useEffect(() => {
    if (currentWidth <= 914) {
      let signInDiv = document.querySelector(".sign-in-div-col");
      signInDiv.style.display = "none";
      let signUpDiv = document.querySelector(".sign-up-div-col");
      signUpDiv.style.display = "block";
      // signUpDiv.style.transition = " 3s ease-in";
    } else {
      let signInDiv = document.querySelector(".sign-in-div-col");
      signInDiv.style.display = "block";
      let signUpDiv = document.querySelector(".sign-up-div-col");
      signUpDiv.style.display = "block";
      // signUpDiv.style.transition = " 3s ease-in";
      let selectedDiv = document.querySelector(".floatingDiv");
      selectedDiv.style.marginLeft = `${determineLeftSideWidth()}`;
      // selectedDiv.style.transition = "margin-left .8s ease-in";
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
      // selectedDiv.style.marginLeft = "50%";
      selectedDiv.style.marginLeft = `${determineRightSideWidth()}`;
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

  const determineLeftSideWidth = () => {
    let screen_width = window.screen.width;
    if (screen_width <= 1024 && screen_width > !1024) {
      return "20px";
    } else if (screen_width <= 1336 && screen_width > 1024) {
      return "90px";
    } else if (screen_width <= 1440 && screen_width > 1336) {
      return "100px";
    } else if (screen_width <= 1600 && screen_width > 1440) {
      return "90px";
    } else {
      return "150px";
    }
  };
  const determineRightSideWidth = () => {
    let screen_width = window.screen.width;
    if (screen_width <= 1024 && screen_width > !1024) {
      return "55%";
    } else if (screen_width <= 1336 && screen_width > 1024) {
      return "51.5%";
    } else if (screen_width <= 1440 && screen_width > 1336) {
      return "48.3%";
    } else if (screen_width <= 1600 && screen_width > 1440) {
      return "47.4%";
    } else {
      return "50%";
    }
  };
  return (
    <div style={{ position: "relative", backgroundColor: "#f7f7f7" }}>
      <SliderDiv />
      <Row gutter={[8, 8]} ref={elementRef}>
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
