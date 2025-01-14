import React from "react";
import s from "./service.module.scss";
import { Container } from "src/ui/shared/container/container";

export const Service: React.FC = () => {
  return (
    <div className={s.wrap}>
      <Container>
        <Parent_Child />
        <Parent_Child />
        <Parent_Child />
      </Container>
    </div>
  );
};
const Parent_Child = () => {
  return (
    <div className={s.parent}>
      <Elem />
      <Elem />
      <Elem />
    </div>
  );
};
const Elem = () => {
  return (
    <div className={s.child}>
      <div>
        <img
          src="https://skyclinic.ua/wp-content/uploads/2024/02/terapevt-1.svg"
          alt=""
          className={s.img}
        />
        <div className={s.block_line}></div>
      </div>
    </div>
  );
};
