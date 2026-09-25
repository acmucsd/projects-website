import styles from "./styles.module.scss";

const ProjLogo = "/assets/footer_proj_logo.svg";
const DiscordIcon = "/assets/embeds/discord.svg";
const InstagramIcon = "/assets/embeds/instagram.svg";
const EmailIcon = "/assets/embeds/email.svg";

// Social links bundled with other associated content
const socials = [
  {
    title: "Discord",
    value: "acmurl.com/discord",
    icon: DiscordIcon,
  },
  {
    title: "Instagram",
    value: "instagram.com/acm.at.ucsd",
    icon: InstagramIcon,
  },
  { title: "Email",
    value: "contact@acmucsd.org",
    icon: EmailIcon
  },
];

// Nav link sections/columns
const navLinkSections = [
  {
    title: "Projects",
    pages: ["Home", "About", "Archive"]
  },
  {
    title: "ACM at UCSD",
    pages: ["Main", "AI", "Cyber", "Hack"]
  },
];

// React component that represents the nav links
const NavLinks = () => {
  return navLinkSections.map((section, sectionKey) => {
    const links = section.pages.map((page, pageKey) => {
      let link : string = "https://"; // set default link prefix
      let pageTitle : string = page;

      if (section.title === "Projects") {
        if (page !== "Home") {
          link = "/" + page.toLowerCase();
        } else {
          link = "/";
        }
      } else {
        // if page is main website, link will just take you to acmucsd.com
        if (page !== "Main") {
          link += page.toLowerCase() + ".";
        }

        link += "acmucsd.com";
        pageTitle += " Website";
      }

      return (
        <div key={pageKey} className={styles.pageTitle}>
          <a href={link}>{pageTitle}</a>
        </div>
      );
    });

    return (
      <div key={sectionKey} className={styles.navSection}>
        <h3>
          {section.title}
        </h3>
        {links}
      </div>
    );
  });
}

// React component that represents the contact section
const Contact = () => {
  return socials.map((item, key) => {
    const linkprefix =
      item.title === "Email" ? "mailto:" : "https://";
    const href = `${linkprefix}${item.value}`; // assemble link
    return (
      <div key={key} className={styles.contactIcon}>
        <a href={href}>
          <img src={item.icon} alt={item.title} />
        </a>
      </div>
    );
  });
}

// Main footer component
const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.mainContent}>

          {/* Projects Logo */}
          <div className={styles.logo}>
            <img src={ProjLogo} alt="Projects Logo" />
            <h2>at UC San Diego</h2>
          </div>

          {/* Nav Links */}
          <div className={styles.navLinks}>
            <NavLinks />
          </div>
        </div>

        {/* Contact Buttons */}
        <div className={styles.contact}>
          <Contact />
        </div>

        {/* Bottom Horizontal Line */}
        <hr />
      </div>
    </div>
  );
};

export default Footer;
