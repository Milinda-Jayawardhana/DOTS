import React from "react";
import { FlipWords } from "./FlipWords";


export function FlipWordsDemo() {
  const words = ["quality", "price", "materials", "designs"];

  return (
    (<div className="">
      <div
        className="text-[26px] font-semibold text-neutral-600 dark:text-neutral-400">
        Best
        <FlipWords words={words} /> <br />
        Campus Tshirts
      </div>
    </div>)
  );
}
