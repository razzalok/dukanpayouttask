import React from "react";
import { useState } from "react";
import AsideItem from "./AsideItem";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/asideimg/Image.png";
import Down from "../assets/images/asideimg/Chevron Down.png";
import Home from "../assets/images/asideimg/Home.png";
import Order from "../assets/images/asideimg/order.png";
import Products from "../assets/images/asideimg/Products.png";
import Delivery from "../assets/images/asideimg/Delivery.png";
import Marketing from "../assets/images/asideimg/Marketing.png";
import Analytics from "../assets/images/asideimg/Analytics.png";
import Payouts from "../assets/images/asideimg/Payouts.png";
import Tools from "../assets/images/asideimg/Tools.png";
import Discounts from "../assets/images/asideimg/Discounts.png";
import Audience from "../assets/images/asideimg/Audience.png";
import Affiliates from "../assets/images/asideimg/Affillates.png";
import Vendors from "../assets/images/asideimg/Vendors.png";
import Appearance from "../assets/images/asideimg/Appearance.png";
import Plugins from "../assets/images/asideimg/Plugins.png";
import Wallet from "../assets/images/asideimg/wallet.png";
const Aside = () => {
  const [open, setOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("Payouts");
  const navigate = useNavigate();
  const asideItem = [
    {
      name: "Home",
      img: Home,
    },
    {
      name: "Order",
      img: Order,
    },
    {
      name: "Products",
      img: Products,
    },
    {
      name: "Delivery",
      img: Delivery,
    },
    {
      name: "Marketing",
      img: Marketing,
    },
    {
      name: "Analytics",
      img: Analytics,
    },
    {
      name: "Payouts",
      img: Payouts,
    },
    {
      name: "Tools",
      img: Tools,
    },
    {
      name: "Discounts",
      img: Discounts,
    },
    {
      name: "Audience",
      img: Audience,
    },
    {
      name: "Affiliates",
      img: Affiliates,
    },
    {
      name: "Vendors",
      img: Vendors,
    },
    {
      name: "Appearance",
      img: Appearance,
    },
    {
      name: "Plugins",
      img: Plugins,
    },
  ];
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
          {asideItem.map((item) => (
            <AsideItem
              icon={item.img}
              name={item.name}
              active={activeItem === item.name}
              //   onClick={() => handleItemClick("Dashboard")}
              children={false}
              isActive={true}
            />
          ))}
        </div>
        <div className="aside-footer">
          <div className="wallet-box">
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
