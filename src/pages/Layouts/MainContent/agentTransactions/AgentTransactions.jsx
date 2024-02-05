import { Col, Row, Table } from 'antd';
import { useEffect, useState } from 'react';
import check from "../../../../assets/Icon/check.png"
import StakeComponent from '../../../../component/StakeComponent';
import { UserServices } from '../../../../../services/UserService';
const AgentTransactions = () => {
    const [dataSource, setDataSource] = useState([])
    const [total, setTotal] = useState([])
    useEffect(() => {
        const getDraws = async () => {
            try {
                const res = await UserServices.getAgentTransactions();
                if (res.data.data) {
                    setDataSource(res.data.data.history)
                    setTotal(res.data.data.total)
                }
            } catch (error) {
                console.log(error)
            }
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
            title: 'Narration',
            dataIndex: 'narration',
            key: 'narration',
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

            <div className="raffle-stake content">
                <StakeComponent titleContent="Agents Transactions" total={total} />

                <Row>
                    <Col span={24}>
                        <Table dataSource={dataSource} columns={columns} />;
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default AgentTransactions