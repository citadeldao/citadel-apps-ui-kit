import React, { useState } from 'react';
import Select from '../uiKit/Select';
import Autocomplete from '../uiKit/Autocomplete';
import Icon from '../uiKit/Icon';
import CoinIcon from '../uiKit/CoinIcon';

import { pickPropsArr } from '../helpers/pickProps';

import '../../assets/styles/panels/selectPanel.css';

const SelectPanel = () => {
    const data = [
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
            value: 'elya',
            label: 'Elya',
            icon: 'https://git.citadel.one/uploads/-/system/user/avatar/6/avatar.png'
        },
        {
            value: 'chihuahua',
            label: 'CIHUAHUA',
            icon: 'coin--chihuahua'
        },
        {
            value: 'juno',
            label: 'JUNO',
            icon: 'coin--juno'
        },
    ];

    const options = [
        {
            "name": "pSTAKE Pegged ATOM",
            "decimals": 6,
            "symbol": "pATOM",
            "chainId": 1,
            "net": "cosmos",
            "network": "cosmos",
            "icon": 'https://git.citadel.one/uploads/-/system/user/avatar/6/avatar.png',
            "code": "pATOM",
            "address": "0x446e028f972306b5a2c36e81d3d088af260132b3",
            "denom": "uatom",
            "liquidStakingContract": "0xce3f57A8De9AA69da3289871b5FeE5E77fFCF480",
            "tokenWrapperContract": "0xA9739b5BdAfe956DEAa8b2e695c7d4f1DF7Bc1D6",
            "uTokensContract": "0x446E028F972306B5a2C36E81D3d088Af260132B3"
        },
        {
            "name": "pSTAKE Pegged XPRT",
            "decimals": 6,
            "symbol": "pXPRT",
            "chainId": 1,
            "net": "persistence",
            "network": "persistence",
            "icon": "coin--persistence",
            "code": "pXPRT",
            "address": "0x8793cD84c22B94B1fDD3800f02C4B1dcCa40D50b",
            "denom": "uxprt",
            "liquidStakingContract": "0x7B2D024908723e220E5b99EF469434d6a1D18864",
            "tokenWrapperContract": "0x504E7119122F26E9878df1DF1a008b3c9245A6c8",
            "uTokensContract": "0x8793cD84c22B94B1fDD3800f02C4B1dcCa40D50b"
        },
        {
            "name": "pSTAKE Staked ATOM",
            "decimals": 6,
            "symbol": "stkATOM",
            "chainId": 1,
            "net": "cosmos",
            "network": "cosmos",
            "icon": "coin--cosmos",
            "code": "stkATOM",
            "address": "0x44017598f2af1bd733f9d87b5017b4e7c1b28dde",
            "denom": "uatom",
            "liquidStakingContract": "0xce3f57A8De9AA69da3289871b5FeE5E77fFCF480",
            "tokenWrapperContract": "0xA9739b5BdAfe956DEAa8b2e695c7d4f1DF7Bc1D6",
            "sTokensContract": "0x44017598f2AF1bD733F9D87b5017b4E7c1B28DDE"
        },
        {
            "name": "pSTAKE Staked XPRT",
            "decimals": 6,
            "symbol": "stkXPRT",
            "chainId": 1,
            "net": "persistence",
            "network": "persistence",
            "icon": "coin--persistence",
            "code": "stkXPRT",
            "address": "0x45e007750Cc74B1D2b4DD7072230278d9602C499",
            "denom": "uxprt",
            "liquidStakingContract": "0x7B2D024908723e220E5b99EF469434d6a1D18864",
            "tokenWrapperContract": "0x504E7119122F26E9878df1DF1a008b3c9245A6c8",
            "sTokensContract": "0x45e007750Cc74B1D2b4DD7072230278d9602C499"
        }
    ]

    const [value, setValue] = useState('secret');
    const [autocompleteValue, setAutocompleteValue] = useState('');
    const [autocompleteMultiple, setAutocompleteMultiple] = useState([]);

    const getCustomTemplate = (option) => (
        <div style={{ display: 'flex', alignItems: 'center'}}>
            <Icon name={option.icon} width="16"/>
            <Icon name="angle-right" width="10" style={{ margin: '0 4px' }}/>
            <Icon name="fire" width="16" style={{marginRight: 8}}/>
            {option.label}
        </div>
    );
    const getAutocompleteTemplate = (option) => (
        <div className="custom-option">
            <CoinIcon icon={option.net} className="custom-option__icon"/>
            <div className="custom-option__content">
                <div className="custom-option__title">{option.name}</div>
                <div className="custom-option__address">{option.address}</div>
            </div>
            <div className="custom-option__symbol">{option.symbol}</div>
        </div>
    );

    return (
        <div className="base-panel">
            <h2>Select</h2>
            <h4>Base select</h4>
            <Select
                value={value}
                options={pickPropsArr(data, ['value', 'label'])}
            />
            <br/>
            <Select
                value={value}
                options={pickPropsArr(data, ['value', 'label'])}
                label="From"
                placeholder='Select option'
            />

            <h4>Select with icon</h4>
            <Select
                placeholder="Select"
                options={data}
                value={value}
                onChange={setValue}
            />
            <br/>
            <Select
                value={value}
                options={data}
                label="From"
                placeholder="0x..."
                onChange={setValue}
            />

            <h4>Select with custom option templates</h4>
            <Select
                value={value}
                options={data}
                label="From"
                placeholder="0x..."
                optionTemplate={option => getCustomTemplate(option)}
                valueTemplate={option => <div><i style={{color: 'orange'}}>{option?.label}</i></div>}
            />

            <h4>Select disabled</h4>
            <Select
                value={value}
                options={data}
                disabled
                optionTemplate={option => getCustomTemplate(option)}
                valueTemplate={option => <div><i style={{color: 'orange'}}>{option?.label}</i></div>}
            />
            <br/>
            <Select
                value={value}
                options={data}
                disabled
                onChange={setValue}
            />
            <h4>Select readonly</h4>
            <Select
                value={value}
                options={data}
                label="From"
                placeholder="0x..."
                readonly
                onChange={setValue}
            />
            <br/>
            <h4>Select loading</h4>
            <Select
                label="From"
                placeholder="0x..."
                value={value}
                options={data}
                loading
                onChange={setValue}
            />
            <br/>
            <Select
                value={value}
                options={data}
                disabled
                loading
                onChange={setValue}
            />

            <h3>Autocomplete</h3>
            <Autocomplete
                value={autocompleteValue}
                options={options}
                labelKey="address"
                valueKey="address"
                onChange={setAutocompleteValue}
            />
            <br/>
            <Autocomplete
                value={autocompleteValue}
                options={options}
                labelKey="address"
                valueKey="address"
                icon="search"
                onChange={setAutocompleteValue}
            />
            <br/>
            <Autocomplete
                label="Default"
                placeholder="Start writing"
                labelKey="address"
                valueKey="address"
                value={autocompleteValue}
                options={options}
                onChange={setAutocompleteValue}
            />
            <br/>
            <Autocomplete
                label="Custom option template"
                placeholder="Start writing"
                valueKey="address"
                value={autocompleteValue}
                options={options}
                optionTemplate={getAutocompleteTemplate}
                onChange={setAutocompleteValue}
            />
            <br/>
            <Autocomplete
                value={autocompleteValue}
                options={options}
                label="Custom option template"
                placeholder="Can't writing here"
                labelKey="address"
                valueKey="address"
                disabled
            />
            <br/>
            <Autocomplete
                value={autocompleteValue}
                options={options}
                label="Readonly"
                placeholder="Can't writing here"
                labelKey="address"
                valueKey="address"
                readonly
            />
            <br/>
            <Autocomplete
                label="Loading"
                placeholder="Can't writing here"
                loading
            />
            <h4>Multiple autocomplete</h4>
            <Autocomplete
                multiple
                value={autocompleteMultiple}
                onChange={setAutocompleteMultiple}
                options={options}
                labelKey="name"
                valueKey="name"
                label="Multiple"
                placeholder="Select options"
            />
            <br/>
            <Autocomplete
                multiple
                icon="search"
                value={autocompleteMultiple}
                onChange={setAutocompleteMultiple}
                options={options}
                labelKey="name"
                valueKey="name"
                label="Multiple"
                placeholder="Select options"
                searchFn={(option, inputValue) => option.net?.toLowerCase().includes(inputValue?.toLowerCase())}
            />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

        </div>
    );
};

export default SelectPanel;