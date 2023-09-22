import s from "./style.module.scss";
import Image from 'next/image'

const default_pic = "/assets/acm_logo.svg"

const project_people = [
    {
        name: "Calvin Nguyen",
        role: "VP Projects",
        discord: "neniflight",
        picture: "/assets/team_photos/calvin.jpg",
        alt: "Calvin Picture"
    },
    {
        name: "Arvin Zhang",
        role: "Mentor Lead for AI",
        discord: "arvin._.",
        picture: "/assets/team_photos/arvin.jpg",
        alt: "Arvin Picture"
    },
    {
        name: "Nathaniel del Rosario",
        role: "Mentor Lead for Design",
        discord: "dimple1216",
        picture: "/assets/team_photos/nathaniel.jpg",
        alt: "Nathaniel Picture"
    },
    {
        name: "Sujal Nahata",
        role: "Mentor Lead for Hack",
        discord: "real.suj",
        picture: "/assets/team_photos/sujal.jpg",
        alt: "sujal Picture"
    },
    {
        name: "Jackie Piepkorn",
        role: "VP AI Events",
        discord: "devitoinaspeedo",
        picture: "/assets/team_photos/jackie.png",
        alt: "Jackie Picture"
    },
    {
        name: "Cindy Peng",
        role: "Design TED",
        discord: "cinpen#3504",
        picture: "/assets/team_photos/cindy.jpg",
        alt: "Cindy Picture"
    },
    {
        name: "Nicole Gong",
        role: "Design TED",
        discord: "lalanicole",
        picture: "/assets/team_photos/nicole.jpg",
        alt: "Nicole Picture"
    },
    {
        name: "Samantha Sayson",
        role: "Design TED",
        discord: "sbds7267",
        alt: "Samantha Picture"
    }, 
    {
        name: "Angela Hu",
        role: "Hack TED",
        discord: "angela.__.hu",
        picture: "/assets/team_photos/angela.jpg",
        alt: "Angela Picture"
    },
    {
        name: "Khushi Patel",
        role: "Hack TED",
        discord: "dolphin2765",
        picture: "/assets/team_photos/khushi.jpg",
        alt: "Khushi Picture"
    }
]

const TeamCards: React.FC = () => {


    return (
        <div className={s.container}>
            {project_people.map((person, index) => (
                <div className={`${s.personItem}`} key={index} >
                    {/* right now I am manually cropping to 3:4 */}
                    <img className={s.profilePic} src={person.picture || default_pic} alt={person.alt} />
                    {/* trying to set the picture so that it automatically goes to 3:4 aspect ratio with Image, but doesnt work */}
                    {/* <div className={s.picContainer}>
                        <Image src={person.picture || default_pic} alt={person.alt} fill sizes='100vw' />
                    </div> */}
                    <div className={s.textContainer}>
                        <h3 className={s.personName}>{person.name}</h3>
                        <h5>{person.role}</h5>
                        <h5>{person.discord}</h5>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeamCards;