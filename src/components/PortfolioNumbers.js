import { useEffect, useRef, useState } from "react";
import styles from "../stylemodules/PortfolioNumbers.module.css";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const PortfolioNumbers = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, options]);

  return (
    <section className={styles.container}>
      <p className={styles.sectionTitle}>
        Our Progress Comes with a Collaboration Between Creativity, Ideas, and
        Technology
      </p>
      <div className={styles.numbersContainer} ref={ref}>
        <div>
          {inView ? <CountUp end={300} suffix="+" /> : "0"}
          <br></br>
          <p>Designs</p>
        </div>
        <div>
          {inView ? <CountUp end={10} suffix="+" /> : "0"}
          <br></br>
          <p>Products</p>
        </div>
        <div>
          {inView ? <CountUp end={108} suffix="+" /> : "0"}
          <br></br>
          <p>Website Developments</p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioNumbers;
