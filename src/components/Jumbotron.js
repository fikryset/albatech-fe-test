import styles from "../stylemodules/Jumbotron.module.css";

const Jumbotron = () => {
  return (
    <header className={styles.container}>
      <img
        className={styles.jumbotronImg}
        src="/images/Group 80.png"
        alt=""
      ></img>
      <div className={styles.jumbotronTextLarge}>
        <span style={{ fontWeight: "bold" }}>Build or scale up</span>
        <br></br>
        <span>your development team</span>
        <br></br>
        <span style={{ fontSize: "1.5em" }}>in weeks, not month</span>
        <br></br>
        <button className={styles.bookBtn}>Book Now</button>
      </div>
      <div className={styles.jumbotronTextSmall}>
        <span style={{ fontWeight: "bold" }}>Build or scale up </span>
        <span>your development team</span>
        <br></br>
        <span>in weeks, not month</span>
        <br></br>
        <button className={styles.bookBtn}>Book Now</button>
      </div>
    </header>
  );
};

export default Jumbotron;
