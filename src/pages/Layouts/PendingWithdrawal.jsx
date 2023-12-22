
import { Col, Popconfirm, Row, Table } from 'antd';
import { useEffect, useState } from 'react';
import StakeComponent from '../../component/StakeComponent';
import { ToastContainer, toast } from 'react-toastify';
import { UserServices } from '../../../services/UserService';

const PendingWithdrawal = () => {
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        const getDraws = async () => {
            const res = await UserServices.getPendingWithdrawal();
            if (res.data.data) setDataSource(res.data.data)
        }
        getDraws()
    }, []);

    const notify = () => toast("Raffle Draw Terminated Successfully..");

    const handleStopDraw = async (id) => {
        console.log("id is ", id)
        try {
            const data = {
                "status": "Completed"
            }
            const res = await UserServices.updateStatus(id, data);
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
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Account Number',
            dataIndex: 'account_number',
            key: 'account_number',
        },
        {
            title: 'Bank',
            dataIndex: 'bank',
            key: 'bank',
        },
        {
            title: 'Account Name',
            dataIndex: 'account_name',
            key: 'account_name',
        },
        {
            title: 'Status',
            dataIndex: 'status',

            render: (_, record) =>
                record.status === "Pending" ? (
                    <Popconfirm title="Sure to Close?" key={record.id} onConfirm={() => handleStopDraw(record.id)}>
                        <a className='btn btn-primary'>Pending</a>
                    </Popconfirm>
                ) : (
                    <div>
                        Completed
                    </div>
                ),
        },
    ];

    return (
        <div>

            <ToastContainer />
            <StakeComponent titleContent="Pending Withdrawal Request" />
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

export default PendingWithdrawal