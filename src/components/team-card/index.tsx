import { useState, useEffect } from "react";
import s from "./style.module.scss";
import Image from "next/image";

const default_pic = "/assets/acm_logo.png";

interface BoardMember {
  name: string;
  title: string;
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
        <div className={`${s.personItem}`} key={index}>
          {/* right now I am manually cropping to 3:4 */}
          <img
            className={s.profilePic}
            src={person.profile_image || default_pic}
            alt={`${person.name}'s Picture`}
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
              <h5>{person.title}</h5>
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
