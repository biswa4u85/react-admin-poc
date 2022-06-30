import React, { useState, useEffect, Fragment, PureComponent } from 'react';
import { DatePicker, TimePicker, Row, Col, message } from 'antd';
import moment from 'moment';
import styles from './PhoneView.less';
const { RangePicker } = DatePicker;
var ISToffSet = 330; //IST is 5:30; i.e. 60*5+30 = 330 in minutes 
let offset = ISToffSet * 60 * 1000;

const dateFormat = 'YYYY-MM-DD';
const timeFormat = 'HH:mm';

function DateTime(props) {
    let currentDate = new Date()
    currentDate.setDate(currentDate.getDate() - 1)
    const { value, onChange, disabled } = props;
    const [newData, setNewData] = useState([]);
    const [newTimeStart, setNewTimeStart] = useState(new Date());
    const [newTimeEnd, setNewTimeEnd] = useState(new Date());

    useEffect(() => {
        setNewData(value[0] ? [moment.utc(value[0], dateFormat), moment.utc(value[1], dateFormat)] : [])
        setNewTimeStart(value[0] ? `${moment.utc(value[0]).hour()}:${moment.utc(value[0]).minute()}` : "00:00")
        setNewTimeEnd(value[1] ? `${moment.utc(value[1]).hour()}:${moment.utc(value[1]).minute()}` : "00:00")
    }, [value]);

    const handleDate = e => {
        let dateS = moment.utc(e[0]).format(dateFormat)
        let timeS = moment.utc(value[0]).format(timeFormat)
        // let startTime = moment.utc(dateS + ' ' + timeS);
        let startTime = moment.utc(dateS + ' ' + "00:00");
        e[0] = startTime
        let dateE = moment.utc(e[1]).format(dateFormat)
        let timeE = moment.utc(value[1]).format(timeFormat)
        // let EndTime = moment.utc(dateE + ' ' + timeE);
        let EndTime = moment.utc(dateE + ' ' + "00:00");
        e[1] = EndTime
        onChange(e)
    }

    const handleTime = (time, type) => {
        let newData = JSON.parse(JSON.stringify(value))
        if (type == "start") {
            let date = moment.utc(newData[0]).format(dateFormat)
            let newDateTime = moment.utc(date + ' ' + time);
            newData[0] = newDateTime
        } else {
            let date = moment.utc(newData[1]).format(dateFormat)
            let newDateTime = moment.utc(date + ' ' + time);
            newData[1] = newDateTime
        }
        onChange(newData)
    }

    return <Fragment>
        <RangePicker
            value={newData}
            format={dateFormat}
            onChange={e => handleDate(e)}
            disabledDate={d => !d || d.isSameOrBefore(currentDate)}
            placeholder={'Enter start date & end date'}
        />
        <Row>
            <Col span={12}>
                <TimePicker allowClear={false} value={moment.utc(newTimeStart, timeFormat)} minuteStep={15} onChange={(time, timeString) => handleTime(timeString, "start")} format={timeFormat} />
            </Col>
            <Col span={12}>
                <TimePicker allowClear={false} value={moment.utc(newTimeEnd, timeFormat)} minuteStep={15} onChange={(time, timeString) => handleTime(timeString, "end")} format={timeFormat} />
            </Col>
        </Row>
    </Fragment>
}

export default DateTime
