import React from "react";
import { TimelineContainer, TimelineH1, Time } from "./TimelineElements";
import VerticalTimelineComponent from "./VerticalTimelineComponent";
const Timeline = () => {
  return (
    <>
      <TimelineContainer>
        <TimelineH1>My Journey</TimelineH1>
        <VerticalTimelineComponent />
      </TimelineContainer>
    </>
  );
};

export default Timeline;
