import React from 'react';
import { Link } from 'react-router-dom';

const CheckinItem = ({ checkin }) => (
  <li className="checkinIndexItem">
    <span>{checkin.user}</span>
    <span>{checkin.dessert}</span>
    <span>{checkin.comment}</span>

    <span>Rating:{checkin.rating}</span>
    <img id="checkinImg" src={checkin.image_url}/>
  </li>
);

export default CheckinItem
