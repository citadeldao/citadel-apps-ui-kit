import React, { useState } from 'react'
import Alert from '../uiKit/Alert'
import Button from '../uiKit/Button'
import StatusPopup from '../uiKit/StatusPopup'
import PopupWindow from '../uiKit/PopupWindow'
import IconButton from '../uiKit/IconButton'

const Notifications = () => {
    const [showSuccess, setShowSuccess] = useState(false)
    const [showInfo, setShowInfo] = useState(false)
    const [showWarning, setShowWarning] = useState(false)
    const [showError, setShowError] = useState(false)
    const openSuccess = () => { 
        let flag = true
        setShowSuccess(true); 
        if(flag){
            setTimeout(() => setShowSuccess(false),10000)
        }    
    }
    return (
        <div className='base-panel relative-panel'>
            <PopupWindow show={showSuccess} showPopup={setShowSuccess}>
                <StatusPopup text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod' type='success' showPopup={setShowSuccess}/>       
            </PopupWindow>
            <PopupWindow show={showInfo} showPopup={setShowInfo}>
                <StatusPopup text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod' type='info' showPopup={setShowInfo}/>       
            </PopupWindow>
            <PopupWindow show={showWarning} showPopup={setShowWarning}>
                <StatusPopup text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod' type='warning' showPopup={setShowWarning}/>       
            </PopupWindow>
            <PopupWindow show={showError} showPopup={setShowError}>
                <StatusPopup text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod' type='error' showPopup={setShowError}/>       
            </PopupWindow>

            <h3>Alert</h3>
            <Alert
                title='Attention'
                text='To withdraw assets, Ethereum address should be selected'
                iconColor='#EA2929'
                textColor='#8F2222'
                bgColor='#FFF2F2'
            />
            <br/>
            <Alert
                hideIcon
                title='Attention'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
                iconColor='#00B2FE'
                textColor='#026573'
                bgColor='#F4F6FF'
            />
            <br/>
            <Alert
                textUnderIcon
                title='Attention'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
                iconColor='#EA2929'
                textColor='green'
                bgColor='#FFF2F2'
            />
            <br/>
            <Alert
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
                iconColor='#6B93C0'
                textColor='#59779A'
                bgColor='#E5EDF5'
            />
            <br/>
            <Button bgColor='#7C63F5' onClick={() => openSuccess()}>Success</Button>
            <br/>
            <Button bgColor='#7C63F5' onClick={() => setShowInfo(true)}>Info</Button>
            <br />
            <Button bgColor='#7C63F5' onClick={() => setShowWarning(true)}>Warning</Button>
            <br />
            <Button bgColor='#7C63F5' onClick={() => setShowError(true)}>Error</Button>
            <br />
        </div>
    )
}

export default Notifications