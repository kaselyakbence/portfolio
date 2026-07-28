import "./customtimeline.scss";
import CustomTimelineItem, {
  CustomTimelineItemProps,
} from "./CustomTimelineItem";

interface CustomTimelineProps {
  items: CustomTimelineItemProps[];
}

const CustomTimeline = ({ items }: CustomTimelineProps) => {
  return (
    <ul className="custom-timeline">
      {items.map((item, i) => (
        <li className="custom-timeline__row" key={item.title + i}>
          <div className="custom-timeline__point" />
          <div className="custom-timeline__card">
            <CustomTimelineItem {...item} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CustomTimeline;
