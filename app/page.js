"use client";

import React, { useState } from "react";
import style from "./page.module.css";

const page = () => {
  const [count, setCount] = useState(0);
  const doubleNumber = count*2;
  const MAX_NUMBER = 10;
  const handleClick = () => {
    if (count>=MAX_NUMBER) {
      return;
    }
    setCount(count + 1);
  };

  return (
    <div className={style.container}>
      <div>page</div>
      <div>page</div>
      <div>残りの数は{MAX_NUMBER - count}</div>
      <div>{doubleNumber}</div>
      <div>{count}</div>
      <button className={style.button} onClick={handleClick}>クリックする</button>
      <div>page</div>
    </div>
  );
};

export default page;