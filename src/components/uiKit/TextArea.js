import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';

import Spinner from './Spinner';

import '../../assets/styles/uiKit/textArea.scss';

const Textarea = ({
    value,
    label,
    rows = 3,
    placeholder,
    disabled = false,
    loading = false,
    readonly = loading,
    error = false,
    expandable = false,
    className,
    style,
    onChange = () => {}
}) => {
    const ref = useRef();
    const customClass = classNames(
        'textarea',
        {
            'textarea--disabled': disabled,
            'textarea--error': error,
            'textarea--readonly': readonly,
        },
        className,
    );

    useEffect(() => {
        if (expandable) {
            ref.current.style.height = 'auto';
            ref.current.style.height = `${ref.current.scrollHeight}px`;
        }
        // eslint-disable-next-line
    }, [value]);

    return (
        <label className={customClass} style={style}>
            {!!label && <div className="textarea__label">{label}</div>}
            {loading && <Spinner disabled={disabled}/>}
            <textarea
                ref={ref}
                placeholder={loading ? '' : placeholder}
                value={loading ? '' : value}
                rows={rows}
                disabled={disabled}
                readOnly={readonly}
                onChange={(e) => onChange(e.target.value)}
            />
        </label>
    );
};

export default Textarea;