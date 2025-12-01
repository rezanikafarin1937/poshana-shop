import React from "react";
import styles from './container.module.scss';

interface TagChildren {
  children: React.ReactNode;
}

const Container = ({ children }: TagChildren) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Container;
