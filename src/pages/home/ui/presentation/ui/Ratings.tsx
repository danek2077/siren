import { cn } from "../../../../../../lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import s from "./ratings.module.scss";
import dentalCareImg from "src/img/dentalCare.png";
const Ratings = () => {
  return (
    <div className={`flex ${s.ratings_container}`}>
      <a
        href="https://dentalcare.dp.ua/clinic/132"
        target="_blank"
        rel="noreferrer"
      >
        <div className={s.rating_card}>
          <img src={dentalCareImg} alt="Dental Care" className={s.img1} />
          <div className={s.rating}>
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon key={i} icon={faStar} />
            ))}
          </div>
          <p>Dental відгуки</p>
        </div>
      </a>
      <a href="/" target="_blank" rel="noreferrer">
        <div className={s.rating_card}>
          <img
            src="https://skyclinic.ua/wp-content/themes/sky/assets/img/ratings/google.svg"
            alt="Google Reviews"
            className={s.img2}
          />
          <div className={s.rating}>
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon key={i} icon={faStar} />
            ))}
          </div>
          <p>Google відгуки</p>
        </div>
      </a>
    </div>
  );
};

export default Ratings;
