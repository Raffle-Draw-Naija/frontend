import { useEffect, useState } from 'react';
import './Dashboard.scss'
import { Col, Row, Card, Table } from 'antd';
import { StakeServices } from '../../../../../services/StakeService';
import Raise from '../../../../assets/raise.png'
import Stake from '../../../../assets/stake.png'
import Bitcoin from '../../../../assets/bitcoin-wallet.png'
import check from "../../../../assets/Icon/check.png"
import close from "../../../../assets/Icon/close.png"
import BarChart from '../../../../components/BarChart';
import PieChart from '../../../../components/PieChart';
import { UserData } from '../../../../components/data';
import LineChart from '../../../../components/LineChart';


const Dashboard = () => {

    const [dataSource, setDataSource] = useState([])
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: "Customers",
                data: UserData.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],

            },
        ],
    });

    const [stakesData, setStakesData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: "Customers",
                data: UserData.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],

            },
        ],
    });
    useEffect(() => {
        const dashboard = async () => {
            try {
                const res = await StakeServices.dashboard();
                console.log(res.data.data.customerGraphData)
                if (res.data.data) setDataSource(res.data.data)
                setUserData({
                    labels: res.data.data.stakesGraphData.map((data) => data.year),
                    datasets: [
                        {
                            label: "Stakes",
                            data: res.data.data.stakesGraphData.map((data) => data.amount),
                            backgroundColor: [
                                "rgba(75,192,192,1)",
                                "#ecf0f1",
                                "#50AF95",
                                "#f3ba2f",
                                "#2a71d0",
                            ],

                        },
                    ],
                })
                setStakesData({
                    labels: res.data.data.customerGraphData.map((data) => data.year),
                    datasets: [
                        {
                            label: "Customers",
                            data: res.data.data.customerGraphData.map((data) => data.count),
                            backgroundColor: [
                                "rgba(75,192,192,1)",
                                "#ecf0f1",
                                "#50AF95",
                                "#f3ba2f",
                                "#2a71d0",
                            ],

                        },
                    ],
                })
            } catch (error) {
                console.log(error)
            }
        }
        dashboard()
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
            <Row gutter={16} className='top-row'>
                <Col className="gutter-row mb-4" xl={8} lg={8} md={8} sm={24} xs={24}>

                    <Card style={{ width: "100%" }}>
                        <Row gutter={16} className='top-row'>
                            <Col className="gutter-row left" span={9} style={{ backgroundColor: "#7946d2" }}>
                                <img src={Stake} alt="" />

                            </Col>
                            <Col className="gutter-row right" span={15}>

                                <div className='right'>

                                    <header>Total No. of Stakes</header>
                                    <div className='number'>
                                        {dataSource.stakesCount}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Card>

                </Col>
                <Col className="gutter-row mb-4" xl={8} lg={8} md={8} sm={24} xs={24}>

                    <Card style={{ width: "100%" }} className='left'>
                        <Row gutter={16} className='top-row'>
                            <Col className="gutter-row left" span={9} style={{ backgroundColor: "#1f53ce" }}>
                                <img src={Raise} alt="" />

                            </Col>
                            <Col className="gutter-row right" span={15}>

                                <div className='right'>

                                    <header>Total Fund Disbursed</header>
                                    <div className='number'>
                                        {dataSource.stakesCount}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Card>

                </Col>
                <Col className="gutter-row" xl={8} lg={8} md={8} sm={24} xs={24}>

                    <Card style={{ width: "100%" }}>

                        <Row gutter={16} className='top-row'>
                            <Col className="gutter-row left" span={9} style={{ backgroundColor: "#ce711f" }}>
                                <img src={Bitcoin} alt="" />
                            </Col>
                            <Col className="gutter-row right" span={15}>

                                <div className='right'>

                                    <header>Total Fund Made</header>

                                    <div className='number'>
                                        43039
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Card>

                </Col>
            </Row>
            <div>

                <Row gutter={16} className='mt-5'>
                    <Col className="gutter-row left mb-5" xl={12} lg={12} md={12} sm={24} xs={24} >
                        <Card >

                            <h4>Recent Stakes</h4>
                            <BarChart chartData={userData} />

                        </Card>
                    </Col>
                    <Col className="gutter-row right" xl={12} lg={12} md={12} sm={24} xs={24}>
                        <Card style={{ width: "100%" }}>
                            <h4>Recent Customers</h4>
                            <PieChart chartData={stakesData} />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16} className='mt-5'>
                    <Col className="gutter-row mb-5" xl={12} lg={12} md={12} sm={24} xs={24} >
                        <Card style={{ width: "100%" }}>
                            <h4>Recent Agents</h4>
                            <LineChart chartData={userData} />
                        </Card>
                    </Col>
                    <Col className="gutter-row" xl={12} lg={12} md={12} sm={24} xs={24}>
                        <Card style={{ width: "100%" }}>
                            <h4>Recent Stakes</h4>
                            <Table dataSource={data} columns={columns} pagination={false} />;
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default Dashboard
