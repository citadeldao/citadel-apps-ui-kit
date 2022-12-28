import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker, { utils } from '@amir04lm26/react-modern-calendar-date-picker'; // TODO - temporary, waiting for update `react-modern-calendar-datepicker`
import classNames from 'classnames';
import moment from 'moment';
import Icon from './Icon';

import '@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css';
import '../../assets/styles/uiKit/datepicker.scss';

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

const getValueByDate = (date, format) => {
    if (date) {
        const { year, month, day } = date;
        return moment(`${year}-${month}-${day}`, 'YYYY-MM-DD').format(format);
    }

    return moment().format(format);
};

const DatePicker = ({
    date = '',
    label = 'Select Date',
    format = 'YYYY-MM-DD',
    min,
    max,
    disabled,
    className,
    style,
    onChange = () => {},
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [datepickerDate, setDatepickerDate] = useState(getDateByValue(date, format));
    const [value, setValue] = useState(getValueByDate(datepickerDate, format));

    const handleChangeDate = (date) => {
        setDatepickerDate(date);
        setValue(getValueByDate(date, format));
        onChange(getValueByDate(date, format));
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
                        className="input__input"
                        readOnly
                        ref={ref}
                        type="text"
                        disabled={disabled}
                        value={moment(value, format).format(format)}
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
            value={datepickerDate}
            onChange={handleChangeDate}
            renderInput={renderCustomInput} // render a custom input
            wrapperClassName="datepicker"
            calendarClassName="datepicker-calendar"
            colorPrimary="#1A53F0"
            colorPrimaryLight="#e1edfc"
            minimumDate={min && getDateByValue(min)}
            maximumDate={max && getDateByValue(max)}
            calendarPopperPosition="bottom"
        />
    );
};

DatePicker.propTypes = {
    date: PropTypes.string,
    label: PropTypes.string,
    format: PropTypes.string,
    min: PropTypes.string,
    max: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default DatePicker;