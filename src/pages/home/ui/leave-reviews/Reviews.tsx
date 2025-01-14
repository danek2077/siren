import React from "react";
import { Container } from "src/ui/shared/container/container";
import square_img from "src/img/square.jpg";
import s from "./Reviews.module.scss";
const Reviews = () => {
  return (
    <div className={s.wrap}>
      <div className={s.blue_block}></div>
      <Container>
        <div className={s.parent}>
          <div>
            <img src={square_img} alt="" className={s.img} />
          </div>
          <div className={s.left_parent}>
            <h1 className={s.h1txt}>НАШИ ОТЗЫВЫ</h1>
            <div className={s.blue_line}></div>
            <div className={s.divs_texts_parent}>
              <div className={s.mb1}>
                На майбутнє, просимо наших клієнтів залишати відгуки, оскільки
                ваш зворотній зв'язок дуже важливий для нас
              </div>
              <div className={s.btn_parent}>
                <a
                  className={s.btn}
                  href="https://www.google.fr/maps/place/Стоматологія+Сирена/@48.472257,34.9885361,21z/data=!4m15!1m8!3m7!1s0x40dbe3c8e70978d5:0x9b9687bccea33675!2z0KHRgtC-0LzQsNGC0L7Qu9C-0LPRltGPINCh0LjRgNC10L3QsA!8m2!3d48.4723201!4d34.988697!10e1!16s%2Fg%2F11l71fjflq!3m5!1s0x40dbe3c8e70978d5:0x9b9687bccea33675!8m2!3d48.4723201!4d34.988697!16s%2Fg%2F11l71fjflq?authuser=1&entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                  ОСТАВИТЬ ОТЗЫВ
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Reviews;
