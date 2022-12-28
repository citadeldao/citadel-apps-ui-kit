import React from 'react';
import classNames from 'classnames';
import TableRow from './TableRow';

import '../../assets/styles/uiKit/table.scss';

const Table = ({ columns, data, className, onRowClick = () => {}, rowClassName = () => {}}) => {
    return (
        <div className={classNames('table', className)}>
            <div className="table__header">
                <TableRow columns={columns} isHeader/>
            </div>
            <div className="table__body">
                {data?.map((item, index) => (
                    <TableRow
                        columns={columns}
                        item={item}
                        key={index}
                        className={rowClassName(item, index)}
                        onClick={() => onRowClick(item, index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Table;