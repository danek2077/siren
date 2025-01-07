import React from "react";
import s from "./serviceFirst.module.scss";
export const ServiceFirst = () => {
  return (
    <div className={s.wrap}>
      <ParentElem />
      <ParentElem />
    </div>
  );
};
const ParentElem = () => {
  return (
    <div className={s.parent}>
      <ChildElem />
      <ChildElem />
      <ChildElem />
    </div>
  );
};
const ChildElem = () => {
  return (
    <a
      className={s.child}
      href="https://dentalcare.dp.ua/clinic/132"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="https://skyclinic.ua/wp-content/uploads/2024/02/terapevt-1.svg"
        alt=""
        className={s.img}
      />
      <h1 className={s.h1txt}>
        Терапевтична <br />
        стоматологія
      </h1>
    </a>
  );
};
