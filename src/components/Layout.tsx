import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Container from "./container/Container";

interface ILayoutChildren {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutChildren) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
