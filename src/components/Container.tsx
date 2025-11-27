import React from "react";

interface TagChildren {
  children: React.ReactNode;
}

const Container = ({ children }: TagChildren) => {
  return <div className="container mx-auto z-0">{children}</div>;
};

export default Container;
