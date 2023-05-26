import React from "react";
import "./Setup.css";

export default function Setup() {
  const data = [
    {
      title: "One-to-one guidance from a Superhost",
      desc: "We’ll match you with a Superhost in your area, who’ll guide you from your first question to your first guest – by phone, video call or chat.",
    },
    {
      title: "An experienced guest for your first booking",
      desc: "For your first booking, you can choose to welcome an experienced guest who has at least three stays and a good track record on Airbnb.",
    },
    {
      title: "Specialised support from Airbnb",
      desc: "New Hosts get one-tap access to specially trained Community Support agents who can help with everything from account issues to billing support.",
    },
  ];

  return (
    <div className="setup">
      <div className="setup-header">Airbnb it easily with Airbnb Setup</div>
      <div className="setup-img">
        <img
          src="https://a0.muscache.com/im/pictures/65214d06-ffb4-4b70-93c0-01d368e76649.jpg?im_w=2560&im_q=highq"
          alt=""
        />
      </div>
      <div className="setup-content">
        {data.map((item, index) => (
          <div key={index} className="setup-content-block">
            <div className="scb-title">{item.title}</div>
            <div className="scb-desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
