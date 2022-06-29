import React, {FC} from "react";

import styles from "./styles.scss"
import egslogo from "../../assets/Unreal+Engine_eg-logo-filled-1255x1272-0eb9d144a0f981d1cbaaa1eb957de7a3207b31bb.png"
import eulogo from "../../assets/Unreal-Engine-New-Logo.webp"
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
              <img className={styles.egslogo} src={egslogo} alt=""/>
            </a>
          </div>
          <div className={styles.uelogo}>
            <a href="https://www.epicgames.com/store/en-US/">
              <img className={styles.eulogo} src={eulogo} alt=""/>
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