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
            <a href="https://acmucsd.com/">
              <img src={ACMLogo.src} alt="ACM Logo" />
              <p>Projects</p>
            </a>
            <div className={s.divider}>
              <span>|</span>
            </div>
            <Link href={"/#home"}>
              <p>Home</p>
            </Link>

            <Link href={"/#apply"}>
              <p>Apply</p>
            </Link>

            <Link href={"/#about"}>
              <p>About</p>
            </Link>

            <Link href={"/#archive"}>
              <p>Archive</p>
            </Link>
            <Link href={"/#gallery"}>
              <p>Gallery</p>
            </Link>
        </div>
      </div>

      {/* Bottom Rainbow */}
      <div className={s.rainbow} />
    </div>
  );
};

export default NavigationBar;