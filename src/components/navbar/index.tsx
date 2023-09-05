'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import ACMLogo from "../../../public/assets/acm_logo.svg";
import s from "../navbar/Navbar.module.scss";
import { Size, useWindowSize } from "../../utils/general";


const navLinks = [
  { to: "/", text: "Home" },
  { to: "/", text: "Applications" },
  { to: "/", text: "About" },
  { to: "/", text: "Archive" },
  { to: "/", text: "Gallery" },
];

const NavigationBar: React.FC = () => {
  const size: Size = useWindowSize();

  const [menuOpen, setMenuOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Switch to mobile less than 960px
  // useEffect(() => {
  //   setMobile(size.width <= 960);
  // }, [size]);

  // If they go back to desktop size, don't keep the menu open
  // useEffect(() => {
  //   if (!mobile) setMenuOpen(false);
  // }, [mobile]);

  return (
    <div className={s.navbarWrapper}>
      <div className={s.navbar}>
        {/* Navbar ACM Logo */}
        <div className={s.left}>
            <a>
              <img src={ACMLogo.src} alt="ACM Logo" />
              <p>Projects</p>
            </a>
        </div>

        {/* Desktop Nav Links */}
        <div className={`${s.right} ${mobile && s.hidden}`}>
          {navLinks.map((link, key) => (
              <a className={s.navItem}>{link.text}</a>
          ))}
        </div>
      </div>

      {/* Bottom Rainbow */}
      <div className={s.rainbow} />
    </div>
  );
};

export default NavigationBar;