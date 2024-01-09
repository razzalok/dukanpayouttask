import React from "react";
import ListItem from "../components/ListItem";
import DashboardHeading from "../components/DashboardHeading";
import OrderHistory from "../components/OrderHistory";

const Dashboard = () => {
  return (
    <div className=" p-10  ">
      <DashboardHeading />
      <ul className="flex items-start space-x-5 mb-[24px]">
        <ListItem title="Online orders" orders={231} />
        <ListItem title="Amount Received" amount="₹23,92,312.19" />
      </ul>
      <p class="text-text-dark text-left text-xl font-medium mb-[12px]">
        Transactions | This Month
      </p>
      <OrderHistory />
    </div>
  );
};

export default Dashboard;
