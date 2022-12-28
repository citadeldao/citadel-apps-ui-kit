import React, { useState } from 'react'
import Card from '../uiKit/Card'
import ValidatorCard from '../uiKit/ValidatorCard'
import CustomCard from '../uiKit/CustomCard'
import SelectedCards from './SelectedCards'
import AddressCard from '../uiKit/AddressCard'
import EditAmount from '../uiKit/EditAmount'
import BalanceCard from '../uiKit/BalanceCard'
import BalanceInfoCard from '../uiKit/BalanceInfoCard'
import BalanceInfoCardItem from '../uiKit/BalanceInfoCardItem'
import AddressSectionCard from '../uiKit/AddressSectionCard'
import TokenCard from '../uiKit/TokenCard'
import GuideCard from '../uiKit/GuideCard'
import PoolItem from '../uiKit/PoolItem'
import PoolItemDropDown from '../uiKit/PoolItemDropDown'
import PoolCard from '../uiKit/PoolCard'
import AddressItem from '../uiKit/AddressItem'
import AddressBlock from '../uiKit/AddressBlock'
import ClaimBlock from '../uiKit/ClaimBlock'
import PoolItemInfo from '../uiKit/PoolItemInfo'
import SwapBalanceCard from '../uiKit/SwapBalanceCard'
import PoolSlider from '../uiKit/PoolSlider'
import NodeValidatorCard from '../uiKit/NodeValidatorCard'
import StatisticCard from '../uiKit/StatisticCard'
import UnbondedBlock from '../uiKit/UnbondedBlock'
import UnbondedBlockItem from '../uiKit/UnbondedBlockItem'
import NoValidatorCard from '../uiKit/NoValidatorCard'
import LimitCard from '../uiKit/LimitCard'

const Cards = () => {
    const [active, setActive] = useState(false)
    const data = {
        code: 'GAMM/604',
        address: '0xb8CA9EA80F51307A26f354B462FC226349505dAE',
        name: 'POOL 604',
        network: 'osmosis',
        usdPrice: 0.0032,
        balance: 2325.25252,
        restakeAmount: 3,
        fee: 5,
        symbol: 'GAMM/604'
    }

    const addressBlock = {
        "address": "cosmos1qxza45vjjugp9kpmcks7ffvdh7aajy5c42prcj",
        "network": "cosmos",
        "name": "COSMOS",
        "code": "ATOM",
        "publicKey": "02d9d50ff0745fbbd7c52f7b49fb4c7adfc77ed92e2a47b52dfe8b3f51b493ff5b",
        "balance": 21341342345.639442
    }

    const validatorData = {
        imageSource: 'https://raw.githubusercontent.com/cosmostation/cosmostation_token_resource/master/moniker/cosmoshub/cosmosvaloper1gxju9ky3hwxvqqagrl3dxtl49kjpxq6wlqe6m5.png',
        token: "OSMO",
        name: 'Stake fish',
        fee: 5,
    }

    const bondData = {
        bondedTxt: 'Bonded LP tokens',
        bondedAmount: 140,
        availableTxt: 'Available LP tokens',
        availableAmount: 4545
    }

    const poolData = {
        name: 'Pool #1',
        nativeAsset: {
            symbol: 'OSMO',
            net: 'osmosis'

        },
        externalAsset: {
            symbol: 'ATOM',
            net: 'cosmos'
        },
        apr: 0.03,
        fee: 13,
        liquidity_provider: {
            liquidity_provider_amount: 0.03,
            my_liquidity: 140000,
            pool_liquidity: 140000
        },
        tvl: 5687457
    }

    const poolCard = {
        externalAsset: {
            symbol: 'XTZ',
            net: 'tez',
            amount: 4.042545,
            usdPrice: 49.07895
        },
        nativeAsset: {
            symbol: 'SCRT',
            net: 'secret',
            amount: 4.042545,
            usdPrice: 49.07895
        }
    }

    const balanceCardData  = [
        {
            "name": "pSTAKE Pegged ATOM",
            "decimals": 6,
            "symbol": "pATOM",
            "chainId": 1,
            "code": "ATOM",
            "balance": 0.23,
            "net": "cosmos",
            "network": "cosmos",
            "address": "0x446e028f972306b5a2c36e81d3d088af260132b3",
            "logoURI": "img/coins/patom.svg",
            "denom": "uatom",
            "liquidStakingContract": "0xce3f57A8De9AA69da3289871b5FeE5E77fFCF480",
            "tokenWrapperContract": "0xA9739b5BdAfe956DEAa8b2e695c7d4f1DF7Bc1D6",
            "uTokensContract": "0x446E028F972306B5a2C36E81D3d088Af260132B3",
            "type": 'isPersistence'
        },
        {
            "name": "pSTAKE Staked ATOM",
            "decimals": 6,
            "symbol": "stkATOM",
            "chainId": 1,
            "net": "cosmos",
            "code": "ATOM",
            "network": "cosmos",
            "address": "0x44017598f2af1bd733f9d87b5017b4e7c1b28dde",
            "logoURI": "img/coins/stkATOM.svg",
            "denom": "uatom",
            "liquidStakingContract": "0xce3f57A8De9AA69da3289871b5FeE5E77fFCF480",
            "tokenWrapperContract": "0xA9739b5BdAfe956DEAa8b2e695c7d4f1DF7Bc1D6",
            "sTokensContract": "0x44017598f2AF1bD733F9D87b5017b4E7c1B28DDE",
            "type": "isStake"
        }
    ]

    const [value,setValue] = useState(1)
    const handleChange = (e) => {
        let { value, min, max } = e.target;
        value = Math.max(Number(min), Math.min(Number(max), Number(value)));
        setValue(value)
    }

    const pool = {
        id: 1,
        apr: 0.32,
        poolAssets: [
            {
                symbol: "1inch",
                denom: "c1inch",
                base_denom: "c1inch",
                amount: "54364364",
                swap_price: "123.321432",
                decimals: 6,
            },
            {
                symbol: "1inch",
                denom: "c1inch",
                base_denom: "c1inch",
                amount: "54364364",
                swap_price: "123.321432",
                decimals: 6,
            }
        ],
        poolTVL: "421435",
        fee: '5',
        isSuperfluidPool: true,
        superFluidAPR: "7.3"
    }

    const validator = {
        name: "Citadel.one",
        address: "cosmosvaloper1lzhlnpahvznwfv4jmay2tgaha5kmz5qxerarrl",
        description: "Citadel.one is a multi-asset non-custodial staking platform that lets anyone become a part of decentralized infrastructure and earn passive income. Stake with our nodes or any other validator across multiple networks in a few clicks.",
        imageSource: "https://raw.githubusercontent.com/cosmostation/cosmostation_token_resource/master/moniker/cosmoshub/cosmosvaloper1lzhlnpahvznwfv4jmay2tgaha5kmz5qxerarrl.png",
        uptime: 99.95,
        isActive: true,
        fee: 5,
        tags: [
            {
                "name": "Recommended",
                "color": "#9900ef"
            }
        ]
    };

    return (
        <div className='base-panel'>
            <LimitCard 
                value={5}
                value2={85}
            />
            <Card style={{ margin: '8px 0 16px' }}>
                <span>customContent</span>
            </Card>
            <SwapBalanceCard 
                amount='32.432' 
                width='40%' 
                bgColor='#DBFBFF' 
                color='#00BFDB' 
                icon='citadel'
                token={{name: 'Citadel.one', code: 'XCT', network: 'bsc'}} 
            />
            <br></br>
            <TokenCard 
                usdPrice="32"
                fee={32}
                poolAssets={pool.poolAssets}
                network={'osmosis'}
                action='Deposit / Withdraw'/>
            <br />
            <BalanceInfoCard>
                <BalanceInfoCardItem 
                    title='Total assets' 
                    textColor='#59779A' 
                    amountColor='#5639E0'
                    icon={'secret'}
                    symbol='OSMO'
                >
                    {12000}
                </BalanceInfoCardItem>
                <BalanceInfoCardItem 
                    title='Available assets' 
                    textColor='#59779A' 
                    amountColor='#D900AB'
                    icon={'secret'}
                    usdSymbol='$'
                >
                    <p>23000</p>
                </BalanceInfoCardItem>
                <BalanceInfoCardItem
                    title='Bonded assets' 
                    textColor='#59779A' 
                    balance='120000' 
                    amountColor='#D85830'
                    usdSymbol='$'
                >
                    <p>34000</p>
                </BalanceInfoCardItem>
                <BalanceInfoCardItem
                    title='Staked OSMO' 
                    textColor='#59779A' 
                    amountColor='#00B2FE'
                    usdSymbol='$'
                >
                    {34000}
                </BalanceInfoCardItem>
            </BalanceInfoCard>
            <h3>Autostake cards</h3>
            <CustomCard 
                data={data} 
                textLeft={'Balance'} 
                textRight={'Min amount to restake'}
            />
            <br/>
            <CustomCard 
                data={data} 
                textLeft={'Price'} 
                textRight={'Provided'}
            />
            <h3>Selected cards</h3>
            <SelectedCards />
            <h3>Validator cards</h3>
            <NoValidatorCard
                style={{marginBottom: '24px'}}
                text="My Superfluid Validator"
                label="no validator"
            />
            <ValidatorCard 
                text="My Superfluid Validator" 
                label="no validator" 
                validatorData={validatorData} 
                showArrow 
            />
            <h3>Address cards</h3>
            <AddressCard 
                data={data} 
                manage 
                coin 
                logoURI='https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x31471E0791fCdbE82fbF4C44943255e923F1b794/logo.png'
            />
            <br/>
            <AddressCard 
                data={data} 
                coin
            />
            <br/>
            <AddressCard 
                data={data}
            />
            <br/>
            <EditAmount data={data} minValue={1} saveValue={() => {}} value={value} setValue={setValue} text='Min amount ' />
            <br />
            <BalanceCard 
                data={balanceCardData} 
                text='Balance' 
                symbol={true} 
                usdPrice='12' 
                txtColor='#292929' 
                amountColor='#59779A'
            />
            <br />
            <BalanceCard 
                data={balanceCardData} 
                style={{backgroundColor:'#FFF'}} 
                txtColor='#6B93C0' 
                amountColor='#5639E0'
            />
            <br />
            <h3>Address Section</h3>
            <AddressSectionCard data={data}/>
            <br/>
            <AddressSectionCard data={data} disabled/>
            <br />
            <GuideCard 
                title='Deposit / withdrawal' 
                background='linear-gradient(90deg, #F3E7FF 0%, #CDE6FF 100%)' 
                textColor='#173296' 
                arrowColor='#002BCC'
            />
            <br />
            <GuideCard 
                title='Manage your bond' 
                background='linear-gradient(90deg, rgba(212, 252, 121, 0.2) 0%, rgba(150, 230, 161, 0.2) 100%)' 
                textColor='#003910' 
                info={true} 
                arrowColor='#1C622F' 
                data={bondData}
            />
            <br />
            <PoolItem
                id={pool.id}
                apr={pool.apr}
                poolAssets={pool.poolAssets}
                isSuperfluidPool={pool.isSuperfluidPool}
                superFluidAPR={pool.superFluidAPR}
                network={'osmosis'}
                poolInfo
            >
                <PoolItemInfo text='Rewards APR' amount={pool.apr} symbol='%' textColor='#D900AB' symbolColor='#3C5B7E'/>
                <PoolItemInfo text='Swap fee' amount={pool.fee} symbol='%' textColor='#D900AB' symbolColor='#3C5B7E'/>
            </PoolItem>
            <br />
            <PoolItemDropDown 
                data={poolData} 
                double={true} 
                apr={true}
            />
            <br />
            <PoolItemDropDown 
                data={poolData} 
                double={true} 
                dropdown={true}
            />
            <br />
            <PoolItemDropDown 
                data={poolData} 
                double={true}
            />
            <br />
            <PoolCard 
                data={poolCard} 
                leftText='Unclaimed balance' 
                claim='Claim' 
                nativeAmountColor='#5639E0' 
                externalAssetColor='#5639E0' 
                bottomText='Claimed balance' 
                bottomNativeColor='#8F3705' 
                bottomBgColor='#D85830' 
                topBgColor='#7C63F5' 
                deadline
            />
            <br />
            <PoolCard 
                data={poolCard} 
                leftText='You pay' 
                rightText='You get' 
                removeBtn 
                nativeAmountColor='#8F3705' 
                externalAssetColor='#5639E0' 
                bottomBgColor='#D85830' 
                topBgColor='#7C63F5'
            />
            <br />
            <AddressItem 
                data={data} 
                validator={true} 
                onClick={() => setActive(!active)} 
                active={active} 
                type='isPersistence'
            />
            <br/>
            <AddressItem 
                data={data} 
                onClick={() => setActive(!active)} 
                active={active}
            />
            <br />

            <AddressBlock 
                data={addressBlock} 
                logoURI='https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x31471E0791fCdbE82fbF4C44943255e923F1b794/logo.png' 
                onClick={() => setActive(!active)} 
                active={active} 
                usdPrice='1200'
            />

            <br />
            <ClaimBlock 
                data={balanceCardData[0]} 
                rewards='123' 
                textColor='#5639E0' 
                bgColor='#C6D1FF' 
                disabled={true}>
                    <PoolItemInfo 
                        text='Rewards APR' 
                        amount={12} 
                        symbol='%' 
                        textColor='#D900AB' 
                        symbolColor='#3C5B7E'
                    />
            </ClaimBlock>

            <PoolSlider 
                name='Withdraw amount' 
                rangeFrom={0} 
                rangeTo={100} 
                value={value} 
                onChange={setValue} 
                onInputChange={handleChange} 
            />
            {/* <UnbondedLiquidityClaim data={pool} unlock={unlock} onClick={() => console.log("aa")} textColor='#5639E0' textColor2='#0095D6' popUpText='When executing a liquidity withdrawal, that liquidity enters into a 7-day unbonding period. Rewards are still accumulated during this time.'/> */}

            <NodeValidatorCard
                type='restake'
                network='cosmos'
                name={validator.name}
                address={validator.address}
                logo={validator.imageSource}
                fee={validator.fee}
                status={false}
            ></NodeValidatorCard>

            <NodeValidatorCard
                network='juno'
                address={validator.address}
                logo={validator.imageSource}
                fee={validator.fee}
                status={false}
            >
                Custom Content
            </NodeValidatorCard>
            <br/>

            <div>
                <StatisticCard title='stkd-SCRT Price'>
                    <p>1.064946 <span>SCRT</span></p>
                </StatisticCard>
                <StatisticCard title='stkd-SCRT Price'>
                    <p>1.064946 <span>SCRT</span></p>
                </StatisticCard>
            </div>
            <br />
            <UnbondedBlock>
                <UnbondedBlockItem 
                    title='Claimable?' 
                    textColor='#292929' 
                    className='info'
                >
                 <p>NO</p>  
                </UnbondedBlockItem>
                <UnbondedBlockItem 
                    title='Next batch estimated time' 
                    textColor='#292929' 
                    className='info'
                >
                    <p>NO</p>  
                </UnbondedBlockItem>
                <UnbondedBlockItem 
                    title='Amount' 
                    textColor='#292929' 
                    className='info'
                >
                    <p>NO</p>  
                </UnbondedBlockItem>
            </UnbondedBlock>
        </div>
    )
}

export default Cards