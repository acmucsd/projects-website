'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import ACMLogo from "../../../public/assets/acm_logo.svg";
import s from "../navbar/Navbar.module.scss";
import { Size, useWindowSize } from "../../utils/general";

const NavigationBar: React.FC = () => {
  const size: Size = useWindowSize();

  return (
    <div className={s.navbarWrapper}>
      <div className={s.navbar}>
        {/* Navbar ACM Logo */}
        <div className={s.left}>
            <a>
              <img src={ACMLogo.src} alt="ACM Logo" />
              <p>Projects</p>
            </a>
            <div className={s.divider}>
              <span>|</span>
            </div>
            <a>
              <p>Home</p>
            </a>
            <a>
              <p>Application</p>
            </a>
            <a>
              <p>About</p>
            </a>
            <a>
              <p>Archive</p>
            </a>
            <a>
              <p>Gallery</p>
            </a>
        </div>
      </div>

      {/* Bottom Rainbow */}
      <div className={s.rainbow} />
    </div>
  );
};

export default NavigationBar;