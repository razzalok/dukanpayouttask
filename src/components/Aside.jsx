import React from "react";
import { useState } from "react";
import AsideItem from "./AsideItem";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/Image.png";
import Down from "../assets/images/Chevron Down.png";
import Home from "../assets/images/Home.png";
import Order from "../assets/images/order.png";
import Wallet from "../assets/images/wallet.png";
const Aside = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  return (
    <div>
      <div className="aside toggled">
        <div className="aside-head">
          <div className="brand">
            <div>
              <div
                onClick={() => {
                  navigate("/");
                }}
                className="brand-logo"
              >
                <img
                  src={logo}
                  alt="img"
                  className="img-fluid brand-logo-img"
                />
                <div className="brand-text">
                  <p className="brand-logo-text">Nishyan</p>
                  <div className="brand-logo-text-2">Visit store</div>
                </div>
                <img className="brand-arrow" src={Down} alt="Arrow" />
              </div>
            </div>
          </div>
        </div>
        <div className="aside-body">
          <AsideItem
            icon={Home}
            name="Home"
            //   active={activeItem === "Dashboard"}
            //   onClick={() => handleItemClick("Dashboard")}
            children={false}
            isActive={true}
          />
          <AsideItem
            icon={Order}
            name="Order"
            // active={activeItem === "Bill_Invoice"}
            // onClick={() => handleItemClick("Bill_Invoice")}
            onClick={() => {}}
            children={false}
            isActive={false}
          />
        </div>
        <div className="aside-footer">
          <div>
            <img
              src={Wallet}
              alt="img"
              className="img-fluid aside-footer-img"
            />
          </div>
          <div className="">
            <span className="aside-text">Available credits</span>
            <br />
            <span className="">222.10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aside;
