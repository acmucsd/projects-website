"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import s from "./Navbar.module.scss";
import { Size, useWindowSize } from "../../utils/general";

const ProjLogo = "/assets/navbar_proj_logo.svg";
const Gradient = "/assets/hero-gradient.png";
const GradientMobile = "/assets/hero-gradient-mobile.png";

// Nav link properties
const navLinks = [
  { href: "/archive", label: "Archive" },
  { href: "/resources", label: "Resources" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
];

const DESKTOP_GRADIENT_HEIGHT = 85 * 18; // 85rem for 18px font
const MOBILE_GRADIENT_HEIGHT = 50 * 18; // 50rem for 18px font

// Main navbar component
const NavigationBar: React.FC = () => {
  const size: Size = useWindowSize();

  // size.width !== undefined determines whether the viewport has rendered yet
  const mobile = size.width !== undefined && size.width <= 956;
  const mobileGrad = size.width !== undefined && size.width <= 920;

  const [menuOpen, setMenuOpen] = useState(false);
  const [gradientOffset, setGradientOffset] = useState(0);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // close the mobile menu if no longer within mobile viewport width
  useEffect(() => {
    if (!mobile) setMenuOpen(false);
  }, [mobile]);

  useEffect(() => {
    const gradientHeight = mobileGrad
      ? MOBILE_GRADIENT_HEIGHT
      : DESKTOP_GRADIENT_HEIGHT;

    const handleScroll = () => {
      // stop scrolling once gradient image height reached
      setGradientOffset(Math.min(window.scrollY, gradientHeight));
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileGrad]);

  return (
    <div className={s.navbarWrapper}>
      <div className={`${s.gradientWrapper} ${menuOpen && s.mobileNavOpen}`}>
        <Image
          className={s.gradient}
          src={mobileGrad ? GradientMobile : Gradient}
          width={1440}
          height={1879}
          alt="Gradient"
          style={{
            transform: `translateY(-${gradientOffset}px)`,
          }}
        />
      </div>
      
      <div className={s.navbar}>
        {/* Projects Logo */}
        <div className={s.left}>
          <Link href={"/"}>
            <img src={ProjLogo} alt="Projects Logo" className={s.logo} />
            <p className={s.logoText}>at UC San Diego</p>
          </Link>
        </div>

        {/* Main Navbar Content */}
        <div className={s.right}>
          {/* Nav Links */}
          <div className={s.navLinks}>
            {navLinks.map((link, key) => (
              <Link key={key} href={link.href}>
                <p>{link.label}</p>
              </Link>
            ))}
          </div>

          {/* Mobile Navbar Toggle */}
          <button
            className={s.toggleIcon}
            onClick={toggleMenu}
          >
            <div className={`${s.bar1} ${menuOpen && s.open}`} />
            <div className={`${s.bar2} ${menuOpen && s.open}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`${s.mobileNav} ${menuOpen && s.open}`}>
        {navLinks.map((link, key) => (
          <Link key={key} href={link.href}>
            <p className={s.navItem} onClick={() => setMenuOpen(false)}>
              {link.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;