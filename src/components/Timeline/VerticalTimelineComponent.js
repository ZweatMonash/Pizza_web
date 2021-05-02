import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./TimelineStyle.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import GitHubIcon from "@material-ui/icons/GitHub";
import HouseIcon from "@material-ui/icons/House";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

import React from "react";

const VerticalTimelineComponent = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#f25050", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #f25050" }}
        date="2021 - present"
        dateClassName="dateStyle"
        iconStyle={{ background: "#fc0303", color: "#fff" }}
        icon={<BusinessCenterIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Mechatronics Engineer @ Agerris
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Gatton, QLD</h4>
        <p>
          - Operate and test agricultural robotic platforms in real world farm
          environments
        </p>
        <p>
          - Identify operational corner cases where the current system fails to
          meet performance standards
        </p>
        <p>- Create automated system tests and follow manual test procedures</p>
        <p></p>
        <Button variant="contained" href="https://agerris.com/">
          Explore
        </Button>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Dec 2020"
        dateClassName="dateStyle"
        contentStyle={{ background: "#fc7b03", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #fc7b03" }}
        iconStyle={{ background: "#fc7b03", color: "#fff" }}
        icon={<AccountBalanceIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Graduated with First Class Honours in Electrical Engineering
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Monash University, VIC
        </h4>
        <p>- Dean’s Honors List: 82.877 Weighted Average Mark; GPA: 3.656</p>
        <p>- Monash Summer Reserach Scholarship Holder</p>
        <p></p>
        <Button
          variant="contained"
          href="https://www.monash.edu/study/courses/majors-minors-specialisations/2021/specialisations/electrical-and-computer-systems-engineering-xs0004"
        >
          Explore
        </Button>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Nov 2019"
        dateClassName="dateStyle"
        contentStyle={{ background: "#bab32d", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #bab32d" }}
        iconStyle={{ background: "#bab32d", color: "#fff" }}
        icon={<SearchIcon />}
      >
        <h3 className="vertical-timeline-element-title">Research Assistant</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Monash University, VIC
        </h4>
        <p>- Data Collection and Analysis</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="July 2019"
        dateClassName="dateStyle"
        contentStyle={{ background: "#109401", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #109401" }}
        iconStyle={{ background: "#109401", color: "#fff" }}
        icon={<CalendarTodayIcon />}
      >
        <h3 className="vertical-timeline-element-title">IEEE Events Manager</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Monash University, VIC
        </h4>
        <p>- Raised awareness of the organization’s values and inception</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date=" June 2019"
        dateClassName="dateStyle"
        contentStyle={{ background: "#3192a8", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #3192a8" }}
        iconStyle={{ background: "#1fd1cb", color: "#fff" }}
        icon={<GitHubIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Software/Autonomous Engineer @ Monash Nova Rover
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Monash University, VIC
        </h4>
        <p>
          - Acquired code organization and tracking skills through the use of
          GIT
        </p>
        <p>
          - Developed and implemented Path Planning algorithms, and Path
          Controllers
        </p>
        <p>
          - Created a Gazebo simulation environment to improve safety for
          testing purposes.
        </p>
        <Button variant="contained" href="https://www.novarover.space/">
          Explore
        </Button>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Feb 2019"
        dateClassName="dateStyle"
        contentStyle={{ background: "#1f81d1", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #1f81d1" }}
        iconStyle={{ background: "#1f81d1", color: "#fff" }}
        icon={<HouseIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Moved to Melbourne, Australia
        </h3>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2016 - 2018"
        dateClassName="dateStyle"
        contentStyle={{ background: "#03178a", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #03178a" }}
        iconStyle={{ background: "#2805f0", color: "#fff" }}
        icon={<AccountBalanceIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Commenced my Engineering degree @ Monash Malaysia
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Monash University, Selangor
        </h4>
        <p>- Monash Higher Achiever Award Holder</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Feb 2019"
        dateClassName="dateStyle"
        contentStyle={{ background: "#bd05f5", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #bd05f5" }}
        iconStyle={{ background: "#bd05f5", color: "#fff" }}
        icon={<DirectionsRunIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Left Yangon, Myanmar(Burma)
        </h3>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: "#f5056d", color: "#fff" }}
        icon={<FiberManualRecordIcon />}
      />
    </VerticalTimeline>
  );
};

export default VerticalTimelineComponent;
