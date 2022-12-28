import React, { useState } from 'react';
import Radio from '../uiKit/Radio';
import Checkbox from '../uiKit/Checkbox';
import InlineCheckBox from '../uiKit/InlineCheckBox';
import Toggle from '../uiKit/Toggle';
import Icon from '../uiKit/Icon';
import classNames from 'classnames';
import '../../assets/styles/panels/selectionControl.css';

const SelectionControl = () => {
    const [isSelected, setIsSelected] = useState(false)
    const [selected, setSelected] = useState('')
    const [active, setActive] = useState(false)
    const disabled = false

    const customLabelClass = classNames(
        'checkbox-inline__token',
        {
            'checkbox-inline__token--selected': isSelected,
            'checkbox-inline__token--disabled': disabled,
        }
    );

    const data = [
        {
            network: 'Secret',
            name: 'secret',
            code: 'SCRT',
            balance: 20450.5,
            usdPrice: 450.05
        },
        {
            network: 'Osmosis',
            code: 'OSMO',
            name: 'osmosis',
            balance: 20450.5,
            usdPrice: 450.05
        },
        {
            network: 'Sifchain',
            code: 'ROWAN',
            name: 'sifchain',
            balance: 20450.5,
            usdPrice: 450.05
        },
        {
            network: 'Sifchain',
            name: 'sifchain',
            code: 'ROWAN',
            balance: 20450.5,
            usdPrice: 450.05,
        }
    ]

    return (
        <div className='base-input-panel'>
            <h2>Selection Control</h2>
            <h3>Default Radio button</h3>
            <Radio
                value="1" 
                selected={selected}
                onChange={setSelected}
            >
                1 Month
            </Radio>
            <br/>
            <Radio
                value="12" 
                selected={selected}
                onChange={setSelected}
            >
                12 Month
            </Radio>
            <h3>Disabled Radio button</h3>
            <Radio
                value="20" 
                selected={selected}
                onChange={setSelected}
                disabled={true}
            >
                20 Month
            </Radio>
            <h3>Radio Button with Content</h3>
            <Radio
                value="1day"
                selected={selected}
                onChange={setSelected}
                width='300px'
            >
                <div className='radio__block'>
                    <div className='radio__title'>
                        <p>unbonding</p>
                        <p>APR</p>
                    </div>
                    <div className='radio__amount'>
                        <p>A day</p>
                        <p>177.65 <span>%</span></p>
                    </div>
                </div>
            </Radio>
            <h3>Checkbox</h3> 
            <Checkbox
                value={isSelected}
                onChange={(val) => setIsSelected(val)}
            >Yes</Checkbox>
            <h3>Disabled Checkbox</h3>
            <Checkbox 
                disabled
                value={true}
                onChange={() => {}}
            >
                Disabled
            </Checkbox>
            <br/>
            <h3>Inline CheckBox</h3>
            <InlineCheckBox 
                value={isSelected}
                onChange={(val) => { console.log('v', val); setIsSelected(val)}}
            >
                <div className='checkbox__content'>
                    <Icon 
                        name={`coin--tez`} 
                        width="24" 
                        color={isSelected ? "#5639E0" : "#59779A"}
                    />
                    <p className={customLabelClass}>Tezos</p>
                </div>
            </InlineCheckBox>
            <br/>
            <h3>Disabled Inline Checkbox</h3>
            <InlineCheckBox 
                value={true}
                onChange={(val) => setIsSelected(val)}
                disabled={true}
            >
                <div className='checkbox__content'>
                    <Icon 
                        name={`coin--sifchain`} 
                        width="24" 
                        color='#B0B0B0'
                    />
                    <p className={customLabelClass}>Sifchain</p>
                </div>
            </InlineCheckBox>
            <br/>
            <h3>Toggle</h3>
            <Toggle
                value={active}
                onChange={setActive}
                label='Autostake'
            />
            <br/>
            <Toggle
                value={active}
                onChange={setActive}
                label='Autostake'
                inverted={true}
            />
            <br/>
            <Toggle
                value={active}
                onChange={setActive}
                label='Autostake disabled'
                disabled={true}
            />
        </div>
    )
}

export default SelectionControl