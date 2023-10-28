import { Col, Row, Table } from "antd";
import { useEffect, useState } from "react";
import { StakeServices } from "../../../../services/StakeService";

const BankAccounts = () => {
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        const getDraws = async () => {
            const res = await StakeServices.getAllStakes();
            if (res.data.data) setDataSource(res.data.data)
        }
        getDraws()
    }, []);

    const columns = [
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Winning Tags',
            dataIndex: 'winningTags',
            key: 'winningTags',
        },
        {
            title: 'Stake Price',
            dataIndex: 'stakePrice',
            key: 'stakePrice',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Ticket ID',
            dataIndex: 'ticketId',
            key: 'ticketId',
        }
    ];
    return (
        <div>
            <Row>
                <Col span={24}>

                    <Table dataSource={dataSource} columns={columns} />;

                </Col>
            </Row>
        </div>
    )
}

export default BankAccounts