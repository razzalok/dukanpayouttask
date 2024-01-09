import React, { useEffect, useState } from "react";

const AsideItem = ({ icon, name, active, onClick, isActive }) => {
  return (
    <div>
      <div className="navigation navigation-dropdown ">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsideItem;
