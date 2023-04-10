import React from "react";
import { useState, useEffect } from "react";
import EventCard from "../event card/EventCard";
import CardInfo from "../../assets/data/eventsData";
import classes from "./eventList.module.css";
import axios from "../../requests/axios";
import routes from "../../requests/routes";
import { resolvePath } from "react-router-dom";
import eventImage1 from "../../assets/imgs/events/event1.png";
import eventImage2 from "../../assets/imgs/events/event1.png";
import moment from "moment";

const EventList = () => {
  const [Eventcards,SetEventcards] = useState([]);
  async function getEventCards()
  {
    let response = "";
    try
    {
      response = await axios.get(routes.events);
      SetEventcards(response.data);
      return (response.data) ;
    }
    catch(error)
    {
      if (error.response)
      {
        return error.response;
      }
    }
  }
useEffect(() => {getEventCards(Eventcards);}
);
function formatDate(date)
{
    return(date?date.slice(0,10):null)
}
  return (
    <div>
      <div className={classes.secheader}>
        <h3>Events in Al Qahirah</h3>
      </div>
      <div className={classes.list}>
        {Eventcards.map((card) => (
          <EventCard
            id={card._id}
            key={card.id}
            img={card.image}
            title={card.name}
            time={moment(card.startDate).format("MMMM Do YYYY")}
            location={card.address1}
            price={card.price}
            companyName={card.venueName}
            followersNo={card.followersNo}
          />
        ))}
      </div>
      <div className={classes.moreBtn}>
        <button type="button">See more</button>
      </div>
    </div>
  );
};

export default EventList;
