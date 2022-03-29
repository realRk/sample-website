import React, { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./admin.css";
import * as config from "../../Utils/config";
import { useAdminUiContext } from "./adminUIContext";
// import Products from "./Components/Products/products";
const AdminRouter = () => {
  useEffect(() => {
    let element = document.querySelector(" .main-layout-header-bar");
    element.style.display = "none";
  }, []);
  const { getBrands, state, getCrops, getProducts, getStates } =
    useAdminUiContext();
  useEffect(() => {
    getBrands();
    getProducts();
    getCrops();
    getStates();
  }, []);
  // useEffect(() => {
  //   alert(window.location.pathname);
  // }, [window.location.pathname]);
  const [defaultSelected, setDefaultSelected] = useState("product");
  useEffect(() => {
    let cropElement = document.querySelector("#crop");
    let prodElement = document.querySelector("#product");
    let userElement = document.querySelector("#user");
    let regionElement = document.querySelector("#region");

    switch (defaultSelected) {
      case "crop":
        cropElement.style.background = "#f1f1f1 0% 0% no-repeat padding-box";
        cropElement.style.transition = "1s ease-in-out";

        prodElement.style.background = "none";
        prodElement.style.transition = "1s ease-in-out";

        userElement.style.background = "none";
        userElement.style.transition = "1s ease-in-out";

        regionElement.style.background = "none";
        regionElement.style.transition = "1s ease-in-out";

        break;
      case "product":
        cropElement.style.background = "none";
        cropElement.style.transition = "1s ease-in-out";

        prodElement.style.background = "#f1f1f1 0% 0% no-repeat padding-box";
        prodElement.style.transition = "1s ease-in-out";

        userElement.style.background = "none";
        userElement.style.transition = "1s ease-in-out";

        regionElement.style.background = "none";
        regionElement.style.transition = "1s ease-in-out";

        break;
      case "region":
        cropElement.style.background = "none";
        cropElement.style.transition = "1s ease-in-out";

        prodElement.style.background = "none";
        prodElement.style.transition = "1s ease-in-out";

        userElement.style.background = "none";
        userElement.style.transition = "1s ease-in-out";

        regionElement.style.background = "#f1f1f1 0% 0% no-repeat padding-box";
        regionElement.style.transition = "1s ease-in-out";

        break;
      case "user":
        cropElement.style.background = "none";
        cropElement.style.transition = "1s ease-in-out";

        prodElement.style.background = "none";
        prodElement.style.transition = "1s ease-in-out";

        userElement.style.background = "#f1f1f1 0% 0% no-repeat padding-box";
        userElement.style.transition = "1s ease-in-out";

        regionElement.style.background = "none";
        regionElement.style.transition = "1s ease-in-out";

        break;
      default:
        break;
    }
  }, [defaultSelected]);
  return (
    <div className="admin-router-page">
      <div className="admin-side-panel">
        <ul>
          <li className="admin-side-panel-items">
            <img
              alt="seed-shield-logo"
              src={require("../../assets/seed-log.png")}
              style={{ width: "135px" }}
            />
          </li>
        </ul>
        <div className="admin-side-options">
          <ul>
            <NavLink
              // activeClassName='admin-side-options-individual-selected'
              to={"/admin/products"}
              // onClick={getProducts}
            >
              <li onClick={() => setDefaultSelected("product")} id="product">
                <div className="admin-side-options-individual">
                  <img
                    className="admin-side-options-product-logo"
                    alt="product"
                    src={require("../../assets/products.png")}
                  />
                  <span className="admin-side-options-product-label">
                    Products
                  </span>
                </div>
              </li>
            </NavLink>
            <NavLink to={"/admin/crop"}>
              <li onClick={() => setDefaultSelected("crop")} id="crop">
                <div className="admin-side-options-individual">
                  <img
                    className="admin-side-options-crop-logo"
                    alt="crop"
                    src={require("../../assets/crop.png")}
                  />
                  <span className="admin-side-options-crop-label">Crops</span>
                </div>
              </li>
            </NavLink>
            <NavLink to={"/admin/region"}>
              <li onClick={() => setDefaultSelected("region")} id="region">
                <div className="admin-side-options-individual">
                  <img
                    className="admin-side-options-region-logo"
                    alt="region"
                    src={require("../../assets/region.png")}
                  />
                  <span className="admin-side-options-region-label">
                    Regions
                  </span>
                </div>
              </li>
            </NavLink>
            <NavLink to={"/admin/user"}>
              <li onClick={() => setDefaultSelected("user")} id="user">
                <div className="admin-side-options-individual">
                  <img
                    className="admin-side-options-user-logo"
                    alt="users"
                    src={require("../../assets/user-logo.png")}
                  />
                  <span className="admin-side-options-user-label">Users</span>
                </div>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="routing-page">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminRouter;
