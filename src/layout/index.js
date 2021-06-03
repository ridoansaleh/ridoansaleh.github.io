import Header from "./header";
import Footer from "./footer";
import BackToTop from "../components/BackToTop";

function Layout(props) {
  return (
    <>
      <div className="page">
        <Header />
        <main>{props.children}</main>
        <Footer />
      </div>
      <BackToTop />
    </>
  );
}

export default Layout;
