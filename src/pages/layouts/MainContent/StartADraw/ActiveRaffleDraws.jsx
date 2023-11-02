
import { Col, Popconfirm, Row, Table } from 'antd';
import { useEffect, useState } from 'react';
import { StakeServices } from '../../../../../services/StakeService';
import StakeComponent from '../../../../component/StakeComponent';

import { ToastContainer, toast } from 'react-toastify';

const ActiveRaffleDraws = () => {
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        const getDraws = async () => {
            const res = await StakeServices.raffleDraws();
            if (res.data.data) setDataSource(res.data.data)
        }
        getDraws()
    }, []);

    const notify = () => toast("Raffle Draw Terminated Successfully..");

    const handleStopDraw = async (id) => {
        try {
            const data = {
                "stake_platform_id": id
            }
            const res = await StakeServices.stopDraws(data);
            if (res.status === 200) {
                setDataSource(res.data.data)
                notify()
            }
        } catch (error) {
            console.log(error)
        }
    };
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
            title: 'Start Date',
            dataIndex: 'start_date',
            key: 'start_date',
        },
        {
            title: 'End Date',
            dataIndex: 'end_date',
            key: 'end_date',
        },
        {
            title: 'Win No',
            dataIndex: 'win_nos',
            key: 'win_no',
        },
        {
            title: 'Current Winners',
            dataIndex: 'current_winners',
            key: 'current_winners',
        },
        {
            title: 'Status',
            dataIndex: 'status',

            render: (_, record) =>
                record.status === 0 ? (
                    <Popconfirm title="Sure to Close?" key={record.id} onConfirm={() => handleStopDraw(record.id)}>
                        <a className='btn btn-primary'>Close Raffle</a>
                    </Popconfirm>
                ) : (
                    <div>
                        Raffle Closed
                    </div>
                ),
        },
    ];

    return (
        <div>
            <ToastContainer />
            <StakeComponent url={"/start-a-raffle"} titleContent="Raffle Draws" buttonContent="Start A Raffle" />
            <div className="raffle-stake content">
                <Row>
                    <Col span={24}>

                        <Table dataSource={dataSource} columns={columns} />;

                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ActiveRaffleDraws