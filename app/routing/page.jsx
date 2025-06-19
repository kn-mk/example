"use client";

import React, { useState } from "react";
import styles from "./page.module.css";

const page = () => {
  const words = [
    "nya",
    "nyo",
    "pneumonoultramicroscopicsilicovolcanoconiosis",
    "Fxxking Nvidia, apple and MS. Linux is god OS",
    "zyugemuzyugemugokonosurikirekaizyarisuigyonosuigyomatuunraimatuhuraimatukunerutokoronisumutokoroyaburakozinoburakozipaipopaipopaiponosyuringansyuringannogurindaigurindainoponpokopinoponpokonanotyokyumeinotyosuke",
    "&nbsp;",
  ];
  const [input, setInput] = useState("");
  const [numberNow, setNumberNow] = useState(0);
  const [score, SetScore] = useState(0);

  console.log(words);
  console.log(words[numberNow]);

  const handleInput = (event) => {
    const value = event.target.value;
    setInput(value);

    if (value === words[numberNow]) {
      console.log("クリア！");
      setInput("");
      const newNumber = (numberNow + 1) % words.length;
      setNumberNow(newNumber);
      SetScore(score + 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.score}>{score}</div>
      <div>{words[numberNow]}</div>
      <div>page</div>
      <div>page</div>
      <div>{input}</div>
      <input
        type="text"
        onChange={handleInput}
        value={input}
        className={styles.input}
      />
    </div>
  );
};

export default page;
