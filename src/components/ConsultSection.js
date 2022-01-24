import styles from "../stylemodules/ConsultSection.module.css";

const ConsultSection = () => {
  return (
    <section className={styles.container}>
      <p style={{ fontSize: "18px" }}>
        Is software important for your business
      </p>
      <p style={{ fontSize: "36px" }}>Build it with Alba Tech</p>
      <button>Consultation Now</button>
    </section>
  );
};

export default ConsultSection;
