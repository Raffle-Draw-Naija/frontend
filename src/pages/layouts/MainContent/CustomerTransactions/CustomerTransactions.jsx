import { Col, Row, Table } from 'antd';
import { useEffect, useState } from 'react';
import { CustomerServices } from '../../../../../services/CustomerService';


const CustomerTransactions = () => {
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        const getDraws = async () => {
            const res = await CustomerServices.getTransactions();
            if (res.data.data) setDataSource(res.data.data)
        }
        getDraws()
    }, []);

    const columns = [
        {
            title: 'First Name',
            dataIndex: 'first_name',
            key: 'first_name',
        },
        {
            title: 'Last Name',
            dataIndex: 'last_name',
            key: 'last_name',
        },
        {
            title: 'Transaction Type',
            dataIndex: 'transaction_type',
            key: 'transaction_type',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Date',
            dataIndex: 'transaction_date',
            key: 'transaction_date',
        }
    ];

    return (
        <div>
            <div className="raffle-stake">
                <Row>
                    <Col span={24}>
                        <Table dataSource={dataSource} columns={columns} />;
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default CustomerTransactions