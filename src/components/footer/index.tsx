import { useState } from "react";
import Link from "next/link";
import "src/components/footer/styles.scss";
import FacebookIcon from "public/assets/embeds/facebook.svg";
import MediumIcon from "public/assets/embeds/medium.svg";
import GithubIcon from "public/assets/embeds/github.svg";
import InstagramIcon from "public/assets/embeds/instagram.svg";
import DiscordIcon from "public/assets/embeds/discord.svg";
import EmailIcon from "public/assets/embeds/email.svg";
import LinkedinIcon from "public/assets/embeds/linkedin.svg";
import YoutubeIcon from "public/assets/embeds/youtube.svg";
import VercelIcon from "public/assets/embeds/vercel.svg";

const cardContents = [
  { title: "Email", value: "contact@acmucsd.org", icon: EmailIcon },
  {
    title: "Discord",
    value: "acmurl.com/discord",
    icon: DiscordIcon,
  },
  { title: "Medium", value: "medium.com/acmucsd", icon: MediumIcon },
  {
    title: "Facebook",
    value: "facebook.com/acmucsd",
    icon: FacebookIcon,
  },
  { title: "Github", value: "github.com/acmucsd", icon: GithubIcon },
  {
    title: "Instagram",
    value: "instagram.com/acm.ucsd",
    icon: InstagramIcon,
  },
  {
    title: "LinkedIn",
    value: "acmurl.com/linkedin",
    icon: LinkedinIcon,
  },
  {
    title: "YouTube",
    value: "acmurl.com/youtube",
    icon: YoutubeIcon,
  },
];
const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="footer" id="contact">
      <div className="footerContainer">
        <div className="footerContents">
          <h2>Connect With Us!</h2>
          <div className="footerContents__wrapper">
            <div className="footerContents__contact">
              {cardContents.map((item, key) => {
                const linkprefix =
                  item.title === "Email" ? "mailto:" : "https://";
                const href = `${linkprefix}${item.value}`;
                return (
                  <div key={key} className="footerContents__contact__card">
                    <Link href={href} legacyBehavior>
                      <a>
                        <img src={item.icon.src} alt={item.title} />
                      </a>
                    </Link>
                    <div>
                      <a href={href}>{item.title}</a>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="footerContents__newsletter">
              <h2>Newsletter</h2>
              <p>Receive weekly events and news!</p>
              <a
                href="https://acmurl.com/newsletter"
                target="_blank"
                rel="noreferrer"
                className="subscribe-btn"
              >
                Subscribe!
              </a>
              <a href="https://vercel.com/?utm_source=acmucsd&utm_campaign=oss" className="vercel-btn">
                <img src={VercelIcon.src} alt="Vercel" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mobileFooterContainer">
        <h2>Connect With Us!</h2>
        <div className="community-links">
          <a href="mailto:contact@acmucsd.org">
            <img src={EmailIcon.src} alt="Email" />
          </a>
          <a href="http://acmurl.com/discord">
            <img src={DiscordIcon.src} alt="Discord" />
          </a>
          <a href="http://facebook.com/acmucsd/">
            <img src={FacebookIcon.src} alt="Facebook" />
          </a>
          <a href="http://medium.com/acmucsd">
            <img src={MediumIcon.src} alt="Medium" />
          </a>
          <a href="http://instagram.com/acm.ucsd">
            <img src={InstagramIcon.src} alt="Instagram" />
          </a>
          <a href="http://github.com/acmucsd">
            <img src={GithubIcon.src} alt="GitHub" />
          </a>
          <a href="http://acmurl.com/youtube">
            <img src={YoutubeIcon.src} alt="Youtube" />
          </a>
          <a href="http://acmurl.com/linkedin">
            <img src={LinkedinIcon.src} alt="Linkedin" />
          </a>
        </div>
        <div className="mobileFooterContainer__newsletter">
          <h2>Newsletter</h2>
          <p>Receive weekly events and news!</p>
          <a
            href="https://acmurl.com/newsletter"
            target="_blank"
            rel="noreferrer"
            className="mobile-subscribe-btn"
          >
            Subscribe!
          </a>
          <a
            href="https://vercel.com/?utm_source=acmucsd&utm_campaign=oss"
            className="mobile-vercel-btn"
          >
            <img src={VercelIcon.src} alt="Vercel" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
