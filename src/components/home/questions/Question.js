import React, { useState } from "react";
import "./Question.css";
import { data } from "./Data";

export default function Question() {
  const [quesIndex, setQuesIndex] = useState();

  return (
    <div className="question-component">
      <div className="question">
        <div className="left">
          Your questions,
          <br />
          answered
        </div>
        <div className="right">
          {data.map((item, index) => (
            <div className="ques-box">
              <div
                className="ques-row"
                onClick={() => {
                  setQuesIndex(quesIndex === index ? "" : index);
                }}
              >
                <div className="ques">{item.ques}</div>
                <div className="arrow">
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                      transform:
                        quesIndex === index
                          ? "rotateZ(180deg)"
                          : "rotate(0deg)",
                    }}
                  >
                    <g fill="none">
                      <path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div
                className="ans"
                style={{
                  maxHeight: quesIndex === index ? "400px" : "0",
                }}
              >
                {item.ans}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="template-image">
        <img
          src="https://a0.muscache.com/im/pictures/c19751e5-cd4f-41d0-898f-2580b60cae08.jpg?im_w=1200&im_q=highq"
          alt=""
        />
        <div className="img-related-content">
          <div className="img-head">Still have questions?</div>
          <div className="img-subhead">
            Get answers from an experienced Superhost near you.
          </div>
          <div className="img-btn">Match with a Superhost</div>
        </div>
      </div>
    </div>
  );
}
