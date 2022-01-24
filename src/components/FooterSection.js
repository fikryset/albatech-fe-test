import styles from "../stylemodules/FooterSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const FooterSection = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.aboutFooter}>
        <div className={styles.brand}>
          <img className={styles.brandImg} src="/images/Brand.png" alt=""></img>
          <p>
            PT. Alba Digital Teknologi is a digital agency that has the tagline
            "Provide The Best Digital Experience for Your Business". We have to
            provide the best digital experience for our clients.
          </p>
          <div className={styles.socialIconsContainer}>
            <div className={styles.socialIcons}>
              <FontAwesomeIcon icon={faFacebookF} />{" "}
            </div>
            <div className={styles.socialIcons}>
              <FontAwesomeIcon icon={faInstagram} />{" "}
            </div>
            <div className={styles.socialIcons}>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
          </div>
        </div>
        <div className={styles.websiteNavigation}>
          <p className={styles.partTitle}>Website</p>
          <p>
            <a href="/">Service</a>
          </p>
          <p>
            <a href="/">Portfolio</a>
          </p>
          <p>
            <a href="/">Blog</a>
          </p>
          <p>
            <a href="/">Career</a>
          </p>
        </div>
        <div className={styles.contactInfo}>
          <p className={styles.partTitle}>Contact</p>
          <p>
            The Prominence Blok 38D, No.25 Jl. Jalur Sutera Bar. No.25,
            RT.003/RW.006, Panunggangan Tim., Kec. Pinang, Kota Tangerang,
            Banten 15143
          </p>
          <p>P : +62 812 9901 9909</p>
          <p>E : info@albatech.id</p>
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <div>©PT. Alba Digital Teknologi 2021 | All Rights Reserved</div>
        <div>Privacy policy | Terms of service</div>
      </div>
    </footer>
  );
};

export default FooterSection;
