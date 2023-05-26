import React from "react";
import "./Footer.css";
import { data } from "./Data";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer1">
        {data.map((item, index) => (
          <div key={index} className="f1-block">
            <div className="block-head">{item.title}</div>
            {item.items.map((subitem, index) => (
              <div className="block-content">{subitem}</div>
            ))}
          </div>
        ))}
      </div>
      <div className="footer2">
        © 2023 Airbnb Clone Dummy Project by Armaan Agrawal
      </div>
    </div>
  );
}
