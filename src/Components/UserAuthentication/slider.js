import React from "react";
import "./slider.css";
const SliderDiv = () => {
  return (
    <div className="floatingDiv">
      <div style={{ position: "relative" }}>
        <div className="circle"></div>
        <div className="rectangle"></div>
        <div className="triangle"></div>
        <div className="text-container">
          <div className="text-container-flex-column">
            <span className="company-name">SeedShield</span>
            <span className="company-name-second-line">Lorem ipdum dolor.</span>
            <p className="company-name-third-line-para">
              Great work, prompt service and a fair price. Communication was
              outstanding keeping us informed thru the process from start to
              finish. Tony will go above and beyond to make sure the job is done
              the right way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SliderDiv;
