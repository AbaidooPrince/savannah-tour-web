import React from "react";
import style from "./ThreeColumnSection.module.css";

const ThreeColumnSection = ({children}) => {
  return (
    <section className={style.col3Section}>
      {children}
    </section>
  );
};

export default ThreeColumnSection;
