import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Container from "./container/Container";
import MobileBottomNav from "./MobileButtonNav/MobileBottomNav";

interface ILayoutChildren {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutChildren) => {
  return (
    <>
      <div className="mb-14"></div>
      <Navbar />
      <Container>{children}</Container>
      <MobileBottomNav />
      <Footer />
    </>
  );
};

export default Layout;
