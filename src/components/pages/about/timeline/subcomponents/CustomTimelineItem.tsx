import "./customtimelineitem.scss";

export interface CustomTimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  desc?: string;
  logo: string;
}

const CustomTimelineItem = ({
  title,
  subtitle,
  date,
  desc,
  logo,
}: CustomTimelineItemProps) => {
  return (
    <div className="custom-item">
      <div className="item-header">
        <div className="item-header-left">
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
          <p className="item-date">{date}</p>
        </div>
        <div className="item-header-right">
          <img
            src={logo}
            alt={`${title} logo`}
            width={"100px"}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      {desc && <p className="item-description">{desc}</p>}
    </div>
  );
};

export default CustomTimelineItem;
