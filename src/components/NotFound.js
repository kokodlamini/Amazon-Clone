import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not_found">
      <Link to="/Home">
        <div>
          <img
            className="img_top"
            src="https://images-na.ssl-images-amazon.com/images/G/01/error/en_US/500_503._TTD_.png"
            alt=""
          ></img>
        </div>
        <div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/error/en_US/153._TTD_.jpg"
            alt=""
          ></img>
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
