import styles from "../stylemodules/PortfolioCard.module.css";

const PortfolioCard = (props) => {
  return (
    <div className={styles.cardBox}>
      <img style={{ maxWidth: "100%" }} alt="" src={props.img}></img>
      <p className={styles.developmentType}>{props.developmentType}</p>
      <p className={styles.title}>{props.title}</p>
      <p className={styles.desc}>{props.desc}</p>
    </div>
  );
};

export default PortfolioCard;
