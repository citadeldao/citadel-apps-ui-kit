import React, { useState } from 'react';
import TextArea from '../uiKit/TextArea';
import FormGroup from '../uiKit/FormGroup';
import FormGroupBalance from '../uiKit/FormGroupBalance';
import Input from '../uiKit/Input';
import DatePicker from '../uiKit/DatePicker';
import PeriodPicker from '../uiKit/PeriodPicker';
import InputSelect from '../uiKit/InputSelect'

import '../../assets/styles/panels/index.css';
import moment from 'moment';

const Inputs = () => {
    const options = [
        {
            value: 'sifchain',
            label: 'ROWAN',
            icon: 'coin--sifchain'
        },
        {
            value: 'secret',
            label: 'SECRET',
            icon: 'coin--secret'
        },
        {
            value: 'osmosis',
            label: 'OSMO',
            icon: 'coin--osmosis'
        },
        {
            value: 'axelar',
            label: 'AXELAR',
            icon: 'coin--axelar'
        },
        {
            value: 'chihuahua',
            label: 'HUAHUA',
            icon: 'coin--chihuahua'
        },
        {
            value: 'juno',
            label: 'JUNO',
            icon: 'coin--juno'
        }
    ];
    const [value, setValue] = useState("0.2341233321231233333333433242342342343453433312333333333333333333333333333312312331231231231231312313123");
    const [date, setDate] = useState('2022-08-10');
    const [period, setPeriod] = useState({
        from: moment().subtract(2, 'day').format('YYYY-MM-DD'),
        to: moment().format('YYYY-MM-DD'),
    });
    const [balance, setBalance] = useState("null");
    const [selectedOption, setSelectedOption] = useState(options[2].value);
    const [isLoading, setIsLoading] = useState(false);
    const [ethAddressError, setEthAddressError] = useState(false);

    const checkEthAddress = (val) => {
        const regex = /^0x[a-fA-F0-9]{40}$/;

        setEthAddressError(!regex.test(val));
    };

    return (
        <div className="base-input-panel">
            <h3>Base input</h3>
            <Input
                value={value}
                type='number'
                onChange={setValue}
            />
            <br/>
            <Input
                value={value}
                placeholder="Search"
                type='search'
                onChange={setValue}
            />
            <br/>
            <Input
                label='Input with label and placeholder - type number'
                placeholder='Write here'
                value={value}
                type='number'
                onChange={setValue}
            />
            <br/>
            <Input
                label='Clearable'
                placeholder='Write here'
                value={value}
                type='number'
                clearable
                onChange={setValue}
            />
            <br/>
            <Input
                label='Input disabled'
                placeholder="Can't write here"
                value={value}
                disabled
                onChange={setValue}
            />
            <br/>
            <Input
                label='Input error'
                placeholder="Fix here"
                value={value}
                error
                onChange={setValue}
            />
            <br/>
            <Input
                value={value}
                type='number'
                loading={true}
                onChange={setValue}
            />
            <br/>
            <Input
                label='Input with label and placeholder - type number'
                placeholder='Write here'
                value={value}
                type='number'
                loading={true}
                onChange={setValue}
            />
            <h3>TextArea</h3>
            <TextArea
                value={value}
                onChange={setValue}
            />
            <br/>
            <TextArea
                label='TextArea with label and placeholder'
                value={value}
                placeholder="Write here"
                onChange={setValue}
                expandable
            />
            <br/>
            <TextArea
                value={value}
                rows={2}
                loading={true}
                onChange={setValue}
            />
            <br/>
            <TextArea
                value={value}
                loading={true}
                label='TextArea with label and placeholder'
                placeholder="Write here"
                onChange={setValue}
                expandable
            />
            <br/>
            <TextArea
                label='TextArea 2 rows'
                placeholder="Write here"
                value={value}
                rows="2"
                onChange={setValue}
            />
            <br/>
            <TextArea
                label='TextArea 6 rows'
                placeholder="Write here"
                value={value}
                rows="6"
                onChange={setValue}
            />
            <br/>
            <TextArea
                label='TextArea disabled'
                placeholder="Can't write here"
                value={value}
                rows="2"
                disabled
                onChange={setValue}
            />
            <br/>
            <TextArea
                label='TextArea error'
                placeholder="Fix here"
                value={value}
                rows="2"
                error
                onChange={setValue}
            />

            <h3>Form Group</h3>
            <FormGroup
                title="Text name input"
                description="Description"
            >
                <Input
                    label="Input link"
                    placeholder="https://"
                    value={value}
                    onChange={setValue}
                />
            </FormGroup>
            <br/>
            <FormGroup
                inline
                title="From Group inline"
                description="Description"
            >
                <Input
                    label="Input link"
                    placeholder="https://"
                    value={value}
                    onChange={setValue}
                />
                <Input
                    label="Input link"
                    placeholder="https://"
                    value={value}
                    onChange={setValue}
                />
                <Input
                    label="Input link"
                    placeholder="https://"
                    value={value}
                    onChange={setValue}
                />
            </FormGroup>
            <br/>
            <FormGroup
                title="From Group with balances"
            >
                <FormGroupBalance balance={22.2} currency="OSMO" placement="end"/>
                <Input
                    type="amount"
                    label="Amount"
                    currency="OSMO"
                    value={value}
                    onChange={setValue}
                />
                <FormGroupBalance balance={22.2} usdPrice={1.111} text="My liquidity" currency="OSMO"/>
            </FormGroup>
            <FormGroup>
                <FormGroupBalance balance={22.2} currency="OSMO" placement="end"/>
                <Input
                    type="amount"
                    label="Amount"
                    currency="OSMO"
                    value={value}
                    onChange={setValue}
                />
                <FormGroupBalance
                    balance={balance}
                    usdPrice={1.111}
                    currency="OSMO"
                    type="secret"
                    loading={isLoading}
                    onClick={() => {
                        setIsLoading(true)
                        setTimeout(() => {setBalance(0); setIsLoading(false)}, 2000)
                    }}/>
            </FormGroup>
            <FormGroup>
                <Input
                    type="amount"
                    label="Amount"
                    currency="OSMO"
                    value={value}
                    onChange={setValue}
                />
                <FormGroupBalance type="keplr"  balance={balance} usdPrice={'0.000000054653'} currency="OSMO" loading={isLoading}/>
            </FormGroup>
            <FormGroup>
                <Input
                    type="amount"
                    label="Amount"
                    currency="OSMO"
                    value={value}
                    onChange={setValue}
                />
                <FormGroupBalance balance={22.2} usdPrice={1.111} currency="OSMO" loading={isLoading}/>
            </FormGroup>
            <h3>With actions</h3>
            <Input
                label="Eth address"
                placeholder="Write here"
                action={{ text: 'Click me', onClick: () => alert('You clicked')}}
            />

            <h3>With validation</h3>
            <FormGroup
                error={ethAddressError}
                errorText="Invalid Ethereum address"
            >
                <Input
                    value={value}
                    label="Eth address"
                    placeholder="0x..."
                    action={{ text: 'Ok', onClick: () => {}}}
                    error={ethAddressError}
                    onChange={(v) => {setValue(v); checkEthAddress(v)}}
                />
            </FormGroup>

            <br/>
            <h3>Date and period pickers</h3>
            <DatePicker
                date={date}
                min="2022-08-10"
                max="2022-09-01"
                onChange={setDate}
            />
            <br/>
            <br/>
            <PeriodPicker
                date={period}
                min={moment().subtract(2, 'week').format('YYYY-MM-DD')}
                max={moment().format('YYYY-MM-DD')}
                onChange={setPeriod}
            />

            <br/>
            <h3>Amount input</h3>
            <br/>

            <Input
                type="amount"
                value={value}
                currency="ROWAN"
                label="Amount input"
                onChange={setValue}
            />
            <br/>
            <Input
                value={value}
                type="amount"
                currency="SCRT"
                label="Amount input"
                icon="coin--bsc"
                clearable
            />
            <br/>
            <Input
                type="amount"
                value={value}
                currency="XCT"
                label="Amount input"
                action={{ text: 'Ok', onClick: () => {}}}
            />

            <h4>Inverted</h4>
            <Input
                type="amount"
                value={value}
                inverted
                currency="ATOM"
                label="Amount input"
                //action={{ text: 'Ok', onClick: () => {}}}
                clearable
            />
            <br/>
            <Input
                type="amount"
                value={value}
                inverted
                currency="SCRT"
                label="Amount input"
                action={{ text: 'Ok', onClick: () => {}}}
            />

            <br/>
            <h3>Input + Select</h3>
            <h4>Simple</h4>
            <InputSelect
                input={{
                    value,
                    onChange: setValue,
                }}
                select={{
                    value: selectedOption,
                    options,
                    onChange: setSelectedOption,
                }}
                currencyKey = 'label'
            />
            <h4>Clearable</h4>
            <InputSelect
                input={{
                    value,
                    label: 'Amount',
                    clearable: true,
                    onChange: setValue,
                }}
                select={{
                    value: selectedOption,
                    options,
                    label: 'Token from',
                    onChange: setSelectedOption,
                }}
                currencyKey = 'label'
            />
            <h4>With action</h4>
            <InputSelect
                input={{
                    value,
                    label: 'Amount',
                    onChange: setValue,
                    action: { text: 'Click me', onClick: () => alert('clicked') }
                }}
                select={{
                    value: selectedOption,
                    options,
                    label: 'Token from',
                    onChange: setSelectedOption,
                }}
                currencyKey = 'label'
            />
            <h4>Token is button</h4>
            <InputSelect
                input={{
                    value,
                    label: 'Amount',
                    onChange: setValue,
                    action: { text: 'Click me', onClick: () => alert('clicked') }
                }}
                select={{
                    value: selectedOption,
                    options,
                    label: 'Token from',
                    readonly: true,
                    onClick: () => alert('clicked'),
                    onChange: setSelectedOption,
                }}
                currencyKey = 'label'
            />
            <br/>
            <InputSelect
                disabled
                input={{
                    value,
                    label: 'Amount',
                    onChange: setValue,
                    action: { text: 'Click me', onClick: () => alert('clicked') }
                }}
                select={{
                    value: selectedOption,
                    options,
                    label: 'Token from',
                    readonly: true,
                    onChange: setSelectedOption,
                }}
                currencyKey = 'label'
            />

            <br/>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

           {/* <br/>
            <InputSelect
                value={value}
                label='Amount'
                selectValue={selectedOptions}
                selectLabel='Select token'
                options={options}
                onChange={setValue}
                onChangeOption={setSelectedOptions}
            />*/}
        </div>
    );
};

export default Inputs;