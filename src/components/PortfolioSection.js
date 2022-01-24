import PortfolioCard from "./PortfolioCard";
import styles from "../stylemodules/PortfolioSection.module.css";

const PortfolioSection = () => {
  return (
    <section className={styles.container}>
      <p className={styles.title}>Portfolio</p>
      <p className={styles.subTitle}>
        The software that we build takes our clients to the next level
      </p>
      <div className={styles.cardsContainer}>
        <PortfolioCard
          developmentType={"Mobile apps development"}
          title={"Jago Apps"}
          desc={
            "Has a unique selling point where not all companies offer applications for sales, data collection and management"
          }
          img={"/images/Rectangle 1914.jpg"}
        />
        <PortfolioCard
          developmentType={"Website development"}
          title={"Adidas"}
          desc={
            "Alba helps in creating a website catalog to show brand identity and information in accordance with vision and mission of Adidas Indonesia. "
          }
          img={"/images/Rectangle 1920.jpg"}
        />
        <PortfolioCard
          developmentType={"Website development"}
          title={"Astra International"}
          desc={
            "Alba helps in creating a website catalog to show brand identity and information in accordance with vision and mission of Astra International. "
          }
          img={"/images/Rectangle 1920.jpg"}
        />
      </div>
      <div className={styles.moreBtn}>
        <button>Learn More</button>
      </div>
    </section>
  );
};

export default PortfolioSection;
