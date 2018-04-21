import React, { Component } from 'react';
import './App.css';
import Calendar from './Calendar';
import SearchBar from './SearchBar';
import Sidebar from './Sidebar';
import { Fade } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showingSidebar: false, showingCalendar: false };
    this.handleCalendar = this.handleCalendar.bind(this);
    this.showSidebar = this.showSidebar.bind(this);
    this.hideSidebar = this.hideSidebar.bind(this);
  }

  handleCalendar() {
    this.setState(prevState => {
      return {showingCalendar: !prevState.showingCalendar}
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
    let opacity = this.state.showingSidebar ? 'opacity' : ''
    return (
      <div className="App">
        <Fade in={this.state.showingSidebar} timeout={200}>
          <div>
            <Sidebar />
          </div>
        </Fade>
        <div className="calendar-container">
          <Fade in={this.state.showingCalendar} timeout={200}>
            <div>
              <Calendar />
            </div>
          </Fade>
        </div>
        <div className="container">
          <SearchBar showingCalendar={this.handleCalendar} showSidebar={this.showSidebar} />
        </div>
        <div className={opacity} onClick={this.hideSidebar}></div>
      </div>
    );
  }
}

export default App;
