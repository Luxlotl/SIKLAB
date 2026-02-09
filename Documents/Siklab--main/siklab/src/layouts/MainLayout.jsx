import Header from "../components/Header";
import Footer from "../components/Footer";
import "../layouts/layout.css";

const MainLayout = ({ children }) => {
  return (
    <>
      {/* HEADER SHOULD BE OUTSIDE THE SCROLLING WRAPPER */}
      <Header />

      <div className="page-background">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
