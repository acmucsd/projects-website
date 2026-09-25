import { useState, useEffect } from "react";
import s from "./style.module.scss";
import Image from "next/image";

const getBorderClass = (title: string) => {
  const position = title.toLowerCase();

  if (position.includes("robotics")) return "borderRobotics";
  if (position.includes("design")) return "borderDesign";
  if (position.includes("hack")) return "borderHack";
  if (position.includes("ai")) return "borderAi";
  return "borderProjects";
};

const getTeamLogo = (title: string) => {
  const position = title.toLowerCase();

  if (position.includes("robotics")) return "/assets/robo.svg";
  if (position.includes("design")) return "/assets/design.svg";
  if (position.includes("hack")) return "/assets/hack.svg";
  if (position.includes("ai")) return "/assets/ai.svg";
  return "/assets/proj_logo.svg";
};

interface BoardMember {
  name: string;
  title: string;
  description?: string | null;
  profile_image: string;
  linkedin_link: string | null;
  discord: string | null;
}

const TeamCards: React.FC = () => {
  const [board, setBoard] = useState<BoardMember[]>([]);

  useEffect(() => {
    async function fetchBoard() {
      try {
        const response = await fetch(
          "https://acmucsd.com/api/board?team=projects",
          { next: { revalidate: 3600 }}
        );

        if (!response.ok) {
          throw new Error("Failed to fetch board data")
        }

        const data = await response.json();
        setBoard(data.board);
      }
      catch (error) {
        console.error(error);
      }
    }

    fetchBoard();
  }, []);

  return (
    <div className={s.container}>
      {board.map((person, index) => (
        <div
          className={`${s.personItem} ${s[getBorderClass(person.title)]}`}
          key={index}
        >
          <div className={s.picContainer}>
            {person.profile_image ? (
              <img
                className={s.profilePic}
                src={person.profile_image}
                alt={`${person.name}'s Picture`}
              />
            ) : null}
          </div>
          {/* trying to set the picture so that it automatically goes to 3:4 aspect ratio with Image, but doesnt work */}
          {/* <div className={s.picContainer}>
                  <Image src={person.profile_image} alt={`${person.name}'s Picture`} fill sizes='100vw' />
                    </div> */}
          <div className={s.textContainer}>
            <Image
              className={s.teamLogo}
              src={getTeamLogo(person.title)}
              alt=""
              width={96}
              height={96}
              aria-hidden="true"
            />
            <h3 className={s.personName}>{person.name}</h3>
            {person.description ? (
              <p className={s.description}>{person.description}</p>
            ) : null}
            <div className={s.role_text}>
              <h5>
                <span>Role: </span>
                <strong>{person.title}</strong>
              </h5>
            </div>
            <div className={s.social_links}>
              <div className={s.logo_text}>
                <Image
                  className={s.icon}
                  src="assets/embeds/discord_solid.svg"
                  alt="discord icon"
                  width={20}
                  height={20}
                />
                <h5>{person.discord}</h5>
              </div>
              {person.linkedin_link ? (
                <div className={`${s.logo_text} ${s.linkedin_text}`}>
                  <Image
                    className={s.icon}
                    src="assets/embeds/linkedin_blue.svg"
                    alt="LinkedIn icon"
                    width={20}
                    height={20}
                  />
                  <h5>
                    <a
                      href={person.linkedin_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </h5>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCards;
