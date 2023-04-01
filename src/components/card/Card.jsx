import React from "react";
import style from "./Card.module.css";

const Card = (children) => {
  return <section className={style.card}>
    {children}
  </section>;
};

export default Card;
