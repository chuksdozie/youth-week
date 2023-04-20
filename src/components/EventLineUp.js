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
        date="8th May, 2023 - 5:30pm"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<MdOutlineFaceRetouchingOff />}
      >
        <h3 className="vertical-timeline-element-title">Monday</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Church Auditorium
        </h4>
        <p>
          Home Fellowship Preparatoty - Youths and teenagers are encouraged to
          attend to represent their home fellowships.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="10th May, 2023 - 6pm"
        contentArrowStyle={{ borderRight: "7px solid  #f5a742" }}
        contentStyle={{ background: "#f5a742", color: "#fff" }}
        iconStyle={{ background: "#f5a742", color: "#fff" }}
        icon={<MdOutlineFaceRetouchingOff />}
      >
        <h3 className="vertical-timeline-element-title">Wednesday</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Various Home Fellowship Centers
        </h4>
        <p>
          Home Fellowship - To be anchored by youths and teenagers in their
          various home fellowship centers.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="11th May, 2023 - 5pm"
        contentArrowStyle={{ borderRight: "7px solid  #c542f5" }}
        contentStyle={{ background: "#c542f5", color: "#fff" }}
        iconStyle={{ background: "#c542f5", color: "#fff" }}
        icon={<MdOutlineFaceRetouchingOff />}
      >
        <h3 className="vertical-timeline-element-title">Thursday</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Church Auditorium
        </h4>
        <p>Interactive Session on Friendships</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#4287f5", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="12th May, 2023 - 5pm"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<MdOutlineFaceRetouchingOff />}
      >
        <h3 className="vertical-timeline-element-title">Friday</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Church Auditorium
        </h4>
        <p>Prayers</p>
        <p>Theme: Pray until something happens.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="13th May, 2023 - 10am"
        contentArrowStyle={{ borderRight: "7px solid  #f5a742" }}
        contentStyle={{ background: "#f5a742", color: "#fff" }}
        iconStyle={{ background: "#f5a742", color: "#fff" }}
        icon={<MdOutlineFaceRetouchingOff />}
      >
        <h3 className="vertical-timeline-element-title">Saturday</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Location not specified yet
        </h4>
        <p>
          Picnic - Hookup sessions, Indoor and outdoor games, prizes and lots
          more
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="14th May, 2023 - 7am"
        contentArrowStyle={{ borderRight: "7px solid  #c542f5" }}
        contentStyle={{ background: "#c542f5", color: "#fff" }}
        iconStyle={{ background: "#c542f5", color: "#fff" }}
        icon={<MdOutlineFaceRetouchingOff />}
      >
        <h3 className="vertical-timeline-element-title">Sunday</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Church Auditorium
        </h4>
        <p>Thanksgiving Service</p>
        <p>
          The word, Drama, Worship, Raffle draw, lot&apos;s of prizes to be won
          ...
        </p>
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
