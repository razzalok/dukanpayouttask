import React from "react";

const ListItem = ({ title, amount, orders }) => {
  return (
    <li
      className="rounded-lg grow flex flex-col space-y-4 p-5 bg-white"
      style={{ boxShadow: "rgba(26, 24, 30, 0.04) 0px 2px 6px 0px" }}
    >
      <header className="flex space-x-2 items-center text-text">
        <h1 className="text-[16px]">{title}</h1>
      </header>
      <main className="flex items-center">
        <h1 className="text-dark text-left text-[32px]  font-medium grow">
          {(amount && amount) || (orders && orders)}
        </h1>
      </main>
    </li>
  );
};

export default ListItem;
