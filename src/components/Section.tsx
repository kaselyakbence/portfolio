import "./section.scss";

interface SectionProps {
  id: string;
  children: React.ReactNode;
}

const Section = ({ id, children }: SectionProps) => {
  return (
    <section id={id} className="app-section">
      {children}
    </section>
  );
};

export default Section;
