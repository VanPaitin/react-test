import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import utownLogo from './utown.jpeg';
import './Sidebar.css'

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <div className="sidebar-sections" style={{textAlign: "center", border: 'none'}}>
          <img className="logo" src={utownLogo} alt="logo"/>
        </div>
        <div className="li-container">
          <div className="sidebar-sections">
            <ul>
              <li><Glyphicon glyph="user" /> &nbsp; Your Profile</li>
              <li><Glyphicon glyph="bell" /> &nbsp; Notifications</li>
              <li><Glyphicon glyph="star" /> &nbsp; Favorites</li>
            </ul>
          </div>
          <div className="sidebar-sections">
            <ul>
              <li><h4>Special Maps Near You <Glyphicon glyph="menu-down" style={{float: "right", marginRight: "1em"}}/></h4></li>
              <li><Glyphicon glyph="cd" className="small-detail"/> &nbsp; <div>Hop Jam Fest<br/><em><small>May 1-3</small></em></div></li>
              <li><Glyphicon glyph="cd" /> &nbsp; Visit Tulsa's Must See Attractions</li>
            </ul>
          </div>
          <div className="sidebar-sections">
            <ul>
              <li><Glyphicon glyph="comment" /> &nbsp; Send Us Feeback</li>
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
      </div>
    )
  }
}
