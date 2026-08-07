import { CustomTimelineItemProps } from "./subcomponents/CustomTimelineItem";
import { Lang } from "../../../../i18n/languages";
import Tp from "../../../../assets/tp-main-logo-svg.svg";
import Testlio from "../../../../assets/testlio-logo.png";
import Mohanet from "../../../../assets/logo_mohanet.webp";
import ELTE from "../../../../assets/elte_icon.jpg";
import UCPH from "../../../../assets/ucph_logo.png";
import Humboldt from "../../../../assets/humboldt_logo.png";
import AppAkademie from "../../../../assets/app-akademie-logo.png";

interface TimelineTranslations {
  date: string;
  title: string;
  subtitle: string;
  desc?: string;
}

interface TimelineEntry {
  id: string;
  logo: string;
  translations: Record<Lang, TimelineTranslations>;
}

// Projects a language-invariant entry list down to the flat props shape
// CustomTimelineItem expects, for the currently-active language.
export const projectTimelineForLang = (
  entries: TimelineEntry[],
  lang: Lang
): CustomTimelineItemProps[] =>
  entries.map((entry) => ({ ...entry.translations[lang], logo: entry.logo }));

export const professionalEntries: TimelineEntry[] = [
  {
    id: "teleperformance",
    logo: Tp,
    translations: {
      en: {
        date: "04/2024 - 04/2026",
        title: "Trust and Safety Customer Expert | Teleperformance",
        subtitle: "Berlin,Germany | Full-time",
        desc: "Reviewed and evaluated user- and AI-generated content for policy compliance, applying analytical thinking and decision-making to support platform safety and content quality.",
      },
      de: {
        date: "04/2024 - 04/2026",
        title: "Trust and Safety Customer Expert | Teleperformance",
        subtitle: "Berlin, Deutschland | Vollzeit",
        desc: "Überprüfte und bewertete von Nutzern und KI erstellte Inhalte auf Richtlinienkonformität und unterstützte durch analytisches Denken und Entscheidungsfindung die Plattformsicherheit und Inhaltsqualität.",
      },
      hu: {
        date: "04/2024 - 04/2026",
        title: "Trust and Safety Customer Expert | Teleperformance",
        subtitle: "Berlin, Németország | Teljes munkaidő",
        desc: "Felhasználók és mesterséges intelligencia által létrehozott tartalmakat vizsgáltam és értékeltem szabályzatoknak való megfelelés szempontjából, elemző gondolkodással és döntéshozatallal támogatva a platform biztonságát és a tartalom minőségét.",
      },
    },
  },
  {
    id: "testlio",
    logo: Testlio,
    translations: {
      en: {
        date: "09/2022 - 09/2023",
        title: "QA Tester | Testlio Inc.",
        subtitle: "Remote | Freelance",
        desc: "As a freelance QA Tester at Testlio, I earned relevant experience in end-to-end, usability, localization, accessibility, functional and regression testing, while working on different projects in a fully remote, project-based environment.",
      },
      de: {
        date: "09/2022 - 09/2023",
        title: "QA Tester | Testlio Inc.",
        subtitle: "Remote | Freiberuflich",
        desc: "Als freiberuflicher QA-Tester bei Testlio sammelte ich relevante Erfahrung in End-to-End-, Usability-, Lokalisierungs-, Barrierefreiheits-, Funktions- und Regressionstests, während ich in einem vollständig remote arbeitenden, projektbasierten Umfeld an verschiedenen Projekten arbeitete.",
      },
      hu: {
        date: "09/2022 - 09/2023",
        title: "QA Tester | Testlio Inc.",
        subtitle: "Távmunka | Szabadúszó",
        desc: "Szabadúszó QA teszterként a Testlio-nál releváns tapasztalatot szereztem end-to-end, használhatósági, lokalizációs, akadálymentességi, funkcionális és regressziós tesztelésben, miközben különböző projekteken dolgoztam egy teljesen távmunkás, projektalapú környezetben.",
      },
    },
  },
  {
    id: "mohanet-frontend-developer",
    logo: Mohanet,
    translations: {
      en: {
        date: "07/2021 - 08/2022",
        title: "Frontend Developer | MOHAnet",
        subtitle: "Hungary,Budapest | Full-time",
        desc: "As a Frontend Developer, I helped to develop the renewed version of the Monitoringbook Pro, a client-side component of MOHAnet's monitoring and alerting system.",
      },
      de: {
        date: "07/2021 - 08/2022",
        title: "Frontend Developer | MOHAnet",
        subtitle: "Ungarn, Budapest | Vollzeit",
        desc: "Als Frontend-Entwickler half ich bei der Entwicklung der überarbeiteten Version von Monitoringbook Pro, einer clientseitigen Komponente des Monitoring- und Alarmierungssystems von MOHAnet.",
      },
      hu: {
        date: "07/2021 - 08/2022",
        title: "Frontend Developer | MOHAnet",
        subtitle: "Magyarország, Budapest | Teljes munkaidő",
        desc: "Frontend fejlesztőként közreműködtem a Monitoringbook Pro megújult verziójának fejlesztésében, amely a MOHAnet monitorozó és riasztási rendszerének kliensoldali komponense.",
      },
    },
  },
  {
    id: "mohanet-frontend-trainee",
    logo: Mohanet,
    translations: {
      en: {
        date: "02/2021 - 06/2021",
        title: "Frontend Developer Trainee | MOHAnet",
        subtitle: "Hungary,Budapest | Part-time",
        desc: "As a Frontend developer trainee, I learned how to use my previously acquired knowledge to take part in developing a web application for data visualization and administration of data-collecting devices.",
      },
      de: {
        date: "02/2021 - 06/2021",
        title: "Frontend Developer Trainee | MOHAnet",
        subtitle: "Ungarn, Budapest | Teilzeit",
        desc: "Als Frontend-Entwickler-Trainee lernte ich, mein zuvor erworbenes Wissen einzusetzen, um an der Entwicklung einer Webanwendung zur Datenvisualisierung und Verwaltung von Datenerfassungsgeräten mitzuwirken.",
      },
      hu: {
        date: "02/2021 - 06/2021",
        title: "Frontend Developer Trainee | MOHAnet",
        subtitle: "Magyarország, Budapest | Részmunkaidő",
        desc: "Frontend fejlesztő gyakornokként megtanultam alkalmazni a korábban megszerzett tudásomat, hogy részt vegyek egy, az adatgyűjtő eszközök adatvizualizációjára és adminisztrációjára szolgáló webalkalmazás fejlesztésében.",
      },
    },
  },
];

export const educationEntries: TimelineEntry[] = [
  {
    id: "app-akademie",
    logo: AppAkademie,
    translations: {
      en: {
        date: "05/2026 - 01/2027",
        title: "App Akademie",
        subtitle: "Professional Training Programme",
        desc: "Full-time professional training in AI-assisted software engineering. Topics include Git & GitHub, UX/UI, Dart, Flutter, AI-assisted software development, software architecture, collaborative development workflows, and a practical software engineering project. The programme emphasizes modern AI tools, version control, mobile application development, and real-world project experience.",
      },
      de: {
        date: "05/2026 - 01/2027",
        title: "App Akademie",
        subtitle: "Berufliches Ausbildungsprogramm",
        desc: "Vollzeit-Berufsausbildung im Bereich KI-unterstützte Softwareentwicklung. Zu den Themen gehören Git & GitHub, UX/UI, Dart, Flutter, KI-unterstützte Softwareentwicklung, Softwarearchitektur, kollaborative Entwicklungs-Workflows und ein praktisches Softwareentwicklungsprojekt. Das Programm legt besonderen Wert auf moderne KI-Tools, Versionskontrolle, mobile Anwendungsentwicklung und praxisnahe Projekterfahrung.",
      },
      hu: {
        date: "05/2026 - 01/2027",
        title: "App Akademie",
        subtitle: "Szakmai képzési program",
        desc: "Teljes munkaidős szakmai képzés mesterséges intelligencia által támogatott szoftverfejlesztésben. A témák közé tartozik a Git & GitHub, UX/UI, Dart, Flutter, MI-alapú szoftverfejlesztés, szoftverarchitektúra, együttműködésen alapuló fejlesztési munkafolyamatok, valamint egy gyakorlati szoftverfejlesztési projekt. A program hangsúlyt fektet a modern MI-eszközökre, a verziókezelésre, a mobilalkalmazás-fejlesztésre és a valós projekttapasztalatra.",
      },
    },
  },
  {
    id: "humboldt",
    logo: Humboldt,
    translations: {
      en: {
        date: "09/2023 - 02/2024 | Erasmus+",
        title: "Humboldt Universität zu Berlin",
        subtitle: "Erasmus+ Semester abroad",
        desc: "I came to Humboldt for an Erasmus+ semester. I mainly learned about the culture of Germany and especially Berlin, while bettering my German language skills, as well as honing my software developer skills.",
      },
      de: {
        date: "09/2023 - 02/2024 | Erasmus+",
        title: "Humboldt Universität zu Berlin",
        subtitle: "Erasmus+-Auslandssemester",
        desc: "Ich kam für ein Erasmus+-Semester an die Humboldt-Universität. Dabei lernte ich vor allem die Kultur Deutschlands und besonders Berlins kennen, verbesserte meine Deutschkenntnisse und vertiefte gleichzeitig meine Fähigkeiten als Softwareentwickler.",
      },
      hu: {
        date: "09/2023 - 02/2024 | Erasmus+",
        title: "Humboldt Universität zu Berlin",
        subtitle: "Erasmus+ külföldi félév",
        desc: "Egy Erasmus+ félévre érkeztem a Humboldt Egyetemre. Elsősorban Németország, különösen Berlin kultúráját ismertem meg, közben fejlesztettem a némettudásomat, valamint csiszoltam szoftverfejlesztői készségeimet.",
      },
    },
  },
  {
    id: "ucph",
    logo: UCPH,
    translations: {
      en: {
        date: "09/2022 - 09/2023  | Candidate",
        title: "University of Copenhagen",
        subtitle: "Computer Science MSc.",
        desc: "I further developed my reasoning and problem-solving skills, as well as deepened my understanding of algorithms, data structures, and programming language theory. I earned relevant experience in completing projects in an English-speaking academic setting.",
      },
      de: {
        date: "09/2022 - 09/2023  | Kandidat",
        title: "University of Copenhagen",
        subtitle: "Informatik M.Sc.",
        desc: "Ich entwickelte mein logisches Denken und meine Problemlösungsfähigkeiten weiter und vertiefte mein Verständnis von Algorithmen, Datenstrukturen und der Theorie von Programmiersprachen. Ich sammelte relevante Erfahrung bei der Durchführung von Projekten in einem englischsprachigen akademischen Umfeld.",
      },
      hu: {
        date: "09/2022 - 09/2023  | Jelölt",
        title: "University of Copenhagen",
        subtitle: "Számítástechnika MSc",
        desc: "Továbbfejlesztettem a logikus gondolkodásomat és problémamegoldó képességemet, valamint elmélyítettem az algoritmusok, adatstruktúrák és a programozási nyelvek elméletének ismeretét. Releváns tapasztalatot szereztem projektek megvalósításában egy angol nyelvű akadémiai környezetben.",
      },
    },
  },
  {
    id: "elte",
    logo: ELTE,
    translations: {
      en: {
        date: "09/2018 - 07/2021",
        title: "Eötvös Lóránd University",
        subtitle: "Computer Science BSc.",
        desc: "I learned the basics of building, maintaining, developing, and applying software-oriented technological tools and systems alone or in teamwork. I also acquired theoretical knowledge and academic qualifications to continue my studies at the MSc level.",
      },
      de: {
        date: "09/2018 - 07/2021",
        title: "Eötvös Lóránd University",
        subtitle: "Informatik B.Sc.",
        desc: "Ich lernte die Grundlagen des Aufbaus, der Wartung, der Entwicklung und der Anwendung softwareorientierter technologischer Werkzeuge und Systeme, sowohl allein als auch im Team. Zudem erwarb ich theoretisches Wissen und die akademische Qualifikation, um mein Studium auf Master-Niveau fortzusetzen.",
      },
      hu: {
        date: "09/2018 - 07/2021",
        title: "Eötvös Loránd Tudományegyetem",
        subtitle: "Programtervező informatikus BSc",
        desc: "Megismertem a szoftverorientált technológiai eszközök és rendszerek felépítésének, karbantartásának, fejlesztésének és alkalmazásának alapjait, önállóan és csapatban egyaránt. Emellett elméleti tudást és akadémiai képesítést szereztem ahhoz, hogy tanulmányaimat mesterképzési szinten folytathassam.",
      },
    },
  },
];
