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
    let weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    return (
      <div className="calendar container-fluid">
        <div className="header">
          <h4>Peek into the future</h4>
          <Glyphicon glyph="calendar" onClick={this.props.calendarDisplay}/>
        </div>
        <Button>Today</Button> <Button>Tomorrow</Button>
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
