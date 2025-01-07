import s from "./presentation.module.scss";
import { Container } from "src/ui/shared/container/container";
import img from "src/img/first3.98f960348320f2887314.jpg";
import Ratings from "./ui/Ratings";
const Presentation = () => {
  return (
    <div className={s.wrap}>
      <div className={s.blue_block}></div>
      <Container className={s.parent}>
        <div className={s.img_wrapper}>
          <div className={s.img_girl_parent}>
            <img src={img} alt="" className={s.img_girl} />
          </div>
        </div>
        <div className={s.bgg}>
          <div className={s.w600}>
            <h1 className={s.h1txt}>Сирена – сучасна стоматологія Дніпра</h1>
            <div className={s.blue_under}></div>
            <Ratings />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Presentation;
