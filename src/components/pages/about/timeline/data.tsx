import { CustomTimelineItemProps } from "./CustomTimelineItem";
import Tp from "../../../../assets/tp-main-logo-svg.svg";
import Testlio from "../../../../assets/testlio-logo-blue.webp";
import Mohanet from "../../../../assets/logo_mohanet.png";
import ELTE from "../../../../assets/elte_icon.jpg";
import UCPH from "../../../../assets/ucph_logo.webp";
import Humboldt from "../../../../assets/humboldt_logo.png";

export const professionalItems: CustomTimelineItemProps[] = [
  {
    date: "04/2024 - Now",
    title: "Content Moderator | Teleperformance",
    subtitle: "Berlin,Germany | Full-time",
    logo: Tp,
  },
  {
    date: "09/2022 - 09/2023",
    title: "QA Tester | Testlio Inc.",
    subtitle: "Remote | Freelance",
    logo: Testlio,
    desc: "As a freelance QA Tester at Testlio, I earned relevant experience in end-to-end, usability, localization, accessibility, functional and regression testing, while working on different projects in a fully remote, project-based environment.",
  },
  {
    date: "07/2021 - 08/2022",
    title: "Frontend Developer | MOHAnet",
    subtitle: "Hungary,Budapest | Full-time",
    logo: Mohanet,
    desc: "As a Frontend Developer, I helped to develop the renewed version of the Monitoringbook Pro, a client-side component of MOHAnet's monitoring and alerting system.",
  },
  {
    date: "02/2021 - 06/2021",
    title: "Frontend Developer Trainee | MOHAnet",
    subtitle: "Hungary,Budapest | Part-time",
    logo: Mohanet,
    desc: "As a Frontend developer trainee, I learned how to use my previously acquired knowledge to take part in developing a web application for data visualization and administration of data-collecting devices.",
  },
];

export const educationTimelineItems: CustomTimelineItemProps[] = [
  {
    date: "09/2023 - 02/2024",
    title: "Humboldt Universität zu Berlin",
    subtitle: "Erasmus+ Semester abroad",
    logo: Humboldt,
    desc: "I came to Humboldt for an Erasmus+ semester. I mainly learned about the culture of Germany and especially Berlin, while bettering my German language skills, as well as honing my software developer skills.",
  },
  {
    date: "09/2022 - 09/2023  | Unfinished",
    title: "University of Copenhagen",
    subtitle: "Computer Science MSc.",
    logo: UCPH,
    desc: "I further developed my reasoning and problem-solving skills, as well as deepened my understanding of algorithms, data structures, and programming language theory. I earned relevant experience in completing projects in an English-speaking academic setting.",
  },
  {
    date: "09/2018 - 07/2021",
    title: "Eötvös Lóránd University",
    subtitle: "Computer Science BSc.",
    logo: ELTE,
    desc: "I learned the basics of building, maintaining, developing, and applying software-oriented technological tools and systems alone or in teamwork. I also acquired theoretical knowledge and academic qualifications to continue my studies at the MSc level.",
  },
];
