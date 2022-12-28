import React from "react";
import '../../assets/styles/uiKit/statisticCard.scss';

const StatisticCard = (props) => {
    const {
        title, 
        children, 
        className = ''
    } = props

    return (
        <div className={`statistic-card-container ${className}`}>
            <p className="statistic-card__title">{title}</p>
            {children}
        </div>
    )
}

export default StatisticCard