import React, { Component } from 'react';
import './App.css';
import Calendar from './Calendar';
import SearchBar from './SearchBar';
import Sidebar from './Sidebar';
import background from './map-google.jpg';
import { Collapse, Fade } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showingSidebar: false, showingCalendar: false };
    this.handleCalendar = this.handleCalendar.bind(this);
    this.handleSidebar = this.handleSidebar.bind(this);
    this.showSidebar = this.showSidebar.bind(this);
    this.hideSidebar = this.hideSidebar.bind(this);
  }

  handleCalendar() {
    this.setState(prevState => {
      return {showingCalendar: !prevState.showingCalendar}
    })
  }

  handleSidebar() {
    this.setState(prevState => {
      return {showingSidebar: !prevState.showingSidebar}
    })
  }

  showSidebar(e) {
    e.stopPropagation();
    this.setState({showingSidebar: true, showingCalendar: false})
  }

  hideSidebar() {
    this.setState({showingSidebar: false})
  }

  render() {
    return (
      <div style={{backgroundImage: `url(${background})`}}>
        <Fade in={this.state.showingSidebar}>
          <div>
            <Sidebar />
          </div>
        </Fade>
        <div className="calendar-container">
          <Fade in={this.state.showingCalendar}>
            <div>
              <Calendar />
            </div>
          </Fade>
        </div>
        <div className="container" onClick={this.hideSidebar}>
          <SearchBar showingCalendar={this.handleCalendar} showSidebar={this.showSidebar} />
        </div>
      </div>
    );
  }
}

export default App;
