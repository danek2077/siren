import React from "react";
import s from "./serviceFirst.module.scss";
import { Link } from "react-router-dom";
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
    <Link className={s.child} to={"/service"}>
      <img
        src="https://skyclinic.ua/wp-content/uploads/2024/02/terapevt-1.svg"
        alt=""
        className={s.img}
      />
      <h1 className={s.h1txt}>
        Терапевтична <br />
        стоматологія
      </h1>
    </Link>
  );
};
