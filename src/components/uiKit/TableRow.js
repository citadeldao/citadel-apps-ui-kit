import React from "react"
import classNames from 'classnames';
import TableCell from './TableCell';

const TableRow = ({columns, item, isHeader, className, onClick = () => {}}) => {
    return (
        <div className={classNames('table__row', className)} onClick={() => onClick(item)}>
            {columns?.map((column, index) => {
                return <TableCell
                    key={index}
                    column={column}
                    item={isHeader
                        ? column.title
                        : column.template
                            ? column.template(item[column.key], item)
                            : item[column.key]
                    }
                    isHeader={isHeader}
                />
            })}
        </div>
    )
}

export default TableRow