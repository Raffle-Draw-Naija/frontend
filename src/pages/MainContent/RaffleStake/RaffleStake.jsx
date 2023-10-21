import { Col, Row, Table } from 'antd';
// import StakeComponent from '../../../component/StakeComponent';
import { StakeServices } from '../../../../services/StakeService';
import { useEffect, useState } from 'react';
import check from "../../../assets/Icon/check.png"
import close from "../../../assets/Icon/close.png"

const RaffleStake = () => {

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
        },
    ];
    return (
        <div>
            <div className="raffle-stake">
                {/* <StakeComponent /> */}
                <Row>
                    <Col span={24}>

                        <Table dataSource={dataSource} columns={columns} />;

                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default RaffleStake
