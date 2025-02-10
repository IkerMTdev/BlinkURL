import React from "react";
import "../styles/shortener.css";
const Shortener = () => {
  return (
    <body>
      <div className="flex justify-center" id="content">
        <div
          className=" flex flex-col sm:flex-row w-full"
          id="shortener-container"
        >
          <input className="p-4" id="url-input" placeholder="Enter URL"></input>
          <button className="" id="shorten-button">
            SHORTEN
          </button>
        </div>
      </div>
    </body>
  );
};

export default Shortener;
