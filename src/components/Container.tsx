import React from "react";

interface TagChildren {
  children: React.ReactNode;
}

const Container = ({ children }: TagChildren) => {
  return <div className="container mx-auto">{children}</div>;
};

export default Container;
