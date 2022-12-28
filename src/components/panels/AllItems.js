import React, { useState } from 'react'
import Button from '../uiKit/Button'
import Tabbar from '../uiKit/Tabbar'
import Header from '../uiKit/Header'
import Loader from '../uiKit/Loader'
import {useNavigate} from 'react-router-dom'
import Modal from '../uiKit/Modal'
import View from '../uiKit/View'
import Panel from '../uiKit/Panel'
import Content from '../uiKit/Content'
import TipCard from '../uiKit/TipCard'
import PriceUpdatedCard from '../uiKit/PriceUpdated'
import Alert from '../uiKit/Alert'
import Spinner from '../uiKit/Spinner'
import AddressSectionCard from '../uiKit/AddressSectionCard'
import Accordion from '../uiKit/Accordion'
import Icon from '../uiKit/Icon'

const AllItems = () => {
    const navigate = useNavigate()
    const customConfig = {
        "TABBAR": {
            "BACKGROUND_COLOR": "#00BFDB",
            "DEFAULT_ITEM_COLOR": "#59779A",
            "ACTIVE_ITEM_COLOR": "#fff",
            "HOVER_ITEM_COLOR": "#002BCC",
            "DISABLE_ITEM_COLOR": "#f5f5f5",
            "TABBAR_ITEMS": [
                {"TITLE": "Swap", "ICON": "arrows-towards", "ROUTES": "swap"},
                {"TITLE": "Settings", "ICON": "gear", "ROUTES": "settings"},
                {"TITLE": "Transactions", "ICON": "square-list", "ROUTES": "item"}
            ]
        },
        "HEADER": {
            "TITLE": "App header",
            "BACK_TITLE": "Back",
            "BACKGROUND_COLOR": "#FFF",
            "TOP_BACKGROUND_COLOR": "#00BFDB"
        },
        "DEFAULT_ADDRESS_BLOCK": true 
    }

    const defaultConfig = {
        "TABBAR": {
            "BACKGROUND_COLOR": "#3C356D",
            "DEFAULT_ITEM_COLOR": "#FFF",
            "ACTIVE_ITEM_COLOR": "#FFFFFF",
            "HOVER_ITEM_COLOR": "#979EFE",
            "DISABLE_ITEM_COLOR": "#979EFE",
            "TABBAR_ITEMS": [
                {"TITLE": "Send", "ICON": "bridge", "ROUTES": "send"}
            ]
        },
        "HEADER": {
            "TITLE": "Home",
            "BACK_BUTTON": true,
            "BACK_TITLE": "Back",
            "BACKGROUND_COLOR": "#FFF"
        },
        "DEFAULT_ADDRESS_BLOCK": true         
    }
    const wallet = {
        code: 'OSMO',
        address: '0xb8CA9EA80F51307A26f354B462FC226349505dAE',
        name: 'Osmosis',
        network: 'osmosis',
        usdPrice: 0.4,
        balance: 23,
        restakeAmount: 3,
        fee: 5,
        symbol: 'OSMO'
    }

    const config = {
        tabbarParamsFromConfig(param){
            if (customConfig['TABBAR'][param]){
                return customConfig['TABBAR'][param]
            } else {
                console.warn('Provide custom TABBAR ' + param)
            }
            return defaultConfig['TABBAR'][param]
        },
        headerParamsFromConfig(param){
            if (customConfig['HEADER'][param]){
                return customConfig['HEADER'][param]
            } else {
                console.warn('Provide custom HEADER ' + param)
            }
            return defaultConfig['HEADER'][param]
        },
        get showAddressBlock() {
            if (customConfig.DEFAULT_ADDRESS_BLOCK){
                return customConfig.DEFAULT_ADDRESS_BLOCK
            } else {
                console.warn('Provide DEFAULT_ADDRESS_BLOCK!')
            }
            return defaultConfig.DEFAULT_ADDRESS_BLOCK
        }
    }
    const [showModal, setShowModal] = useState(false)
    return (
        <View>
            <Modal
                title={<Alert text='Address required for this app' iconColor="#00B2FE" boldText/>}
                description="Seems like you don’t have any Sifchain addresses imported into Citadel.one"
                show={showModal}
                onClose={() => setShowModal(false)}
            >
                <TipCard text="Go to 'Add address' section and import Cosmos addresses of your choice with private key, seed phrase or hardware wallet" />
            </Modal>
            <Panel config={config}>
                <div id='/' className='panel'>
                    <AddressSectionCard
                        data={wallet}
                        id='/show'
                        onClick={() => navigate('/splash')}
                    />

                    <Content>
                        <Header title='All items' back={true} config={config} border={true}/>
                        <h2 className='menu-text'>Menu </h2>
                        <Button onClick={() => setShowModal(true)}>Open modal</Button>
                        <br/>
                        <div className='btn-panel'>
                            <Button onClick={() => navigate('/tooltip')}>Tooltip</Button>
                        </div>
                        <div className='btn-panel'> 
                            <Button onClick={() => navigate('/buttons')}>Buttons</Button>
                        </div>
                        <div className='btn-panel'> 
                            <Button onClick={() => navigate('/input')}>Inputs</Button>
                        </div>
                        <div className='btn-panel'>
                            <Button onClick={() => navigate('/icons')}>Icons</Button>
                        </div>
                        <div className='btn-panel'> 
                            <Button onClick={() => navigate('/selectionControl')}>Selects</Button>
                        </div>
                        <div className='btn-panel'> 
                            <Button onClick={() => navigate('/inputTokens')}>Input with tokens</Button>
                        </div>
                        <div className='btn-panel'> 
                            <Button onClick={() => navigate('/notifications')}>Notifications</Button>
                        </div>
                        <div className='btn-panel'> 
                            <Button onClick={() => navigate('/tabs')}>Tabs</Button>
                        </div>
                        <div className='btn-panel'> 
                            <Button onClick={() => navigate('/coins')}>Coin icons</Button>
                        </div>
                        <div className='btn-panel'> 
                            <Button onClick={() => navigate('/cards')}>Cards</Button>
                        </div>
                        <div className='btn-panel'> 
                            <Button onClick={() => navigate('/select')}>Select</Button>
                        </div>
                        <div className='btn-panel'> 
                            <Button onClick={() => navigate('/infocards')}>Info cards</Button>
                        </div>
                        <div className='btn-panel'> 
                            <Button onClick={() => navigate('/table')}>Table</Button>
                        </div>
                        <div className='btn-panel'> 
                            <Button onClick={() => navigate('/transactions')}>Transaction Cards</Button>
                        </div>
                        <div className='btn-panel'> 
                            <Button onClick={() => navigate('/splash')}>Splash Screen</Button>
                        </div>
                        <div className='btn-panel'>
                            <Button onClick={() => navigate('/governance')}>Governance</Button>
                        </div>
                    </Content>
                    <Tabbar config={config} bottomInset='16'/>
                </div>
            </Panel>
            <Panel className='info-panel' config={config}>
                <Content>
                    <h1>Second panel</h1>
                    <Accordion title='Can I really significantly influence'>
                        Can I really significantly influence Cosmos ecosystem development and provide changes?
                    </Accordion>
                    <Accordion
                        title='Can I really significantly influence Cosmos ecosystem development and provide changes? Can I really significantly influence'
                        type="guide"
                    >
                        <p>Sifchain is committed to creating a blockchain and cryptocurrency world where any asset can move freely between different blockchains quickly and at the cheapest price. SifDEX is a decentralized exchange (DEX) that enables users to swap digital assets from a wide variety of blockchain ecosystems in one place.</p>
                    </Accordion>
                    <Accordion
                        title={
                            <div className="accordion__title">
                                <Icon
                                    name='questionmark-circle'
                                    color='#0095D6'
                                />
                                Custom content
                            </div>
                        }
                    >
                        <p>Sifchain is committed to creating a blockchain and cryptocurrency world where any asset can move freely between different blockchains quickly and at the cheapest price. SifDEX is a decentralized exchange (DEX) that enables users to swap digital assets from a wide variety of blockchain ecosystems in one place.</p>
                    </Accordion>
                    <br/>
                    <PriceUpdatedCard 
                        style={{marginBottom: '10px'}} 
                        acceptPrice={() => console.log('--')} 
                        text='Price updated'
                    />
                    <TipCard text={'text.ADDRESS_ERROR_TIP'} />
                    <Alert 
                        text={'text.AUTORESTAKE_ALERT'}  
                        description={'text.LEDGER_ALERT_DESCRIPTION'} 
                        iconColor='#00B2FE' 
                        textColor='#026573' 
                        bgColor='#F3FCFD'
                    />
                    <Loader />
                    <div id='loader'>
                        <Spinner/>
                    </div>
                </Content>
            </Panel>
        </View>
    )
}

export default AllItems