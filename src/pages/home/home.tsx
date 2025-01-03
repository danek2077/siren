import React from "react";
import s from "./home.module.scss";
import Presentation from "./ui/presentation/Presentation";
export const Home: React.FC = () => {
  return (
    <div>
      <Presentation />
      <div className={s.height}></div>
    </div>
  );
};
