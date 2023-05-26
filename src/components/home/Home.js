import React from "react";
import Setup from "./setup/Setup";
import Protection from "./protection/Protection";
import Footer from "./footer/Footer";
import Question from "./questions/Question";

export default function Home() {
  return (
    <div className="home">
      <Setup />
      <Protection />
      <Question />
      <Footer />
    </div>
  );
}
