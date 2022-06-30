import React, {FC} from "react";

import styles from "./styles.scss"
import lupa from "../../assets/751463.png"
import lang from "../../assets/558593.png"
import signIn from "../../assets/1000997.png"

import Navbar from "../../utils/Navbar";

const Header: FC = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.leftNav}>
          <div className={styles.egslogo}>
            <a href="https://www.epicgames.com/store/en-US/">
              <img className={styles.egslogo} src="https://cdn2.unrealengine.com/eg-shield-logo-white-f8185c103d8d.svg" alt=""/>
            </a>
          </div>
          <div className={styles.uelogo}>
            <a href="https://www.epicgames.com/store/en-US/">
              <img className={styles.eulogo} src="https://cdn2.unrealengine.com/ue-horizontal-logo-cba14ebde1ea.svg?resize=1&w=440&quality=high" alt=""/>
            </a>
          </div>
          <div className={styles.links}>
            <Navbar/>
          </div>
        </div>
        <div className={styles.rightNav}>
          <div className={styles.searchLogo}>
              <img className={styles.searchLogo} src={lupa} alt=""/>
          </div>
          <div className={styles.languageLogo}>
              <img className={styles.languageLogo} src={lang} alt=""/>
          </div>
          <div className={styles.signWrap}>
            <div className={styles.signIn}>
              <img className={styles.signInLogo} src={signIn} alt=""/>
            </div>
            <a href="https://www.unrealengine.com/id/login">
              <div className={styles.signInTitle}>SIGN IN</div>
            </a>
          </div>
          <div className={styles.download}>
            <a href="https://www.unrealengine.com/en-US/download">
              <div className={styles.downloadTitle}>DOWNLOAD</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;