import React, { Component } from 'react';
import './App.css';
import Calendar from './Calendar';
import SearchBar from './SearchBar';
import Sidebar from './Sidebar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showingSidebar: false, showingCalendar: false };
    this.handleCalendar = this.handleCalendar.bind(this);
    this.handleSidebar = this.handleSidebar.bind(this);
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

  render() {
    return (
      <div className="App">
        {this.state.showingCalendar && <Calendar />}
        {this.state.showingSidebar && <Sidebar />}
        <SearchBar showingCalendar={this.handleCalendar} showingSidebar={this.handleSidebar} />
      </div>
    );
  }
}

export default App;
