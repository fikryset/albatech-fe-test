import styles from "../stylemodules/NavigationSide.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const NavigationSide = (props) => {
  return (
    <>
      <div className={styles.sidenav} style={{ width: props.width }}>
        <button className={styles.closebtn} onClick={props.closeClick}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <button className={styles.menubtn}>About</button>
        <button className={styles.menubtn}>Service</button>
        <button className={styles.menubtn}>Portfolio</button>
        <button className={styles.menubtn}>Blog</button>
        <button className={styles.menubtn}>Career</button>
        <button className={styles.menubtn}>Contact Us</button>
      </div>
    </>
  );
};

export default NavigationSide;
