import React, {FC} from "react";
import styles from "./navstyles.scss"
import {menuItems} from "../components/Header/menu";

const Navbar: FC = () => {
  return (
    <nav>
      <ul className={styles.menus}>
        {menuItems.map((menu, index) => {
          return (
            <li className={styles.menuItems} key={index}>
              <a href={menu.link}>{menu.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};


export default Navbar;
