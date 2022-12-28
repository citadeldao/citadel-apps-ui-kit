import React, {useState} from 'react'
import Tab from '../uiKit/Tab'
import Tablist from '../uiKit/Tablist'
import Content from '../uiKit/Content'
const Tabs = () => {
    const [active, setActive] = useState('tab1')
    const [active1, setActive1] = useState('tab1')
    const [active2, setActive2] = useState('tab1')
    const [active3, setActive3] = useState('tab1')

    return (
        <div className='base-panel'>
             <Content>
                <Tablist active={active} setActive={setActive} type="button">
                    <Tab id="tab1" label='Pools'>Content of Tab 1</Tab>
                    <Tab id="tab2" label='Incentivized pools'>Content of Tab 2</Tab>
                    <Tab id="tab3" label='My pools'>Content of Tab 3</Tab>
                    <Tab id="tab4" label='Incentivized pools'>Content of Tab 2</Tab>
                    <Tab id="tab5" label='My pools'>Content of Tab 3</Tab>
                </Tablist>
                <br/>
                <Tablist active={active1} setActive={setActive1} type="button">
                    <Tab id="tab1" label='Tab 1'>Content of Tab 1</Tab>
                    <Tab id="tab2" label='Tab 2'>Content of Tab 2</Tab>
                </Tablist>
                <br/>
                <Tablist active={active2} setActive={setActive2} type="line">
                    <Tab id="tab1" label='Tab 1'>Content of Tab 1</Tab>
                    <Tab id="tab2" label='Tab 2'>Content of Tab 2</Tab>
                    <Tab id="tab3" label='My pools'>Content of Tab 3</Tab>
                    <Tab id="tab4" label='Incentivized pools'>Content of Tab 2</Tab>
                    <Tab id="tab5" label='My pools'>Content of Tab 3</Tab>
                </Tablist>
                <br/>
                <Tablist active={active3} setActive={setActive3} type="line">
                    <Tab id="tab1" label='Tab 1'>Content of Tab 1</Tab>
                    <Tab id="tab2" label='Tab 2'>Content of Tab 2</Tab>
                </Tablist>
            </Content>
        </div>
    )
}

export default Tabs