import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import Icon from './Icon';
import Spinner from './Spinner';

import { isUrl } from '../helpers/url';

import '../../assets/styles/uiKit/select.scss';

const Select = ({
    value,
    options = [],
    label,
    iconColor = '#6B93C0',
    placeholder,
    loading = false,
    disabled = false,
    readonly = false,
    valueKey = 'value',
    labelKey = 'label',
    iconKey = 'icon',
    className,
    style,
    iconResolver = (option) => option[iconKey]?.toLowerCase(),
    optionTemplate,
    valueTemplate,
    onChange = () => {},
    onClick = () => {},
}) => {
    const [val, setVal] = useState(value);
    const [expanded, setExpanded] = useState(false);

    const selectedOption = options.find(o => o[valueKey] === val) || {};

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
            />
    }
    const customClass = classNames(
        'select',
        {
            'select--expanded': expanded,
            'select--disabled': disabled,
            'select--readonly': loading || readonly,
            'select--has-label': !!label,
        },
        className,
    );

    const setSelected = (val) => {
        setVal(val);
        setExpanded(false);
        onChange(val);
    };

    useEffect(() => {
        setVal(value);
    }, [value]);

    return (
        <div
            className={customClass}
            tabIndex={0}
            style={style}
            onClick={() => !disabled && !loading && !readonly && setExpanded(!expanded)}
            onBlur={() => setExpanded(false)}
        >
            <div className="select-control" onClick={onClick}>
                {loading
                    ? <Spinner disabled={disabled}/>
                    : valueTemplate
                        ? valueTemplate(selectedOption)
                        : <>
                            {selectedOption[iconKey] &&
                                iconTemplate(selectedOption, 'select-control__icon')
                            }
                            <div>
                                {label && <div className="select-control__label">{label}</div>}
                                {selectedOption[valueKey]?.toString()
                                    ? <span className="select-control__value">
                                        {selectedOption[labelKey]}
                                        <Icon
                                            name={`angle-${expanded ? 'up' : 'down'}`}
                                            className="select-control__angle"
                                        ></Icon>
                                    </span>
                                    : <span className="select-control__placeholder">{placeholder}</span>}
                            </div>
                        </>
                }
            </div>
            <div className="select__options">
                <div className="select__options-wrapper">
                    <div>
                        {options.map((option, i) => (
                            <div
                                key={i}
                                onClick={() => setSelected(option[valueKey])}
                                className={classNames(
                                    'select-option',
                                    { 'select-option--active': val === option[valueKey] },
                                )}
                            >
                                {optionTemplate
                                    ? optionTemplate(option)
                                    : <>
                                        {option[iconKey] && iconTemplate(option, 'select-option__icon')}
                                        {option[labelKey]}
                                    </>
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Select;