import React, { useState } from "react";

const TableData = () => {
  const itemsPerPage = 10;

  const [currentPage, setCurrentPage] = useState(1);
  const data = [];
  for (let i = 0; i < 100; i++) {
    const tempData = {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "₹1,278.23",
      transactionFees: "₹22",
    };
    data.push(tempData);
  }
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <table className="w-full table-fixed text-left border-collapse grow">
        <tr className="bg-[#F2F2F2] items-center">
          <th className="text-text py-2.5 px-3 font-medium bg-[#F2F2F2] rounded-l text-sm">
            Order ID
          </th>
          <th className=" py-2.5 px-3 bg-[#F2F2F2] flex 	gap-1	items-center">
            <p className="text-text text-sm font-medium">Order date</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <path
                d="M3.43025 6.23409L0.606918 2.3286C0.548707 2.24507 0.517907 2.15037 0.517581 2.05392C0.517255 1.95746 0.547415 1.86262 0.60506 1.77882C0.662705 1.69502 0.745826 1.62519 0.846154 1.57627C0.946481 1.52736 1.06052 1.50106 1.17692 1.5H6.82358C6.93998 1.50106 7.05402 1.52736 7.15435 1.57627C7.25468 1.62519 7.3378 1.69502 7.39544 1.77882C7.45309 1.86262 7.48325 1.95746 7.48292 2.05392C7.4826 2.15037 7.45179 2.24507 7.39358 2.3286L4.57025 6.23409C4.51083 6.31526 4.42716 6.38238 4.32732 6.42895C4.22747 6.47553 4.11483 6.5 4.00025 6.5C3.88567 6.5 3.77303 6.47553 3.67319 6.42895C3.57334 6.38238 3.48967 6.31526 3.43025 6.23409Z"
                fill="#4D4D4D"
              />
            </svg>
          </th>
          <th className="text-text py-2.5 px-3 font-medium bg-[#F2F2F2] text-sm">
            Order amount
          </th>
          <th className="flex justify-end	gap-1	items-center py-2.5 px-3  bg-[#F2F2F2] rounded-r ">
            <p className="text-sm text-right font-medium">Transaction fees</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <g clip-path="url(#clip0_0_5817)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.0002 1.63353C4.03627 1.63353 1.63353 4.03627 1.63353 7.0002C1.63353 9.96412 4.03627 12.3669 7.0002 12.3669C9.96412 12.3669 12.3669 9.96412 12.3669 7.0002C12.3669 4.03627 9.96412 1.63353 7.0002 1.63353ZM0.700195 7.0002C0.700195 3.5208 3.5208 0.700195 7.0002 0.700195C10.4796 0.700195 13.3002 3.5208 13.3002 7.0002C13.3002 10.4796 10.4796 13.3002 7.0002 13.3002C3.5208 13.3002 0.700195 10.4796 0.700195 7.0002Z"
                  fill="#4D4D4D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.00019 6.62382C7.25793 6.62382 7.46686 6.83276 7.46686 7.09049L7.46687 9.44604C7.46687 9.70377 7.25794 9.9127 7.00021 9.9127C6.74247 9.9127 6.53354 9.70377 6.53354 9.44604L6.53353 7.09049C6.53353 6.83276 6.74246 6.62382 7.00019 6.62382Z"
                  fill="#4D4D4D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.52801 4.75852C7.52801 5.05002 7.29171 5.28633 7.00021 5.28633C6.70871 5.28633 6.4724 5.05002 6.4724 4.75852C6.4724 4.46702 6.70871 4.23072 7.00021 4.23072C7.29171 4.23072 7.52801 4.46702 7.52801 4.75852Z"
                  fill="#4D4D4D"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_5817">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </th>
        </tr>
        {currentItems.map((item, index) => (
          <tr key={index} className="">
            <td className="text-[#146EB4] px-0 text-sm leading-5 font-medium ">
              <p className="border-b border-background-light py-3.5 ml-3">
                {item.orderId}
              </p>
            </td>
            <td className="p-0 text-sm leading-5 ">
              <section className="border-b px-3 py-3.5 border-background-light flex items-center space-x-1.5">
                <p className="text-text"> {item.orderDate}</p>
              </section>
            </td>
            <td className="text-text p-0 text-sm leading-5">
              <p className="border-b border-background-light py-3.5 px-3">
                {item.orderAmount}
              </p>
            </td>

            <td className="text-text p-0 text-sm leading-5 text-right">
              <p className="border-b border-background-light py-3.5 mr-3">
                {" "}
                {item.transactionFees}
              </p>
            </td>
          </tr>
        ))}
      </table>
      <div className="mt-8">
        <div className="flex justify-center justify-center gap-6 cursor-auto	">
          <div
            onClick={() => {
              if (currentPage > 1) paginate(currentPage - 1);
            }}
            className="border-radius-4 rounded-md border border-solid border-Black-85 bg-Black-100 flex justify-center items-center gap-[6px] pr-[12px] pl-[6px] py-[6px] "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="fill-current"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.7803 3.96967C11.4874 3.67678 11.0126 3.67678 10.7197 3.96967L6.21967 8.46967C6.07902 8.61032 6 8.80109 6 9C6 9.19891 6.07902 9.38968 6.21967 9.53033L10.7197 14.0303C11.0126 14.3232 11.4874 14.3232 11.7803 14.0303C12.0732 13.7374 12.0732 13.2626 11.7803 12.9697L7.81066 9L11.7803 5.03033C12.0732 4.73744 12.0732 4.26256 11.7803 3.96967Z"
              />
            </svg>
            <span className="text-Black-100 cursor-default">Previous</span>
          </div>
          <ul className="flex list-none">
            {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
              (_, index) => (
                <li key={index}>
                  <button
                    className={`px-3 py-1 my-1 mx-1 rounded ${
                      currentPage === index + 1 ? "bg-[#146EB4] text-white" : ""
                    }`}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              )
            )}
          </ul>
          <div
            onClick={() => {
              if (currentPage < Math.ceil(data.length / itemsPerPage))
                paginate(currentPage + 1);
            }}
            className="border-radius-4 rounded-md border border-solid border-Black-85 bg-Black-100 flex justify-center items-center gap-[6px] pr-[12px] pl-[6px] py-[6px] "
          >
            <span className="text-Black-100 cursor-default">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.21967 3.96967C6.51256 3.67678 6.98744 3.67678 7.28033 3.96967L11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033L7.28033 14.0303C6.98744 14.3232 6.51256 14.3232 6.21967 14.0303C5.92678 13.7374 5.92678 13.2626 6.21967 12.9697L10.1893 9L6.21967 5.03033C5.92678 4.73744 5.92678 4.26256 6.21967 3.96967Z"
                fill="#4D4D4D"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableData;
