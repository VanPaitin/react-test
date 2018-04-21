import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import utownLogo from './utown.jpeg';
import './Sidebar.css'

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <img className="logo" src={utownLogo} alt="logo"/>
        <div className="sidebar-sections">
          <ul>
            <li><Glyphicon glyph="user" /> Your Profile</li>
            <li><Glyphicon glyph="bell" /> Notifications</li>
            <li><Glyphicon glyph="star" /> Favorites</li>
          </ul>
        </div>
        <div className="sidebar-sections">
          <h3>Special Maps Near You <Glyphicon glyph="menu-down" /></h3>
          <ul>
            <li>Hop Jam Fest <small>May 1-3</small></li>
            <li>Visit Tulsa's Must See Attractions</li>
          </ul>
        </div>
        <div className="sidebar-sections">
          <ul>
            <li><Glyphicon glyph="comment" /> Send Us Feeback</li>
          </ul>
        </div>
        <div className="sidebar-sections">
          <ul>
            <li>Settings</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li><a href="/#">Log Out</a></li>
          </ul>
        </div>
      </div>
    )
  }
}
