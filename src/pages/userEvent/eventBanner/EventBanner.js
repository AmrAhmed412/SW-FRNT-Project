import React from "react";
import { useState, useEffect } from "react";

import classes from "./eventbanner.module.css";
import { Link, useParams } from "react-router-dom";
import bannercurve from "../../../assets/imgs/banner/eventbanner.svg";
import event from "../../../assets/imgs/banner/event2.jpg";
import mobimgs from "../../../assets/data/BannerLabImgs";

/**
 * Component that renders banner of Event page attendee view
 *
 * @component
 * return(
 * <EventBanner image="" />
 * )
 */

const EventBanner = ({ image }) => {
  return (
    <div
      className={classes.eventbannercontainer}
      style={{
        backgroundImage: "url(" + bannercurve + ")",
      }}>
      <div className={classes.imgbackgroundcontainer}>
        <div
          className={classes.imgbackground}
          style={{
            backgroundImage: "url(" + image + ")",
          }}>
          <div className={classes.eventimgcontainer}>
            <img className={classes.eventimg} src={image} alt="Event" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBanner;
