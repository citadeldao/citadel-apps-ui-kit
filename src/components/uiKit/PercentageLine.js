import React from 'react';
import '../../assets/styles/uiKit/percentageLine.css';

export const PercentageLine = ({ items, className = '' }) => {
    return (
        <div className={`percentage-line ${className}`}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`percentage-line__part`}
                    style={{
                        width: `${item.percent}%`,
                        backgroundColor: item.color
                    }}
                />
            ))}
        </div>
    )
}

export default PercentageLine;