import React from "react";
import { Container } from "src/ui/shared/container/container";
import s from "./footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMap,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useStoreScroll } from "src/store/store";
import FormFoot from "./ui/FormFoot";
export const Footer = () => {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const setRefElem = useStoreScroll((state) => state.setRefElem);
  React.useEffect(() => {
    if (targetRef.current) {
      setRefElem(targetRef);
    }
  }, []);
  return (
    <div className={s.wrap} ref={targetRef}>
      <div className={s.blue_block}></div>
      <Container className={s.parent}>
        <div className={s.left_parent}>
          <div>
            <div className={s.call_us}>
              <FontAwesomeIcon icon={faPhone} size="xl" />
              <span>Дзвоніть нам</span>
            </div>
            <div>+380 67 522 50 40</div>
            <div>+380 67 522 50 40</div>
          </div>
          <div>
            <div className={s.call_us}>
              <FontAwesomeIcon icon={faLocationDot} size="xl" />
              <span>АДРЕСА</span>
            </div>
            <a
              target="_blank"
              href="https://www.google.fr/maps/place/Стоматологія+Сирена/@48.472257,34.9885361,21z/data=!4m15!1m8!3m7!1s0x40dbe3c8e70978d5:0x9b9687bccea33675!2z0KHRgtC-0LzQsNGC0L7Qu9C-0LPRltGPINCh0LjRgNC10L3QsA!8m2!3d48.4723201!4d34.988697!10e1!16s%2Fg%2F11l71fjflq!3m5!1s0x40dbe3c8e70978d5:0x9b9687bccea33675!8m2!3d48.4723201!4d34.988697!16s%2Fg%2F11l71fjflq?authuser=1&entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D"
            >
              проспект и мазепы 2б
            </a>
          </div>
          <div className={s.fonts_awesome}>
            <FontAwesomeIcon icon={faTelegram} size="3x" />
            <FontAwesomeIcon icon={faInstagram} size="3x" />
            <FontAwesomeIcon icon={faMap} size="3x" />
          </div>
        </div>
        <div className={s.left_parent}>
          <div>
            <div className={s.call_us}>
              <FontAwesomeIcon icon={faPhone} size="xl" />
              <span>Дзвоніть нам</span>
            </div>
            <div>+380 67 522 50 40</div>
            <div>+380 67 522 50 40</div>
          </div>
          <div>
            <div className={s.call_us}>
              <FontAwesomeIcon icon={faLocationDot} size="xl" />
              <span>АДРЕСА</span>
            </div>
            <a
              target="_blank"
              href="https://www.google.fr/maps/place/Стоматологія+Сирена/@48.472257,34.9885361,21z/data=!4m15!1m8!3m7!1s0x40dbe3c8e70978d5:0x9b9687bccea33675!2z0KHRgtC-0LzQsNGC0L7Qu9C-0LPRltGPINCh0LjRgNC10L3QsA!8m2!3d48.4723201!4d34.988697!10e1!16s%2Fg%2F11l71fjflq!3m5!1s0x40dbe3c8e70978d5:0x9b9687bccea33675!8m2!3d48.4723201!4d34.988697!16s%2Fg%2F11l71fjflq?authuser=1&entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D"
            >
              проспект и мазепы 2б
            </a>
          </div>
          <div className={s.fonts_awesome}>
            <FontAwesomeIcon icon={faTelegram} size="3x" />
            <FontAwesomeIcon icon={faInstagram} size="3x" />
            <FontAwesomeIcon icon={faMap} size="3x" />
          </div>
        </div>
        <FormFoot />
      </Container>
    </div>
  );
};
