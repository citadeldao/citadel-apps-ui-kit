import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames';

import Spinner from './Spinner';
import Icon from './Icon';
import Button from './Button';
import IconButton from './IconButton';

import { replaceComma, replaceZero } from '../helpers/numberFormatter';

import '../../assets/styles/uiKit/input.scss';

const isNumeric = (event) => {
    const specialKeyCodes = [8, 9, 36, 37, 38, 39, 46];
    const excludedKeys = ['/', 'ю'];

    if (event.ctrlKey) {
        return true;
    }

    if (event.keyCode === 46 && event.target.value.split('.').length === 2) {
        return false;
    }

    const keyCode = event.keyCode === 0 ? event.charCode : event.keyCode;

    return (
        (keyCode >= 48 && keyCode <= 57) // top numbers keys
        || (keyCode >= 96 && keyCode <= 105) // num keys
        || (keyCode === 110 || keyCode === 191 || keyCode === 190) // dots
        || keyCode === 46 // delete
        || (specialKeyCodes.includes(event.keyCode) && event.charCode !== event.keyCode)
    ) && !excludedKeys.includes(event.key);
};

const Input = ({
    type = 'text', // text, number, search, amount
    value,
    label,
    placeholder,
    icon,
    disabled = false,
    loading = false,
    readonly = loading,
    name = '',
    error = false,
    pattern = '',
    clearable = false,
    inverted = false,
    action, // text, disabled, onClick
    currency = '',
    className,
    style,
    children,
    onChange = () => {},
    onClear = () => {},
    ...otherProps
}) => {
    const containerRef = useRef(null);
    const inputRef = useRef(null);
    const currencyRef = useRef(null);
    const [val, setVal] = useState(value);
    const [inputStyle, setInputStyle] = useState({});
    const [currencyOffset, setCurrencyOffset] = useState(100);
    const [isPressedNumber, setIsPressedNumber] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const isTypeAmount = type === 'amount';

    const calculateCurrencyPosition = () => {
        if (isTypeAmount && currencyRef.current) {
            const hiddenValue = containerRef.current.querySelector('.input__hidden-value');
            const inputWidth = parseInt(getComputedStyle(containerRef.current).width);
            const currencyWidth = currencyRef.current.offsetWidth;

            hiddenValue.innerHTML = val;
            setInputStyle({ width: `calc(100% - ${currencyWidth}px)` });

            if ((hiddenValue.offsetWidth + currencyWidth) <= inputWidth) {
                setCurrencyOffset(hiddenValue.offsetWidth);
            } else {
                setCurrencyOffset(inputWidth - currencyWidth);
            }
        }
    };

    useEffect(() => {
        // render hidden currency elem for getting width
        if (isTypeAmount && !containerRef.current.querySelector('.input__hidden-value')) {
            const el = document.createElement('span');

            el.classList.add('input__hidden-value');
            containerRef.current.appendChild(el);
            calculateCurrencyPosition();
        }
    }, []);

    useEffect(() => {
        setVal(value);
    }, [value]);

    useEffect(() => {
        if (isTypeAmount) {
            calculateCurrencyPosition();
        }
    }, [val, currency]);

    const showClearIcon = () => {
        if (isTypeAmount && inverted && clearable) {
            return true;
        }

        return (
            children
                ? children?.props?.children?.length
                : !!val?.length
                && (clearable || type === 'search')
        ) && !(disabled);
    };

    const iconName = type === 'search' ? 'search' : icon;

    const customClass = classNames(
        'input',
        `input--type--${type}`,
        {
            'input--focused': isFocused,
            'input--disabled': disabled,
            'input--error': error,
            'input--readonly': readonly,
            'input--clearable': clearable || type === 'search',
            'input--has-icon': !!iconName,
            'input--has-label': !!label,
            'input--hidden': children?.props?.children?.length,
            'input--inverted': inverted,
            'input--has-value': ![null, undefined, ''].includes(val),
        },
        className,
    );

    const handleChange = (e) => {
        let v = e.target.value;
        const isTypeNumber = ['number', 'amount'].includes(type);

        if (isTypeNumber) {
            if (!isPressedNumber) {
                return;
            }

            if (v.split('.').length > 2) {
                setVal(val);
                return;
            }

            v = replaceComma(v);
            v = replaceZero(v);

            const [first, second] = v.split('');

            // replace first 0 if next is number
            if (v.length >= 2 && (first === '0' && !isNaN(second))) {
                v = v.slice(1);
            }
        }

        if (!(new RegExp(pattern, 'g')).test(v)) {
            v = value;
        }

        setIsPressedNumber(false);
        setVal(v);
        onChange(v, name);
    };

    const handleClear = (e) => {
        setVal('');
        onChange('', name);
        onClear(e);
        inputRef.current.focus();
    };

    const handlePaste = (event) => {
        let newVal = '';

        if (isTypeAmount && (Number(val) === 0)) {
            newVal = Number(event.clipboardData.getData('Text')).toString();
            setVal(newVal);
            setVal(newVal);
            onChange(newVal, name);
        }
    }

    return (
        <label
            className={customClass}
            style={style}
        >
            <div className="input__body">
                {(label && type !== 'search') &&
                    <div className="input__label">{label}</div>
                }
                <div className="input__value-container" ref={containerRef}>
                    <input
                        ref={inputRef}
                        value={loading ? '' : val}
                        readOnly={readonly}
                        disabled={disabled}
                        placeholder={loading ? '' : placeholder}
                        style={inputStyle}
                        className="input__input"
                        onChange={handleChange}
                        onKeyDown={e => setIsPressedNumber(isNumeric(e))}
                        onWheel={(e) => e.target.blur()}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onPaste={handlePaste}
                        {...otherProps}
                    />
                    {isTypeAmount && (currency) &&
                        <span
                            ref={currencyRef}
                            className="input__currency"
                            style={{ left: inverted ? null : currencyOffset }}
                        >
                        {currency}
                    </span>
                    }
                    {children && <div className="input__content">{children}</div>}
                </div>
            </div>
            {action && <div className="input__action">
                <Button
                    type="small"
                    disabled={action.disabled || disabled}
                    onClick={action.onClick}
                >
                    {action.text}
                </Button>
            </div>}

            {iconName && !loading &&
                <Icon name={iconName} color="#A8C3E1" className="input__icon"/>
            }
            {showClearIcon() &&
                <IconButton
                    icon="xmark-circle"
                    iconColor="#CC3030"
                    className="input__clear-icon"
                    onClick={handleClear}
                />
            }
            {loading && <Spinner disabled={disabled}/>}
        </label>
    );
};

export default Input;