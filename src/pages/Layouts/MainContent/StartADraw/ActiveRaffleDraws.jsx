
import { Col, Popconfirm, Row, Table } from 'antd';
import { useEffect, useState } from 'react';
import { StakeServices } from '../../../../../services/StakeService';
import StakeComponent from '../../../../component/StakeComponent';

import { ToastContainer, toast } from 'react-toastify';

const ActiveRaffleDraws = () => {
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        const getDraws = async () => {
            try {
                const res = await StakeServices.raffleDraws();
                if (res.data.data) setDataSource(res.data.data)
            } catch (error) {
                console.log("error ", error.response)
            }
        }
        getDraws()
    }, []);

    const notify = () => toast("Raffle Draw Terminated Successfully..");

    const handleStopDraw = async (id, win_no) => {
        console.log("win is ", win_no)
        try {
            const data = {
                "stake_platform_id": id,
                "win_no": win_no
            }
            const res = await StakeServices.stopDraws(data);
            if (res.status === 200) {
                setDataSource(res.data.data)
                // notify()
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
            dataIndex: 'is_open',

            render: (_, record) =>
                record.is_open == 1 ? (
                    <Popconfirm title="Sure to Close?" key={record.platform_ref} onConfirm={() => handleStopDraw(record.platform_ref, record.win_nos)}>
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