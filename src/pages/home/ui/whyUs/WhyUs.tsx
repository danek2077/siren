import { Container } from "src/ui/shared/container/container";
import s from "./whyUs.module.scss";
import square_img from "src/img/asian-female-dentist-patient-sitting-together-looking-something_1098-20315.jpg";
export const WhyUs = () => {
  return (
    <div className={s.wrap}>
      <h1 className={s.h1txt}>ПОЧЕМУ ИМЕННО МЫ ?</h1>
      <div className={s.blue_block}></div>
      <Container className={s.parent}>
        <div className={s.elems_wrap}>
          <Elem />
          <Elem />
          <Elem />
          <Elem />
          <Elem />
        </div>
        <div>
          <img src={square_img} alt="" className={s.img} />
        </div>
      </Container>
    </div>
  );
};

const Elem = () => {
  return (
    <div className={s.elem_parent}>
      <img
        src="https://skyclinic.ua/wp-content/uploads/2024/02/terapevt-1.svg"
        alt=""
        className={s.imgs}
      />
      <div>
        <div className={s.elem_wide}>Исправляем ошибки чужих врачей</div>
        <div className={s.elem_span_text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
          distinctio aspernatur earum pariatur incidunt aliquid facilis nam?
          Minima, maiores voluptatem?
        </div>
      </div>
    </div>
  );
};
