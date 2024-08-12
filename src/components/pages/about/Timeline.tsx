import "./timeline.scss";
import { Chrono, TimelineItem } from "react-chrono";

const items: TimelineItem[] = [
  {
    title: "Now  04/2024",
    cardTitle: "Content Moderator | Teleperformance",
    cardSubtitle: "Berlin,Germany | Full-time",
    url: "https://www.teleperformance.com/de-de/locations/germany-site/germany",
  },
  {
    title: "09/2023  09/2022",
    cardTitle: "QA Tester | Testlio Inc.",
    cardSubtitle: "Remote | Freelance",
    url: "https://testlio.com/",
    cardDetailedText:
      "As a freelance QA Tester at Testlio, I earned relevant experience in end-to-end, usability, localization, accessibility, functional and regression testing, while working on different projects in a fully remote, project-based environment.",
  },
  {
    title: "08/2022  07/2021",
    cardTitle: "Frontend Developer | MOHAnet Mobilsystems",
    url: "https://mohanet.com/",
    cardSubtitle: "Hungary,Budapest | Full-time",
    cardDetailedText:
      "As a Frontend Developer, I helped to develop the renewed version of the Monitoringbook Pro, a client-side component of MOHAnet's monitoring and alerting system.",
  },
  {
    title: "06/2021  02/2021",
    cardTitle: "Frontend Developer Trainee | MOHAnet Mobilsystems",
    url: "https://mohanet.com/",
    cardSubtitle: "Hungary,Budapest | Part-time",
    cardDetailedText:
      "As a Frontend developer trainee, I learned how to use my previously acquired knowledge to take part in developing a web application for data visualization and administration of data-collecting devices.",
  },
];

const ProfessionalTimeline = () => {
  return (
    <Chrono
      items={items}
      mode="VERTICAL"
      disableToolbar={true}
      slideShow
      slideItemDuration={3000}
      cardHeight={120}
      scrollable={false}
      activeItemIndex={5}
      theme={{
        primary: "#FA7E61",
      }}
      classNames={{
        title: "timeline-title",
      }}
      disableNavOnKey
    />
  );
};

export default ProfessionalTimeline;
