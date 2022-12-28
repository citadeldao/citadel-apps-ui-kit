import Tooltip from '../uiKit/Tooltip'
const TooltipPanel = () => {
    return(
        <div className='tooltip-panel'>
            <div>
                <Tooltip width='130px' position='bottom' text="position='bottom'">
                Hover me 1
                </Tooltip>
            </div>
            <div className='top center'>
                <Tooltip position='bottom' text="position='bottom'">
                    Hover me 2
                </Tooltip>
            </div>
            <div className='right'>
                <Tooltip  position='bottom' text="position='bottom'">
                    Hover me 3
                </Tooltip>
            </div>
            <div style={{marginTop: '25%'}}>
                <div>
                    <Tooltip  text='Seems like you don’t have any Juno addresses imported into Citadel.one'>
                        Hover me 1   Hover me 1
                    </Tooltip>
                </div>
                <div className='top center'>
                    <Tooltip  text='Default'>
                        Hover me 2
                    </Tooltip>
                </div>
                <div className='right'>
                    <Tooltip  text='Seems like you don’t have any Juno addresses imported into Citadel.one'>
                        Hover me 3
                    </Tooltip>
                </div>
            </div>
            <div className='bottom'>
                <Tooltip text='Seems like you don’t have any Juno addresses imported into Citadel.one'>
                    Hover me 4
                </Tooltip>
            </div>
            <div className='right' style={{top: '25%'}}>
                <Tooltip width='300px' text='Seems like you don’t have any Juno addresses imported into Citadel.one'>
                    Hover me 5
                </Tooltip>
            </div>
        </div>
    )
}

export default TooltipPanel;