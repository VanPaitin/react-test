import 'rc-calendar/assets/index.css';
import React from 'react';
import FullCalendar from 'rc-calendar/lib/FullCalendar';

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
    return (
      <div className="calendar">
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
