
import { Col, Popconfirm, Row, Table } from 'antd';
import { useEffect, useState } from 'react';
import StakeComponent from '../../../../component/StakeComponent';
import { ToastContainer, toast } from 'react-toastify';
import { UserServices } from '../../../../../services/UserService';

const Withdrawal = () => {
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        const getDraws = async () => {
            const res = await UserServices.getPendingWithdrawal();
            if (res.data.data) setDataSource(res.data.data)
        }
        getDraws()
    }, []);

    const notify = () => toast("Raffle Draw Terminated Successfully..");

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
            title: 'Date',
            dataIndex: 'created_date',
            key: 'created_date',
        },
        // {
        //     title: 'Status',
        //     dataIndex: 'status',

        //     render: (_, record) =>
        //         record.status === "Pending" ? (
        //             <Popconfirm title="Sure to Close?" key={record.id} onConfirm={() => handleStopDraw(record.id)}>
        //                 <a className='btn btn-primary'>Pending</a>
        //             </Popconfirm>
        //         ) : (
        //             <div>
        //                 Completed
        //             </div>
        //         ),
        // },
    ];

    return (
        <div>

            <ToastContainer />
            <StakeComponent titleContent="Withdrawals" />
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

export default Withdrawal