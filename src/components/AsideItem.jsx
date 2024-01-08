import React, { useEffect, useState } from "react";

const AsideItem = ({ icon, name, active, children, onClick, isActive }) => {
  return (
    <div>
      <div className="navigation navigation-dropdown cursor-custom ">
        <div
          className={
            isActive ? "navigation-item " : "navigation-item opacity-25"
          }
        >
          <div
            className={`navigation-link navigation-link-pill collapsed ${
              active ? "active " : ""
            }`}
            aria-expanded="true"
            onClick={() => {}}
          >
            <span className="navigation-link-info">
              <span className="navigation-link-icon">
                <img className="navigation-icon" src={icon} alt="icon" />
              </span>
              <span className="navigation-text text">{name}</span>
            </span>
            {/* {children && (
              <FontAwesomeIcon icon={faSortDesc} className="faSortDescIcon" />
            )} */}
          </div>
          {children && (
            <div className="cstm-dropdown">
              <ul
                id="collapseGateIn"
                className="navigation drop-list collapse show"
                data-parent="#aside-accordion"
              >
                <li className="navigation-item">
                  <a
                    href="order-all.html"
                    className="navigation-link navigation-link-pill"
                  >
                    <span className="navigation-link-info">
                      <span className="navigation-text">All Orders</span>
                    </span>
                  </a>
                </li>
                <li className="navigation-item">
                  <a
                    href="pending-order.html"
                    className="navigation-link navigation-link-pill"
                  >
                    <span className="navigation-link-info">
                      <span className="navigation-text">Pending</span>
                    </span>
                  </a>
                </li>
                <li className="navigation-item">
                  <a
                    href="confirmed-order.html"
                    className="navigation-link navigation-link-pill"
                  >
                    <span className="navigation-link-info">
                      <span className="navigation-text">Confirmed</span>
                    </span>
                  </a>
                </li>
                <li className="navigation-item">
                  <a
                    href="delivered-order.html"
                    className="navigation-link navigation-link-pill"
                  >
                    <span className="navigation-link-info">
                      <span className="navigation-text">Delivered</span>
                    </span>
                  </a>
                </li>
                <li className="navigation-item">
                  <a
                    href="cancelled-order.html"
                    className="navigation-link navigation-link-pill"
                  >
                    <span className="navigation-link-info">
                      <span className="navigation-text">Cancelled</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AsideItem;
