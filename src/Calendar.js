import 'rc-calendar/assets/index.css';
import React from 'react';
import FullCalendar from 'rc-calendar/lib/FullCalendar';
import { Glyphicon, Button } from 'react-bootstrap';

import 'rc-select/assets/index.css';
import './Calendar.css'
import Select from 'rc-select';

import zhCN from 'rc-calendar/lib/locale/zh_CN';
import enUS from 'rc-calendar/lib/locale/en_US';

import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';

const format = 'YYYY-MM-DD';
const cn = window.location.search.indexOf('cn') !== -1;

const now = moment();
if (cn) {
  now.locale('zh-cn').utcOffset(8);
} else {
  now.locale('en-gb').utcOffset(0);
}

const defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, 'month');

function onSelect(value) {
  console.log('select', value.format(format));
}

export default class Calendar extends React.Component {
  state = {
    type: 'month',
  };

  render() {
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let date = new Date();
    let today = date.getDay();
    let twoDaysTime = (today + 2) % weekdays.length

    return (
      <div className="calendar container-fluid">
        <div className="header">
          <h4>Peek into the future</h4>
          <Glyphicon glyph="calendar" onClick={this.props.calendarDisplay}/>
        </div>

        <div className="day-group">
          <Button onClick={this.props.calendarDisplay} active>Today</Button>
          <Button>Tomorrow</Button>
          <Button>{weekdays[twoDaysTime]}</Button>
        </div>

        <FullCalendar
          Select={Select}
          fullscreen={false}
          onSelect={onSelect}
          defaultValue={now}
          locale={cn ? zhCN : enUS}
        />
      </div>
    );
  }
}
