import React from "react"
import Button from "./Button"
import moment from "moment";
import '../../assets/styles/uiKit/unbondedLiquidity.css'
import Tooltip from './Tooltip';

const UnbondedLiquidityClaim = (props) => {
    const {data, unlock, onClick, textColor, textColor2, popUpText, className = ''} = props

    const customStyle = {
        native: {
            color: textColor
        },
        external: {
            color: textColor2
        }
    }

    return (
        <div className={`unbonded-claim--block ${className}`}>
            { unlock?.length > 0 && (
                <div className="unbonded-liquidity-block">
                    <div className="unbonded-liquidity-block--text">
                        <div className="unbonded-popup">
                            <h2 className="unbonded-popup--text">Unbonded liquidity claim</h2>
                            <div>
                                <Tooltip text={popUpText}>
                                    <Icon name="info-circle" color="#92B2D6" />
                                </Tooltip>
                            </div>
                        </div>
                        <p className="unbonded-period">Time to unbond: <span>{moment().to(unlock[0]?.expiration)}</span></p>
                    </div>
                    { unlock && (
                        <div className="unbonded-pools">
                            <p style={customStyle.native}>{unlock[0]?.nativeAssetAmount}<span> {data?.nativeAsset?.symbol.toUpperCase()}</span></p>
                            <p style={customStyle.external}>{unlock[0]?.externalAssetAmount}<span> {data?.symbol.toUpperCase()}</span></p>
                        </div>
                    )}
                    { unlock[0]?.ready === true &&
                        <div className="unbonded-btn">
                            <Button type='small' textColor='#5639E0' bgColor='#C6D1FF' onClick={onClick}>Withdraw</Button>
                        </div>
                    }
                </div>
            )}
        </div>
    )
}

export default UnbondedLiquidityClaim