import React from "react";
import "./Protection.css";
import { data } from "./Data";

export default function Protection() {
  return (
    <div className="protection">
      <img
        src="https://a0.muscache.com/im/pictures/cecbf134-6674-410f-9345-603716048771.jpg?im_w=480&im_q=highq"
        alt=""
      />
      <div className="protection-header">
        Airbnb it with top‑to‑bottom protection
      </div>
      <div className="table">
        <div className="table-block">
          <div></div>
          <div className="tbl-airbnb">Airbnb</div>
          <div className="tbl-competitors">Competitors</div>
        </div>
        {data.map((item, index) => (
          <div className="table-block">
            <div className={item.desc ? "tbl-title" : "tbl-title2"}>
              {item.title}
            </div>
            <div className="tbl-airbnb">
              {item.airbnb ? (
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    display: "block",
                    fill: "none",
                    height: "24px",
                    width: "24px",
                    stroke: "#00A506",
                    strokeWidth: "5.333333333333333",
                    overflow: "visible",
                  }}
                  aria-label="Competitors included"
                  role="img"
                  focusable="false"
                >
                  <path fill="none" d="m4 16.5 8 8 16-16"></path>
                </svg>
              ) : (
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    display: "block",
                    fill: "none",
                    height: "24px",
                    width: "24px",
                    stroke: "#E12C32",
                    strokeWidth: "5.333333333333333",
                    overflow: "visible",
                  }}
                  aria-label="Competitors not included"
                  role="img"
                  focusable="false"
                >
                  <path d="m6 6 20 20"></path>
                  <path d="m26 6-20 20"></path>
                </svg>
              )}
            </div>
            <div className="tbl-competitors">
              {item.competitors ? (
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    display: "block",
                    fill: "none",
                    height: "24px",
                    width: "24px",
                    stroke: "#00A506",
                    strokeWidth: "5.333333333333333",
                    overflow: "visible",
                  }}
                  aria-label="Competitors included"
                  role="img"
                  focusable="false"
                >
                  <path fill="none" d="m4 16.5 8 8 16-16"></path>
                </svg>
              ) : (
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    display: "block",
                    fill: "none",
                    height: "24px",
                    width: "24px",
                    stroke: "#E12C32",
                    strokeWidth: "5.333333333333333",
                    overflow: "visible",
                  }}
                  aria-label="Competitors not included"
                  role="img"
                  focusable="false"
                >
                  <path d="m6 6 20 20"></path>
                  <path d="m26 6-20 20"></path>
                </svg>
              )}
            </div>
            {item.desc && <div className="tbl-desc">{item.desc}</div>}
          </div>
        ))}
      </div>
      <div className="btn-learn-more">Learn More</div>
    </div>
  );
}
