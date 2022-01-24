import PackageCard from "./PackageCard";
import styles from "../stylemodules/PackageSection.module.css";

const PackageSection = () => {
  return (
    <section className={styles.container}>
      <p className={styles.title}>Complete Package</p>
      <p className={styles.subTitle}>
        From product design to software continuous delivery
      </p>
      <div className={styles.cardsContainer}>
        <PackageCard
          title={"Website development"}
          desc={
            "High-performance web applications that grow with your business"
          }
          img={"/images/icons/WebsiteDevelopment.png"}
        />
        <PackageCard
          title={"Mobile apps development"}
          desc={
            "Mobile app also become central role in the day-to-day operations of the business."
          }
          img={"/images/icons/Mobile apps development.png"}
        />
        <PackageCard
          title={"Digital product development"}
          desc={
            "Complete digital product creations from UX prototyping to final UI designs"
          }
          img={"/images/icons/Digital product design.png"}
        />
        <PackageCard
          title={"Maintenance"}
          desc={"Maintaining a scalable and secure architecture"}
          img={"/images/icons/Maintenance.png"}
        />
        <PackageCard
          title={"CMS development"}
          desc={
            "Developing a resilient software architecture centered on scalability"
          }
          img={"/images/icons/CMS development.png"}
        />
        <PackageCard
          title={"Integrated Payment Gateway"}
          desc={"Simplify the payment system with just one step"}
          img={"/images/icons/Payment.png"}
        />
      </div>
      <div className={styles.techstackContainer}>
        <img
          className={styles.techstackImage}
          alt="tech stack"
          src="/images/techstack/Rectangle 1902.png"
        ></img>
        <img
          className={styles.techstackImage}
          alt="tech stack"
          src="/images/techstack/Rectangle 1903.png"
        ></img>
        <img
          className={styles.techstackImage}
          alt="tech stack"
          src="/images/techstack/Rectangle 1904.png"
        ></img>
        <img
          className={styles.techstackImage}
          alt="tech stack"
          src="/images/techstack/Rectangle 1905.png"
        ></img>
        <img
          className={styles.techstackImage}
          alt="tech stack"
          src="/images/techstack/Rectangle 1906.png"
        ></img>
        <img
          className={styles.techstackImage}
          alt="tech stack"
          src="/images/techstack/Rectangle 1907.png"
        ></img>
        <img
          className={styles.techstackImage}
          alt="tech stack"
          src="/images/techstack/Rectangle 1908.png"
        ></img>
        <img
          className={styles.techstackImage}
          alt="tech stack"
          src="/images/techstack/Rectangle 1909.png"
        ></img>
        <img
          className={styles.techstackImage}
          alt="tech stack"
          src="/images/techstack/Rectangle 1910.png"
        ></img>
        <img
          className={styles.techstackImage}
          alt="tech stack"
          src="/images/techstack/Rectangle 1911.png"
        ></img>
        <img
          className={styles.techstackImage}
          alt="tech stack"
          src="/images/techstack/Rectangle 1912.png"
        ></img>
        <img
          className={styles.techstackImage}
          alt="tech stack"
          src="/images/techstack/Rectangle 1925.png"
        ></img>
        <img
          className={styles.techstackImage}
          alt="tech stack"
          src="/images/techstack/Rectangle 1926.png"
        ></img>
        <img
          className={styles.techstackImage}
          alt="tech stack"
          src="/images/techstack/Rectangle 1930.png"
        ></img>
      </div>
    </section>
  );
};

export default PackageSection;
