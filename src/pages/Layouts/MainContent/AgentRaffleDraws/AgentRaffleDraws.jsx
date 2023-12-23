import { Col, Row, Table } from 'antd';
import { StakeServices } from '../../../../../services/StakeService';
import { useEffect, useState } from 'react';
import check from "../../../../assets/Icon/check.png"
import close from "../../../../assets/Icon/close.png"
import StakeComponent from '../../../../component/StakeComponent';
import { useSearchParams } from 'react-router-dom';

const AgentRaffleDraws = () => {

    const [dataSource, setDataSource] = useState([])
    const [total, setTotal] = useState();
    const [searchParams, setSearchParams] = useSearchParams();
    const identity = searchParams.get("identity")


    useEffect(() => {
        const getDraws = async (identity) => {
            try {
                const res = await StakeServices.getAgentRaffle(identity);
                if (res.data.data) {
                    setDataSource(res.data.data)
                    setTotal(res.data.data.total)

                }
            } catch (error) {
                console.log(error)
            }
        }
        getDraws(identity)
    }, []);


    const columns = [

        {
            title: 'Winning Tags',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Stake Price',
            dataIndex: 'stakePrice',
            key: 'stakePrice',
        },
        {
            title: 'Date',
            dataIndex: 'created_at',
            key: 'created_at',
        },
        {
            title: 'Number Picked',
            dataIndex: 'stake_number',

            render: (_, record) =>
                record.win === 1 ? (
                    <div className='d-flex gap-1'>
                        <img src={check} alt="" style={{ "height": "20px" }} />
                        <div>{record.stake_number}</div>

                    </div>
                ) : (
                    <div className='d-flex gap-1'>
                        <img src={close} alt="" style={{ "height": "20px" }} />
                        <div>{record.stake_number}</div>
                    </div>

                ),
        },
    ];
    return (
        <div>

            <StakeComponent titleContent="Agent Raffle Draws" total={total} />

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

export default AgentRaffleDraws