import { AppContext } from "contexts/app";
import { useContext } from "react";

import "./Card.css";

const EventCard = ({ name, desc, img, start = {}, end = {}, gform, rules, type = "" }) => {
  const { session } = useContext(AppContext);
  const options = { hour: "2-digit", minute: "2-digit" };
  const startDate = new Date(start.seconds * 1000).toDateString();
  const endDate = new Date(end.seconds * 1000).toDateString();
  const startTime = new Date(start.seconds * 1000).toLocaleTimeString("en-US", options);
  const endTime = new Date(end.seconds * 1000).toLocaleTimeString("en-US", options);
  const btnProps = session.accessToken ? { href: gform, target: "_blank" } : { href: "/pass" };
  return (
    <div className="event-card card mx-4 mt-2 mb-5 p-0 rounded">
      <div className="row">
        <div className="">
          <img src={img} alt={desc} className="card-img-left event-img" />
        </div>
        <div className="">
          <div className="card-body m-auto text-center">
            <div className="name card-title text-uppercase text-white fw-bold mb-5">{name}</div>
            <div className="date-start">
              <span className="text-white">Starts: </span>
              {startDate} {startTime}
            </div>
            <div className="date-start">
              <span className="text-white">Ends: </span>
              {endDate} {endTime}
            </div>
            <div className="mt-5 description">{desc}</div>
            <a
              className="mx-1 btn register-button rounded-pill bg-color-aquagreen my-2"
              rel="noreferrer noopener"
              {...btnProps}
            >
              {type || "Register Now"}
            </a>
            {rules && (
              <a
                className="mx-1 btn register-button rounded-pill btn-info my-2"
                target="_blank"
                rel="noreferrer noopener"
                href={rules}
              >
                Rules
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
