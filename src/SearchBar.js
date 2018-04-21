import React, { Component } from 'react';
import { Glyphicon, InputGroup, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './SearchBar.css'

export default class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <InputGroup>
          <InputGroup.Addon onClick={this.props.showSidebar}><Glyphicon glyph="align-justify" /></InputGroup.Addon>
          <FormControl type="text" placeholder="Search local"/>
          <InputGroup.Addon onClick={this.props.showingCalendar}><Glyphicon glyph="calendar" /></InputGroup.Addon>
        </InputGroup>
      </div>
    )
  }
}

SearchBar.propTypes = {
  showingCalendar: PropTypes.func,
  showSidebar: PropTypes.func
};

