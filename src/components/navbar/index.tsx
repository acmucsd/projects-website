'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import ProjLogo from "../../../public/assets/proj_logo.png";
import s from "./Navbar.module.scss";
import { Size, useWindowSize } from "../../utils/general";


const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#apply", label: "Apply" },
  { href: "/#about", label: "About" },
  { href: "/#archive", label: "Archive" },
  { href: "/#gallery", label: "Gallery" },
];

const NavigationBar: React.FC = () => {
  const size: Size = useWindowSize();

  const [menuOpen, setMenuOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    size && size.width && setMobile(size.width <= 960);
  }, [size]);

  useEffect(() => {
    if (!mobile) setMenuOpen(false);
  }, [mobile]);

  return (
    <div className={s.navbarWrapper}>
      <div className={s.navbar}>
        {/* Navbar ACM Logo */}
        <div className={`${s.left}`}>
            <Link href={"/"}>
              <img src={ProjLogo.src} alt="ACM Logo" />
              <p>ACM Projects</p>
            </Link>
            <div className={s.divider}>
              <span>|</span>
            </div>
            <div className={`${s.navLinks} ${mobile && s.hidden}`}>
              {navLinks.map((link, key) => (
                <Link key={key} href={link.href}>
                  <p>{link.label}</p>
                </Link>
              ))}
            </div>
        </div>

            {/* Mobile Navbar Toggle */}
          <button className={`${s.toggleIcon} ${!mobile && s.hidden}`} onClick={toggleMenu}>
            <div className={`${s.bar1} ${menuOpen && s.open}`} />
            <div className={`${s.bar2} ${menuOpen && s.open}`} />
          </button>   
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`${s.mobileNav} ${menuOpen && s.open}`}>
          {navLinks.map((link, key) => (
            <Link key={key} href={link.href}>
              <p className={`${s.navItem}`} onClick={() => setMenuOpen(false)}>
                {link.label}
              </p>
            </Link>
          ))}
        </div>
      {/* Bottom Rainbow */}
      <div className={s.rainbow} />
    </div>
  );
};

export default NavigationBar;