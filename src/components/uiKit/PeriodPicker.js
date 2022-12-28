import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker, { utils } from '@amir04lm26/react-modern-calendar-date-picker'; // TODO - temporary, waiting for update `react-modern-calendar-datepicker`
import classNames from 'classnames';
import moment from 'moment';
import Icon from './Icon';

import '../../assets/styles/uiKit/datepicker.scss';
import '@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css';
  
const getDateByValue = (value, format) => {
    if (value) {
        return {
            year: moment(value, format).year(),
            month: moment(value, format).month() + 1,
            day: moment(value, format).date(),
        };
    }

    return utils().getToday();
};

const getRangesValueByDate = (date, format) => {
    if(date?.from == null || date?.to === null) {
        return {
            from: '',
            to: ''
        }
    }
    if (date?.from || date?.to) {
        return {
            from: moment(`${date?.from?.year}-${date?.from?.month}-${date?.from?.day}`, 'YYYY-MM-DD').format(format),
            to: moment(`${date?.to?.year}-${date?.to?.month}-${date?.to?.day}`, 'YYYY-MM-DD').format(format)
        }
    }
};

const PeriodPicker = ({
    date = {},
    label = 'Select Date',
    format = 'YYYY-MM-DD',
    disabled,
    className,
    style,
    min,
    max,
    onChange = () => {},
}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedStartDate, setSelectedStartDate] = useState(getDateByValue(date?.from, format));
    const [selectedEndDate, setSelectedEndDate] = useState(getDateByValue(date?.to, format));

    const defaultRange = {
        from: selectedStartDate,
        to: selectedEndDate,
    };

    const [selectedDayRange, setSelectedDayRange] = useState(defaultRange);
    const [rangeDate, setRangeDate] = useState(getRangesValueByDate(selectedDayRange, format));

    const handleChange = (date) => {
        setSelectedStartDate(getDateByValue(date?.from, format))
        setSelectedEndDate(getDateByValue(date?.to, format))
        setSelectedDayRange(date)
        setRangeDate(getRangesValueByDate(date, format))
        onChange(getRangesValueByDate(date, format));
    };

    // render regular HTML input element
    const renderCustomInput = ({ ref }) => {
        return (
            <label
                className={classNames('input', { 'input--disabled': disabled }, className)}
                style={style}
            >
                <div className="input__body">
                    <span className="input__label">{label}</span>
                    <input
                        readOnly
                        value={`${rangeDate?.from} — ${rangeDate?.to}`}
                        ref={ref}
                        type="text"
                        disabled={disabled}
                        className="input__input"
                        onFocus={() => {setIsOpen(true)}}
                        onBlur={() => setIsOpen(false)}
                    />
                </div>
                <Icon name="calendar" color={isOpen ? '#3A5EE6' : '#A8C3E1'} width="32"/>
            </label>
        );
    };

    return (
        <ReactDatePicker
            value={selectedDayRange}
            onChange={handleChange}
            renderInput={renderCustomInput}
            minimumDate={min && getDateByValue(min)}
            maximumDate={max && getDateByValue(max)}
            wrapperClassName="datepicker"
            calendarClassName="datepicker__calendar"
            colorPrimary="#1A53F0"
            calendarPopperPosition="bottom"
            calendarRangeStartClassName='range-start'
            calendarRangeEndClassName='range-end'
            calendarRangeBetweenClassName='range-between'
        />
    );
};

PeriodPicker.propTypes = {
    date: PropTypes.object,
    label: PropTypes.string,
    format: PropTypes.string,
    disabled: PropTypes.bool,
    min: PropTypes.string,
    max: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default PeriodPicker;