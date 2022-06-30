import React, {FC} from "react";
import styles from "./navstyles.scss"

const Navbar: FC = () => {
  return (
    <nav>
      <ul className={styles.menus}>
        <div className={styles.wrapper}>
          <li className={styles.menuItems}>
            <a href="https://www.unrealengine.com/unreal-engine-5">Products</a>
          </li>
          <div className={styles.dropdown}>
            <ul>
              <li>
                <a href="https://www.unrealengine.com/unreal-engine-5">Unreal Engine 5</a>
              </li>
              <li>
                <a href="https://www.unrealengine.com/features">Features</a>
              </li>
              <li>
                <a href="https://www.unrealengine.com/license">Licensing options</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.wrapper}>
          <li className={styles.menuItems}>
            <a href="https://www.unrealengine.com/games">Solutions</a>
          </li>
          <div className={styles.dropdown}>
            <ul>
              <li>
                <a href="https://www.unrealengine.com/solutions/games">Games</a>
              </li>
              <li>
                <a href="https://www.unrealengine.com/solutions/film-television">Film & television</a>
              </li>
              <li>
                <a href="https://www.unrealengine.com/solutions/animation">Animation</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.wrapper}>
          <li className={styles.menuItems}>
            <a href="https://www.unrealengine.com/learn">Learn</a>
          </li>
          <div className={styles.dropdown}>
            <ul>
              <li>
                <a href="https://www.unrealengine.com/learn">Learning resources</a>
              </li>
              <li>
                <a href="https://www.unrealengine.com/educators">Unreal Engine for educators</a>
              </li>
              <li>
                <a href="https://www.unrealengine.com/students">Unreal Engine for students</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.wrapper}>
          <li className={styles.menuItems}>
            <a href="https://www.unrealengine.com/creators">More</a>
          </li>
          <div className={styles.dropdown}>
            <ul>
              <li>
                <a href="https://www.unrealengine.com/feed">News & Events</a>
              </li>
              <li>
                <a href="https://www.unrealengine.com/creators">Community</a>
              </li>
              <li>
                <a href="https://www.unrealengine.com/support">Support</a>
              </li>
              <li>
                <a href="https://www.unrealengine.com/marketplace/store">Marketplace</a>
              </li>
            </ul>
          </div>
        </div>
      </ul>
    </nav>
  );
};


export default Navbar;
