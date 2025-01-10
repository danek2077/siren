import React from "react";
import s from "./header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons/faTooth";
import { Link } from "react-router-dom";
import { useStoreScroll } from "src/store/store";
export const Header: React.FC = () => {
  const scroller = useStoreScroll((state) => state.scrollElem);
  return (
    <header className={`${s.headertag}`}>
      <div className="container">
        <div className={s.flexbetween}>
          <div className={s.flex}>
            <Link to={"/"}>
              <FontAwesomeIcon icon={faTooth} size={"3x"} className={s.tooth} />
            </Link>
            <div className={s.links}>
              <Link to={"/"}>Головна</Link>
              <Link to={"/service"}>Сервіс</Link>
              <Link to={"/about"}>Про нас</Link>
              <Link to={"/about"}>Акції</Link>
              <Link to={"/about"}>Відгуки</Link>
              <Link to={"/about"}>Соц мережи</Link>
            </div>
          </div>
          <div className={s.wrapbtn}>
            <button onClick={() => scroller()} className={s.signbtn}>
              ЗВ'ЯЗАТИСЯ З НАМИ
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
