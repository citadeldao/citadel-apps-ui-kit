import React from 'react';
import classNames from 'classnames';

import Input from './Input';
import Select from './Select';

import '../../assets/styles/uiKit/inputSelect.scss';

const InputSelect = (props) => {
    const {
        input = {}, // props for <Input/>
        select = {}, // props for <Select/>
        currencyKey = 'code',
        disabled = false,
        readonly = false,
        loading = false,
    } = props;

    const selectedOption = () => select.options.find(o => select.value === o[select.valueKey || 'value']) || {};
    const customClass = classNames(
        'input-select',
        {
            'input-select--disabled': disabled,
        },
    );

    return (
        <div className={customClass}>
            <div className="input-select__select">
                <Select
                    {...select}
                    disabled={disabled}
                    readonly={readonly}
                    loading={loading}
                />
            </div>
            <Input
                type="amount"
                currency={selectedOption()[currencyKey]}
                inverted
                disabled={disabled}
                readonly={readonly}
                loading={loading}
                {...input}
            />
        </div>
    );
};

export default InputSelect;