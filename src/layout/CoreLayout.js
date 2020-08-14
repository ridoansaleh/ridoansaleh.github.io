import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

function CoreLayout(props) {
  return (
    <div className="page">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default CoreLayout;
