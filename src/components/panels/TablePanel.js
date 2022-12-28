import React, { useState } from 'react';
import Pagination from '../uiKit/Pagination';
import '../../assets/styles/uiKit/table.scss';
import Table from '../uiKit/Table';
import Icon from '../uiKit/Icon';

const columns = [
    {
        title: 'Token',
        key: 'token',
    },
    {
        title: 'Amount',
        key: 'amount',
    },
    {
        title: 'Percentage',
        key: 'percentage',
    },
    {
        title: 'Deadline',
        key: 'deadline',
    },
    {
        title: 'Author',
        key: 'author',
        width: 100,
        mobileWidth: 50,
    },
];
const columns2 = [
    {
        title: 'Token orange',
        key: 'token',
        color: 'orange',
    },
    {
        title: '100px right green bold',
        key: 'amount',
        width: '100px',
        align: 'right',
        color: 'green',
        fontWeight: 700,
        className: 'customClass',
    },
    {
        title: 'Custom template',
        key: 'amount',
        template: (value) => {
            return (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Icon name="fire" width={15} height={15} color="red"></Icon>
                    <b>{value}</b>
                </div>
            );
        },
    },
];

const data = [
    {
        token: 'OSMO',
        amount: 20,
        usdPrice: 2.51,
        percentage: 20,
        deadline: 'in a month',
        author: 'you',
    },
    {
        token: 'OSMO',
        amount: 20,
        usdPrice: 2.51,
        percentage: 20,
        deadline: 'in a month',
        author: 'you',
    },
    {
        token: 'OSMO',
        amount: 20,
        usdPrice: 2.51,
        percentage: 20,
        deadline: 'in a month',
        author: 'you',
    },
    {
        token: 'OSMO',
        amount: 20,
        usdPrice: 2.51,
        percentage: 20,
        deadline: 'in a month',
        author: 'you',
    },
    {
        token: 'OSMO',
        amount: 20,
        usdPrice: 2.51,
        percentage: 20,
        deadline: 'in a month',
        author: 'you',
    },
];

const TablePanel = () => {
    const [pagination, setPagination] = useState({
        page: 1,
        total: 255,
        limit: 10,
    });

    const setPage = (page) => {
        setPagination({
            ...pagination,
            page,
        });
    };

    return (
        <div className="base-input-panel">
            <h2>Simple table</h2>
            <Table
                columns={columns}
                data={data}
                rowClassName={(item, index) => `${item.token}_${index}`}
            />

            <br/>
            <hr/>

            <h2>Custom table</h2>
            <Table
                columns={columns2}
                data={data}
            />

            <h2>Pagination</h2>
            <Pagination
                current={pagination.page}
                items={pagination.total}
                limit={pagination.limit}
                onChange={setPage}
            />
        </div>
    );
};

export default TablePanel;