import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames';

import Input from './Input';
import Icon from './Icon';

import { isUrl } from '../helpers/url';

import '../../assets/styles/uiKit/autocomplete.scss';

const Autocomplete = ({
    multiple = false,
    value,
    options = [],
    label,
    iconColor = '#6B93C0',
    placeholder,
    icon,
    loading = false,
    disabled = false,
    readonly = false,
    labelKey = 'label',
    valueKey = 'value',
    iconKey = 'icon',
    className,
    style,
    searchFn = (option, inputValue) => option[valueKey]?.toLowerCase().includes(inputValue?.toLowerCase()),
    iconResolver = (option) => option[iconKey]?.toLowerCase(),
    optionTemplate,
    onChange = () => {},
}) => {
    const [expanded, setExpanded] = useState(false);
    const [val, setVal] = useState(value);
    const [inputVal, setInputVal] = useState(value);
    const [multipleInputVal, setMultipleInputVal] = useState('');
    const [listening, setListening] = useState(false);

    const menuRef = useRef(null);
    const searchInput = useRef(null);

    const customClass = classNames(
        'autocomplete',
        {
            'autocomplete--expanded': expanded,
            'autocomplete--disabled': disabled,
            'autocomplete--multiple': multiple,
            'autocomplete--readonly': loading || readonly,
        },
        className,
    );

    const iconTemplate = (option, className) => {
        return isUrl(option[iconKey])
            ? <img
                src={option[iconKey]}
                alt={option[labelKey]}
                className={className}
            />
            : <Icon
                name={iconResolver(option)}
                color={iconColor}
                className={className}
            />;
    };

    const optionItemTemplate = (option) => {
        return (
            <div
                key={option[valueKey]}
                onClick={(e) => setSelected(option[valueKey], e)}
                className={classNames(
                    'autocomplete-option',
                    { 'autocomplete-option--active': val === option[valueKey] },
                )}
            >
                {optionTemplate
                    ? optionTemplate(option)
                    : <>
                        {option[iconKey] && iconTemplate(option, 'autocomplete-option__icon')}
                        {option[labelKey]}
                    </>
                }
            </div>
        );
    }

    const filteredOptions = () => {
        let filtered;

        if (multiple) {
            let multipleFiltered = multipleInputVal
                ? options?.filter(option => searchFn(option, multipleInputVal))
                : options;

            filtered = !!val.length
                ? multipleFiltered.filter(option => !val.includes(option[valueKey]))
                : multipleFiltered;
        } else {
            filtered = inputVal
                ? options?.filter(option => searchFn(option, inputVal))
                : options;
        }

        return filtered;
    };

    useEffect(() => {
        setVal(value);

        if (!multiple) {
            setInputVal(value);
        }
    }, [value]);

    const listenForOutsideClicks = (listening, setListening, menuRef, setExpanded) => {
        return () => {
            if (listening) return;
            if (!menuRef.current) return;
            setListening(true);

            [`click`, `touchstart`].forEach((type) => {
                document.addEventListener(`click`, (evt) => {
                    const cur = menuRef.current;
                    const node = evt.target;

                    if (cur.contains(node)) return;
                    setExpanded(false);
                    setMultipleInputVal('');
                });
            });
        };
    };

    // Hide Dropdown on Outside Click
    // eslint-disable-next-line
    useEffect(listenForOutsideClicks(listening, setListening, menuRef, setExpanded));

    const handleChangeInput = (value) => {
        if (!multiple) {
            setInputVal(value);
            setVal(value);
            onChange(value);
        } else {
            setInputVal(value);
        }

        if (!multiple && value) {
            const filtered = options?.filter(option => searchFn(option, multiple ? multipleInputVal : inputVal));

            setExpanded(!!filtered.length);
        }
    };

    const handleChangeMultipleInput = (value) => {
        setMultipleInputVal(value);
    };

    const handleClickOnInput = (e) => {
        if (!disabled && !loading && filteredOptions().length) {
            setExpanded(!expanded);
        }

        if (multiple) {
            setTimeout(() => {
                searchInput.current.focus();
            });
        }
    };

    const setSelected = (selectedValue, e) => {
        setInputVal(multiple ? '' : selectedValue);
        setVal(multiple ? [...val, selectedValue] : selectedValue);
        onChange(multiple ? [...val, selectedValue] : selectedValue);
        setExpanded(false);
    };

    const removeSelected = (item, e) => {
        e.preventDefault();
        const newVal = val?.filter(v => v.toLowerCase() !== item.toLowerCase());

        setVal(newVal);
        onChange(newVal);
    };

    const getOptionBValue = (value) => {
        return options?.find(o => o[valueKey]?.toLowerCase() === value?.toLowerCase()) || {};
    };

    const handleClear = (e) => {
        e.preventDefault();
        setVal(multiple ? [] : '');
        onChange(multiple ? [] : '');
    };

    return (
        <div
            ref={menuRef}
            className={customClass}
            tabIndex={0}
            style={style}
        >
            <Input
                icon={multiple ? null : icon}
                value={inputVal}
                className="autocomplete__control"
                readonly={readonly || multiple}
                placeholder={placeholder}
                label={label}
                clearable={true}
                disabled={disabled}
                loading={loading}
                onChange={handleChangeInput}
                onClick={handleClickOnInput}
                onClear={handleClear}
            >
                {(multiple && !!val.length) &&
                    <div className="autocomplete__values">
                        {val.map(item => (
                            <span
                                key={item}
                                className="autocomplete-value"
                            >
                                {getOptionBValue(item)[iconKey]
                                    && iconTemplate(getOptionBValue(item), 'autocomplete-value__icon')
                                }
                                <span className="autocomplete-value__text">{getOptionBValue(item)[valueKey]}</span>
                                <Icon
                                    name="xmark"
                                    className="autocomplete-value__close"
                                    onClick={(e) => removeSelected(item, e)}
                                />
                            </span>
                        ))}
                    </div>
                }
            </Input>
            {multiple
                ? <div className="autocomplete-options">
                    <input
                        ref={searchInput}
                        value={multipleInputVal}
                        type="text"
                        className="autocomplete-options__input"
                        onWheel={(e) => e.target.blur()}
                        onChange={(e) => handleChangeMultipleInput(e.target.value, e)}
                    />
                    <div className="autocomplete-options__wrapper">
                        {!!filteredOptions().length
                            ? filteredOptions()?.map((option, i) => optionItemTemplate(option))
                            : <div className="autocomplete-options__placeholder">No data</div>
                        }
                    </div>
                    </div>

            : (!!filteredOptions().length) &&
                <div className="autocomplete-options">
                    <div className="autocomplete-options__wrapper">
                        {filteredOptions()?.map((option, i) => optionItemTemplate(option))}
                    </div>
                </div>
            }
        </div>
    );
};

export default Autocomplete;