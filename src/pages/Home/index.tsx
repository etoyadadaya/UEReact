import React, {FC} from "react";
import Header from "../../components/Header";
import styles from "./styles.scss"

const Home: FC = () => {
  return (
    <div>
      <div className={styles.background}>
        <Header/>
        <video className={styles.video} autoPlay muted loop>
          <source src="https://cdn2.unrealengine.com/homepage-opener-5a55a50aaa4c.mp4"/>
        </video>
      </div>
    </div>
  );
};

export default Home;