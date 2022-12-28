import React from 'react'
import InfoCardBlock from '../uiKit/InfoCardBlock'
import InfoCardItem from '../uiKit/InfoCardItem'
import Spinner from '../uiKit/Spinner'
const InfoCards = () => {
    const routes = [
        {
          logoURI: 'https://assets.coingecko.com/coins/images/13469/thumb/1inch-token.png?1608803028',
          name: 'Cosmos'
        },
        {
          logoURI: 'https://assets.coingecko.com/coins/images/13469/thumb/1inch-token.png?1608803028',
          name: 'Osmosis'
        }
    ]

    let value = 23
    return (
      <div className='base-panel'>
        <InfoCardBlock>
          <InfoCardItem text='Pool Token Price' type='sub-header'/>
          <InfoCardItem text={'Price'}>
            <Spinner />
          </InfoCardItem>
          <InfoCardItem text={'Recipent'}>
            <p>cosmos13p00j3c6qg4q0pds2dzu63h7jnee23fxwtqzrc</p>
          </InfoCardItem>
          <InfoCardItem text={'Last restake'}>
            {value}
          </InfoCardItem>
          <InfoCardItem text={'Last restake'} lastTx={{
    "date": "2022-07-09T00:25:30.845Z",
    "hash": "FF856B60898DE35F7CF45DA8BC80101928F21173DF71B9AEAE64C5746437FD12"
}}/>
          <InfoCardItem text={'Route'} routes={routes}/>
        </InfoCardBlock>
          
        <br/>
        <InfoCardBlock>
          <InfoCardItem text={'Price'} bold symbol={'OSMO'} symbol2={'ATOM'}>
            {value}
          </InfoCardItem>
          <InfoCardItem text={'Price impact'} symbol={'%'}>
            {value}  
          </InfoCardItem>
          <InfoCardItem text={'Pooled XCT'} symbol={'XCT'}>
            {value}
          </InfoCardItem>
          <InfoCardItem text={'Pooled USDT'}>
            {value}
          </InfoCardItem>
        </InfoCardBlock>
          
        <br/>
        <InfoCardBlock>
          <InfoCardItem text={'Rate'} symbol={'OSMO'}>
            {value}
          </InfoCardItem>
          <InfoCardItem text={'Swap fee'} symbol={'%'}>
            {value}
          </InfoCardItem>
          <InfoCardItem text={'Estimated slippage'} symbol={'%'} footer>
            {value}
          </InfoCardItem>
        </InfoCardBlock>
          
        <br/>
        <InfoCardBlock>
          <InfoCardItem text={'Claim history'} header />
          <InfoCardItem dateBlock/>
          <InfoCardItem text={'1/12/2022, 1:15:29 PM'} symbol={'XCT'}>
            {value}
          </InfoCardItem>
          <InfoCardItem text={'23/12/2022, 3:15:29 PM'} symbol={'XCT'}>
            {value}
          </InfoCardItem>
          <InfoCardItem text={'31/12/2022, 2:15:29 PM'} symbol={'XCT'}>
            {value}
          </InfoCardItem>
        </InfoCardBlock>
          
        <br/>
        <InfoCardBlock>
          <InfoCardItem text={'Claim history'} header />
          <InfoCardItem dateBlock/>
          <InfoCardItem noClaims />
        </InfoCardBlock>
          
        <br/>
        <InfoCardBlock>
          <InfoCardItem text={'Rate'} bold amount={2.34} symbol={'OSMO'} symbol2={'ETH'} dropdown usdPrice={3.2} >
            {value}
            <InfoCardItem text={'1 DAI price'} symbol={'DAI'} usdPrice={3.2}>
              {value}
            </InfoCardItem>
            <InfoCardItem text={'1 ETH price'} symbol={'ETH'} usdPrice={3.2}>
                {value}
            </InfoCardItem>
          </InfoCardItem>
          <InfoCardItem text={'Gas refund'} symbol={'%'} refund>
            {value}
          </InfoCardItem>
          <InfoCardItem text={'Route'} routes={routes}/>
        </InfoCardBlock>
        <br/>
      </div>
  )
}

export default InfoCards