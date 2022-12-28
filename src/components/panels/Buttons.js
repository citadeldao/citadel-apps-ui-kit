import React from 'react'
import '../../assets/styles/panels/btnPanel.css'
import IconButton from '../uiKit/IconButton'
import Button from '../uiKit/Button'

const Buttons = () => {
    return (
        <div className="base-panel" style={{padding: 10}}>
            <h2>Button type - default</h2>
            <Button hoverBgColor='#5639E0'>Swap</Button>
            <br/>
            <Button icon='arrows-towards' iconColor='#A8C3E1' disabled>SWAP</Button>
            <br/>
            <Button icon='arrows-towards' iconColor='#A8C3E1' inverted disabled>SWAP</Button>
            <br/>
            <Button textColor='#FFFFFF' hoverBgColor='#005376' bgColor='#0095D6' width='160px'>SWAP</Button>
            <br/>
            <Button textColor='#FFFFFF' hoverBgColor='#005376' bgColor='#0095D6'>Approve</Button>
            <br/>
            <Button iconColor='#FFF' hoverBgColor='#5639E0' textColor='#FFFFFF' bgColor='#7C63F5' icon='tools'>Give approve to swap WETH</Button>
            <h2>Button type - small</h2>
            <Button type='small'>MAX</Button>
            <br/>
            <Button disabled type='small'>Max</Button>
            <br/>
            <Button icon='arrow-rotate-up' iconColor='#5639E0' type='small' hoverTextColor='white' hoverBgColor='#5639E0' iconHoverColor="#fff">RELOAD</Button>
            <br/>
            <Button disabled bgColor='#E5EDF5' icon='arrow-rotate-up' iconColor='#A8C3E1' type='small'>RELOAD</Button>

            <h2>Button type - long</h2>
            <Button iconHoverColor='#5639E0' icon='plus' iconBgColor='#E5EDF5' iconColor='#6B93C0' type='long' textColor='#6B93C0'>Add networks</Button>
            <br/>
            <Button iconColor='#6B93C0' type='long'>Go to networks</Button>
            <br/>
            <Button disabled iconHoverColor='#5639E0' icon='plus' iconBgColor='#E5EDF5' iconColor='#6B93C0' type='long' textColor='#6B93C0'>Add networks</Button>
            <br/>

            <h2>Button type - long-edge</h2>
            <Button iconHoverColor='#5639E0' icon='angle-right' iconBgColor='#E5EDF5' iconColor='#6B93C0' type='long-edge' textColor='#6B93C0'>Add networks</Button>
            <br/>
            <Button iconHoverColor='#5639E0' iconHoverBgColor='grey' hoverBgColor='skyblue' icon='angle-right' iconBgColor='#E5EDF5' iconColor='#6B93C0' type='long-edge' textColor='#6B93C0'>Add networks</Button>
            <br/>
            <Button type='long-edge' icon='angle-right' iconColor='#6B93C0' disabled>Add networks</Button>
            <br/>
            <Button type='small' round inverted icon='arrow-left-circle' iconHoverColor="#fff" textColor='#FFFFFF' iconColor='#fff' bgColor='#00B933'><span>ENABLED</span></Button>
            <br/>
            <Button type='small' loading round width='118px'></Button>
            <br/>
            <Button type='small' round inverted icon='arrow-left-circle' iconHoverColor="#fff"textColor='#FFFFFF' iconColor='#fff' bgColor='#ED4242'><span>DISABLED</span></Button>

            <h2>Icon-button</h2>
            <h4 style={{margin: 0}}>common</h4>
            <IconButton icon="resize-out" iconColor="green" width={40} height={40}/>
            <IconButton icon="xmark" iconColor="#A8C3E1" iconHoverColor="red"/>
            <br/>
            <h4 style={{margin: 0}}>round</h4>
            <IconButton type="round" icon='resize-out' iconColor="#8B9BC7" bgColor="#DAE1F2" bgHoverColor="#182969" iconHoverColor="#fff"/>
            <IconButton type="round" icon='xmark' width={30} height={30} bgColor="#A8C3E1" iconColor="#FFF"/>
            <br/>
            <h4 style={{margin: 0}}>hexagon</h4>
            <IconButton type="hexagon" icon='arrows-towards' width={40} height={40} bgColor="#C6D1FF" iconColor="#173296" borderColor="#869FFF"/>
            <IconButton type="hexagon" icon='arrow-down' width={60} height={60} bgColor="#C6D1FF" iconColor="#173296" borderColor="#869FFF"/>
        </div>
    );
};

export default Buttons;