import { useState } from "react";
import styles from "../stylemodules/Navigation.module.css";
import NavigationSide from "./NavigationSide";
import LoginModal from "./LoginModal";

const Navigation = () => {
  const [showSideBar, setShowSideBar] = useState("0%");
  const [showLogin, setShowLogin] = useState(false);

  const displaySideBar = () => {
    setShowSideBar("75%");
  };

  const hideSideBar = () => {
    setShowSideBar("0%");
  };

  const displayLoginModal = () => {
    setShowLogin(true);
  };

  const hideLoginModal = () => {
    setShowLogin(false);
  };

  return (
    <nav>
      <div className={styles.topnav} id="myTopnav">
        <button className={styles.titlebtn}>
          <img alt="" src="/images/Brand.png"></img>
        </button>
        <button className={styles.menubtn}>About</button>
        <button className={styles.menubtn}>Service</button>
        <button className={styles.menubtn}>Portfolio</button>
        <button className={styles.menubtn}>Blog</button>
        <button className={styles.menubtn}>Career</button>
        <button className={styles.contactbtn} onClick={displayLoginModal}>
          Contact Us
        </button>
        <button className={styles.icon} onClick={displaySideBar}>
          &#9776;
        </button>
      </div>
      <NavigationSide width={showSideBar} closeClick={hideSideBar} />
      {showLogin && <LoginModal closeHandler={hideLoginModal} />}
    </nav>
  );
};

export default Navigation;
