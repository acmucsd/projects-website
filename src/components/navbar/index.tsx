'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import ProjLogo from "../../../public/assets/proj_logo.png";
import s from "../navbar/Navbar.module.scss";
import { Size, useWindowSize } from "../../utils/general";

const NavigationBar: React.FC = () => {
  const size: Size = useWindowSize();

  return (
    <div className={s.navbarWrapper}>
      <div className={s.navbar}>
        {/* Navbar ACM Logo */}
        <div className={s.left}>
            <Link href="#">
              <img src={ProjLogo.src} alt="ACM Logo" />
                <p>Projects</p>
            </Link>
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