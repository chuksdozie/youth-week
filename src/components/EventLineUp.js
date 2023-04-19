import React from "react";
import { MdOutlineFaceRetouchingOff } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const EventLineUp = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#4287f5", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="8th May, 2023"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<MdOutlineFaceRetouchingOff />}
      >
        <h3 className="vertical-timeline-element-title">Monday</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p> */}
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="10th May, 2023"
        contentArrowStyle={{ borderRight: "7px solid  #f5a742" }}
        contentStyle={{ background: "#f5a742", color: "#fff" }}
        iconStyle={{ background: "#f5a742", color: "#fff" }}
        icon={<MdOutlineFaceRetouchingOff />}
      >
        <h3 className="vertical-timeline-element-title">Wednesday</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online
          Marketing
        </p> */}
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="11th May, 2023"
        contentArrowStyle={{ borderRight: "7px solid  #c542f5" }}
        contentStyle={{ background: "#c542f5", color: "#fff" }}
        iconStyle={{ background: "#c542f5", color: "#fff" }}
        icon={<MdOutlineFaceRetouchingOff />}
      >
        <h3 className="vertical-timeline-element-title">Thursday</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
        <p>User Experience, Visual Design</p> */}
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#4287f5", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="12th May, 2023"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<MdOutlineFaceRetouchingOff />}
      >
        <h3 className="vertical-timeline-element-title">Friday</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p> */}
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="13th May, 2023"
        contentArrowStyle={{ borderRight: "7px solid  #f5a742" }}
        contentStyle={{ background: "#f5a742", color: "#fff" }}
        iconStyle={{ background: "#f5a742", color: "#fff" }}
        icon={<MdOutlineFaceRetouchingOff />}
      >
        <h3 className="vertical-timeline-element-title">Saturday</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online
          Marketing
        </p> */}
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="14th May, 2023"
        contentArrowStyle={{ borderRight: "7px solid  #c542f5" }}
        contentStyle={{ background: "#c542f5", color: "#fff" }}
        iconStyle={{ background: "#c542f5", color: "#fff" }}
        icon={<MdOutlineFaceRetouchingOff />}
      >
        <h3 className="vertical-timeline-element-title">Sunday</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
        <p>User Experience, Visual Design</p> */}
      </VerticalTimelineElement>
      {/* <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="14th May, 2023"
        contentArrowStyle={{ borderRight: "7px solid  rgb(16, 204, 82)" }}
        contentStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={<MdOutlineFaceRetouchingOff />}
      >
        <h3 className="vertical-timeline-element-title">The End!</h3>
      </VerticalTimelineElement> */}
    </VerticalTimeline>
  );
};

export default EventLineUp;
