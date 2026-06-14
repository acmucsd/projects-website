import s from "./style.module.scss";
import Image from "next/image";

const default_pic = "/assets/acm_logo.png";

const project_people = [
  {
    name: "Alan Mayer",
    role: "VP Projects",
    discord: "tbd",
    picture: "https://via.placeholder.com/300x400",
    alt: "Alan Mayer Picture",
  },
  {
    name: "Reagan Hsu",
    role: "Projects Director",
    discord: "tbd",
    picture: "https://via.placeholder.com/300x400",
    alt: "Reagan Hsu Picture",
  },
  {
    name: "Harry Wang",
    role: "AI Lead",
    discord: "tbd",
    picture: "https://via.placeholder.com/300x400",
    alt: "Harry Wang Picture",
  },
  {
    name: "Katie Moc",
    role: "AI Lead",
    discord: "tbd",
    picture: "https://via.placeholder.com/300x400",
    alt: "Katie Moc Picture",
  },
  {
    name: "Arwen Lin",
    role: "Design Lead",
    discord: "tbd",
    picture: "https://via.placeholder.com/300x400",
    alt: "Arwen Lin Picture",
  },
  {
    name: "Ryan",
    role: "Hack Lead",
    discord: "tbd",
    picture: "https://via.placeholder.com/300x400",
    alt: "Ryan Picture",
  },
];

const TeamCards: React.FC = () => {
  return (
    <div className={s.container}>
      {project_people.map((person, index) => (
        <div className={`${s.personItem}`} key={index}>
          {/* right now I am manually cropping to 3:4 */}
          <img
            className={s.profilePic}
            src={person.picture || default_pic}
            alt={person.alt}
          />
          {/* trying to set the picture so that it automatically goes to 3:4 aspect ratio with Image, but doesnt work */}
          {/* <div className={s.picContainer}>
                        <Image src={person.picture || default_pic} alt={person.alt} fill sizes='100vw' />
                    </div> */}
          <div className={s.textContainer}>
            <h3 className={s.personName}>{person.name}</h3>
            <div className={s.logo_text}>
              <Image
                className={s.icon}
                src="assets/embeds/role_icon.svg"
                alt="role icon"
                width={20}
                height={20}
              />
              <h5>{person.role}</h5>
            </div>
            <div className={s.logo_text}>
              <Image
                className={s.icon}
                src="assets/embeds/discord.svg"
                alt="discord icon"
                width={20}
                height={20}
              />
              <h5>{person.discord}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCards;
