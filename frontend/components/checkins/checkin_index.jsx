import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';

import CheckinItem from './checkinItem'


class CheckinIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchAllCheckins();
  }

  render () {

    const { checkins, deleteCheckin } = this.props

    return (
      <div>

          <div className="checkinsIdx">
              <div className="checkinList">
                {checkins.map(checkin => <CheckinItem key={checkin.id} checkin={checkin} deleteCheckin={deleteCheckin} />)}
                <h2 id="feed">Checkin Feed Coming Soon!</h2>
              </div>
            </div>

      </div>

    );
  }

}

export default CheckinIndex;
