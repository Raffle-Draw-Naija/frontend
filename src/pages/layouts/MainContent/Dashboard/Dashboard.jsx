import { useEffect, useState } from 'react';
import './Dashboard.scss'
import { Col, Row, Card, Table } from 'antd';
import { StakeServices } from '../../../../../services/StakeService';

import check from "../../../../assets/Icon/check.png"
import close from "../../../../assets/Icon/close.png"

const Dashboard = () => {

    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        const getDraws = async () => {
            const res = await StakeServices.dashboard();
            console.log(res.data.data.recentStakes)
            if (res.data.data) setDataSource(res.data.data)
        }
        getDraws()
    }, []);

    const data = dataSource?.recentStakes
    const columns = [

        {
            title: 'Ticket ID',
            dataIndex: 'ticketId',
            key: 'ticketId',
        },
        {
            title: 'Winning Tags',
            dataIndex: 'winningTags',
            key: 'winningTags',
        },
        {
            title: 'Number Picked',
            dataIndex: 'numberPicked',

            render: (_, record) =>
                record.win === 1 ? (
                    <div className='d-flex gap-1'>
                        <img src={check} alt="" style={{ "height": "20px" }} />
                        <div>{record.numberPicked}</div>

                    </div>
                ) : (
                    <div className='d-flex gap-1'>
                        <img src={close} alt="" style={{ "height": "20px" }} />
                        <div>{record.numberPicked}</div>
                    </div>

                ),
        }
    ];


    return (
        <div className="dashboard">
            <Row gutter={16}>
                <Col className="gutter-row" span={8}>
                    <div className='card'>
                        <Card style={{ width: "100%" }}>
                            <header>Total No. of Stakes</header>
                            <div className='number'>
                                {dataSource.stakesCount}
                            </div>
                        </Card>
                    </div>
                </Col>
                <Col className="gutter-row" span={8}>
                    <div className='card'>
                        <Card style={{ width: "100%" }}>
                            <header>Total Fund Disbursed</header>
                            <div className='number'>
                                40
                            </div>
                        </Card>
                    </div>
                </Col>
                <Col className="gutter-row" span={8}>
                    <div className='card'>
                        <Card style={{ width: "100%" }}>
                            <header>Total Fund Made</header>
                            <div className='number'>
                                40
                            </div>
                        </Card>
                    </div>
                </Col>
            </Row>
            <div>

                <Row gutter={16} className='mt-5'>
                    <Col className="gutter-row" span={12}>
                        <div className='card'>
                            <Card style={{ width: "100%" }}>
                                <header>Total No. of Stakes</header>
                                Chart
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div className='card'>
                            <Card style={{ width: "100%" }}>
                                <h4>Recent Stakes</h4>
                                <Table dataSource={data} columns={columns} pagination={false} />;
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default Dashboard
