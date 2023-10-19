
import { Col, Popconfirm, Row, Table } from 'antd';
import { useEffect, useState } from 'react';
import { StakeServices } from '../../../../../services/StakeService';
import StakeComponent from '../../../../component/StakeComponent';

import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


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
            title: '#',
            key: 'id',
        },
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
            title: 'Month',
            dataIndex: 'month',
            key: 'month',
        },
        {
            title: 'Year',
            dataIndex: 'year',
            key: 'year',
        },
        {
            title: 'Status',
            dataIndex: 'status',

            render: (_, record) =>
                record.status === 1 ? (
                    <Popconfirm title="Sure to delete?" key={record.id} onConfirm={() => handleStopDraw(record.id)}>
                        <a className='btn btn-primary'>Terminate</a>
                    </Popconfirm>
                ) : (
                    <div>
                        Terminated
                    </div>
                ),
        },
    ];

    return (
        <div>
            <ToastContainer />
            <StakeComponent url={"/start-a-draw"} titleContent="Raffle Draws" buttonContent="Start A Draw" />
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

export default ActiveRaffleDraws