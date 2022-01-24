import { useParams } from "react-router-dom";
import styles from "../stylemodules/Profile.module.css";

const Profile = () => {
  const { token } = useParams();

  return (
    <section className={styles.container}>
      <img
        className={styles.brandImg}
        alt="brand logo"
        src="/images/Brand.png"
      ></img>
      <h1>Profile</h1>
      <div>
        <p>token: {token}</p>
      </div>
      <p>
        i don't know what to put here beside the required one, but this is
        working
      </p>
    </section>
  );
};

export default Profile;
