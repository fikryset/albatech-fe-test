import styles from "../stylemodules/TestimonialSection.module.css";

const TestimonialSection = () => {
  return (
    <section className={styles.container}>
      <p className={styles.title}>Testimonials</p>
      <p className={styles.subTitle}>
        What clients love in working with Alba Tech
      </p>
      <img
        className={styles.testimonialImg}
        src="/images/Group 79.png"
        alt=""
      ></img>
      <img
        src="/images/Group 22.png"
        alt=""
        className={styles.testimonialImgSmall}
      ></img>
      <div className={styles.clientLogoContainer}>
        <img src="/images/clients/Rectangle 1922.png" alt="client logo"></img>
        <img src="/images/clients/Rectangle 1920.png" alt="client logo"></img>
        <img src="/images/clients/Rectangle 1923.png" alt="client logo"></img>
        <img src="/images/clients/Rectangle 1919.png" alt="client logo"></img>
        <img src="/images/clients/Rectangle 1921.png" alt="client logo"></img>
      </div>
    </section>
  );
};

export default TestimonialSection;
