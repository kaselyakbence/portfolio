import { Lang } from "../../../../i18n/languages";
import asw_cp from "../../../../assets/certs/aws-cp.png";
import istqb_foundational from "../../../../assets/certs/istqb-ctfl.png";

interface CertTranslations {
  name: string;
  org: string;
  date: string;
}

interface CertEntry {
  id: string;
  logo: string;
  link: string;
  translations: Record<Lang, CertTranslations>;
}

export interface ProjectedCert extends CertTranslations {
  logo: string;
  link: string;
}

// Projects the language-invariant cert list down to the flat props shape
// CertItem expects, for the currently-active language.
export const projectCertsForLang = (
  entries: CertEntry[],
  lang: Lang
): ProjectedCert[] =>
  entries.map((entry) => ({
    ...entry.translations[lang],
    logo: entry.logo,
    link: entry.link,
  }));

export const certificationEntries: CertEntry[] = [
  {
    id: "aws-cloud-practitioner",
    logo: asw_cp,
    link: "https://www.credly.com/badges/f0cdd85f-dc39-4e57-9315-0a22467e1965/public_url",
    translations: {
      en: {
        name: "Certified Cloud Practitioner",
        org: "Amazon Web Services",
        date: "May 2025",
      },
      de: {
        name: "Certified Cloud Practitioner",
        org: "Amazon Web Services",
        date: "Mai 2025",
      },
      hu: {
        name: "Certified Cloud Practitioner",
        org: "Amazon Web Services",
        date: "2025. május",
      },
    },
  },
  {
    id: "istqb-ctfl",
    logo: istqb_foundational,
    link: "https://atsqa.org/certified-testers/profile/41704efe023244fc9cff4609724a5013",
    translations: {
      en: {
        name: "Certified Tester Foundation Level",
        org: "ASTQB - ISTQB in the U.S.",
        date: "March 2025",
      },
      de: {
        name: "Certified Tester Foundation Level",
        org: "ASTQB - ISTQB in the U.S.",
        date: "März 2025",
      },
      hu: {
        name: "Certified Tester Foundation Level",
        org: "ASTQB - ISTQB in the U.S.",
        date: "2025. március",
      },
    },
  },
];
