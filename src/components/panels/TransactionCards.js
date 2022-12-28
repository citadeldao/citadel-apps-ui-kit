import React from "react";
import TransactionCard from "../uiKit/TransactionCard";

const TransactionCards = () => {
    const list = [
        {
          "error": true,
          "network": "osmosis",
          "hash": "F5A15278E611F41B70923B4F59C38B7A19A04B394B0EC5EE87D84B2FA7534BA6",
          "fee": {
            "text": "0",
            "symbol": "OSMO"
          },
          "date": "2022-01-19T05:54:22.000Z",
          "memo": "Swap via Citadel.one app",
          "link": "https://www.mintscan.io/osmosis/txs/F5A15278E611F41B70923B4F59C38B7A19A04B394B0EC5EE87D84B2FA7534BA6",
          "tickers": [],
          "view": [
            {
              "type": "Swap",
              "icon": "https://citadel-tx-icons.s3.eu-west-3.amazonaws.com/Swap.svg",
              "components": [
                {
                  "title": "Token In",
                  "value": {
                    "text": "1",
                    "symbol": "OSMO"
                  },
                  "type": "amount"
                },
                {
                  "title": "Route",
                  "value": [
                    "2",
                    "151"
                  ],
                  "type": "text_collection"
                },
                {
                  "title": "Token Out",
                  "value": {
                    "text": "0.000633",
                    "symbol": "ION"
                  },
                  "type": "amount"
                },
                {
                  "title": "Min Token Out",
                  "value": {
                    "text": "255388",
                    "symbol": "ION"
                  },
                  "type": "amount"
                }
              ]
            }
          ]
        },
        {
          "network": "osmosis",
          "hash": "118ABCB68289F143BC4D0764B89DF11C2C57542155C220A90C440A4BDCC97F72",
          "fee": {
            "text": "0",
            "symbol": "OSMO"
          },
          "date": "2022-01-19T05:49:37.000Z",
          "memo": "Swap via Citadel.one app",
          "link": "https://www.mintscan.io/osmosis/txs/118ABCB68289F143BC4D0764B89DF11C2C57542155C220A90C440A4BDCC97F72",
          "tickers": [],
          "view": [
            {
              "type": "Swap",
              "icon": "https://citadel-tx-icons.s3.eu-west-3.amazonaws.com/Swap.svg",
              "components": [
                {
                  "title": "Token In",
                  "value": {
                    "text": "1",
                    "symbol": "OSMO"
                  },
                  "type": "amount"
                },
                {
                  "title": "Route",
                  "value": [
                    "619",
                    "618"
                  ],
                  "type": "text_collection"
                },
                {
                  "title": "Token Out",
                  "value": {
                    "text": "8.763172",
                    "symbol": "DSM"
                  },
                  "type": "amount"
                },
                {
                  "title": "Min Token Out",
                  "value": {
                    "text": "0.255417",
                    "symbol": "DSM"
                  },
                  "type": "amount"
                }
              ]
            }
          ]
        },
        {
          "network": "osmosis",
          "hash": "001D02EF36D4B6A13AEDC433827A3EFA8D888FD2DEE638B23C98779C8057E1DA",
          "fee": {
            "text": "0",
            "symbol": "OSMO"
          },
          "date": "2022-01-18T07:32:43.000Z",
          "memo": "Swap via Citadel.one app",
          "link": "https://www.mintscan.io/osmosis/txs/001D02EF36D4B6A13AEDC433827A3EFA8D888FD2DEE638B23C98779C8057E1DA",
          "tickers": [],
          "view": [
            {
              "type": "Swap",
              "icon": "https://citadel-tx-icons.s3.eu-west-3.amazonaws.com/Swap.svg",
              "components": [
                {
                  "title": "Token In",
                  "value": {
                    "text": "1",
                    "symbol": "OSMO"
                  },
                  "type": "amount"
                },
                {
                  "title": "Route",
                  "value": [
                    "1",
                    "151"
                  ],
                  "type": "text_collection"
                },
                {
                  "title": "Token Out",
                  "value": {
                    "text": "0.251764",
                    "symbol": "ATOM"
                  },
                  "type": "amount"
                },
                {
                  "title": "Min Token Out",
                  "value": {
                    "text": "0.000732",
                    "symbol": "ATOM"
                  },
                  "type": "amount"
                }
              ]
            }
          ]
        },
        {
          "network": "osmosis",
          "hash": "1BB9ADFF0A5314942689C51B426F2C3FFD41CDDC744D085537BC35E11096D457",
          "fee": {
            "text": "0",
            "symbol": "IBC/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
          },
          "date": "2022-01-18T06:44:42.000Z",
          "memo": "Swap via Citadel.one app",
          "link": "https://www.mintscan.io/osmosis/txs/1BB9ADFF0A5314942689C51B426F2C3FFD41CDDC744D085537BC35E11096D457",
          "tickers": [],
          "view": [
            {
              "type": "Swap",
              "icon": "https://citadel-tx-icons.s3.eu-west-3.amazonaws.com/Swap.svg",
              "components": [
                {
                  "title": "Token In",
                  "value": {
                    "text": "0.01",
                    "symbol": "ATOM"
                  },
                  "type": "amount"
                },
                {
                  "title": "Route",
                  "value": [
                    "587",
                    "586"
                  ],
                  "type": "text_collection"
                },
                {
                  "title": "Token Out",
                  "value": {
                    "text": "7.950155",
                    "symbol": "MED"
                  },
                  "type": "amount"
                },
                {
                  "title": "Min Token Out",
                  "value": {
                    "text": "0.039263",
                    "symbol": "MED"
                  },
                  "type": "amount"
                }
              ]
            }
          ]
        },
        {
          "network": "osmosis",
          "hash": "04F92755D35837B91F5D207CA5C0FACDFABBCBAF10F865383BC0F557D0CC38EA",
          "fee": {
            "text": "0",
            "symbol": "OSMO"
          },
          "date": "2022-01-17T07:27:46.000Z",
          "memo": "Swap via Citadel.one app",
          "link": "https://www.mintscan.io/osmosis/txs/04F92755D35837B91F5D207CA5C0FACDFABBCBAF10F865383BC0F557D0CC38EA",
          "tickers": [],
          "view": [
            {
              "type": "Swap",
              "icon": "https://citadel-tx-icons.s3.eu-west-3.amazonaws.com/Swap.svg",
              "components": [
                {
                  "title": "Token In",
                  "value": {
                    "text": "0.01",
                    "symbol": "OSMO"
                  },
                  "type": "amount"
                },
                {
                  "title": "Route",
                  "value": [
                    "604",
                    "611"
                  ],
                  "type": "text_collection"
                },
                {
                  "title": "Token Out",
                  "value": {
                    "text": "0.177917",
                    "symbol": "STARS"
                  },
                  "type": "amount"
                },
                {
                  "title": "Min Token Out",
                  "value": {
                    "text": "0.002452",
                    "symbol": "STARS"
                  },
                  "type": "amount"
                }
              ]
            }
          ]
        }
      ]
    function getAmount(items){
        let amount = {text: 0, symbol: ''}
        if(items.length){
            let transaction = items.find(elem => elem.type !== 'Meta Info')
            if(transaction){
                amount = transaction.components?.find(elem => elem.type === 'amount')?.value || amount
            }else{
                let meta_info = items.find(elem => elem.type === 'Meta Info')
                let values = []
                meta_info.components.forEach(elem => {
                    let arr = elem.value.split(' ')
                    if(arr.length === 2){
                        values.push({text: arr[0], symbol: arr[1]})
                    }
                })
                if(values.length > 0){
                    amount = values[0]
                }
            }
        }
        return amount
    }
    return (
        <div className="base-panel">
            <h3>Transaction Cards</h3>
                {list.map((item,i) => (
                    <TransactionCard 
                     title = { item?.view[0]?.type }
                     icon = { item.view[0]?.icon }
                     date = { item?.date}
                     fee = { item?.fee }
                     status = { item?.error }
                     amount = { getAmount(item?.view) }
                     data={ item }
                     key={i} 
                     />
                ))}
        </div>
    )
}

export default TransactionCards