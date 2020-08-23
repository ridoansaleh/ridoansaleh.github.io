import React from "react";
import Header from "./header";
import Footer from "./footer";

function Layout(props) {
  return (
    <div className="page">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
