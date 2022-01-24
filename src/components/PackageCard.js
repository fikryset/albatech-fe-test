import styles from "../stylemodules/PackageCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const PackageCard = (props) => {
  return (
    <div className={styles.cardBox}>
      <img alt="" src={props.img}></img>
      <p className={styles.title}>
        {props.title}{" "}
        <span className={styles.iconArrow}>
          {" "}
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </p>
      <p className={styles.desc}>{props.desc}</p>
    </div>
  );
};

export default PackageCard;
