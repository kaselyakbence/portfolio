import { Chrono } from "react-chrono";
import CustomTimelineItem, {
  CustomTimelineItemProps,
} from "./CustomTimelineItem";

interface CustomTimelineProps {
  items: CustomTimelineItemProps[];
}

const CustomTimeline = ({ items }: CustomTimelineProps) => {
  return (
    <Chrono
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
    >
      {items.map((item) => (
        <CustomTimelineItem {...item} />
      ))}
    </Chrono>
  );
};

export default CustomTimeline;
