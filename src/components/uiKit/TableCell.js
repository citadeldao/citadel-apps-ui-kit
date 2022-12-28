import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

const TableCell = ({ item, column, isHeader }) => {
    const [windowDimensions, setWindowDimensions] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const width = (windowDimensions > 320 && windowDimensions <= 560)
        || (windowDimensions >= 1024 && windowDimensions < 1220)
        ? parseInt(column.mobileWidth || column.width)
        : parseInt(column.width);

    return (
        <div
            style={{
                flex: `0 1 ${width}px`,
                textAlign: column.align,
                fontWeight: !isHeader && column.fontWeight,
                color: !isHeader && column.color,
            }}
            className={classNames('table__cell', !isHeader && column.className)}
        >
            {item}
        </div>
    );
};

export default TableCell;