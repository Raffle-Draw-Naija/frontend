import { Col, Row, Table } from 'antd';
import { useEffect, useState } from 'react';
import check from "../../../../assets/Icon/check.png"
import close from "../../../../assets/Icon/close.png"
import StakeComponent from '../../../../component/StakeComponent';
import { UserServices } from '../../../../../services/UserService';
const Agents = () => {
    const [dataSource, setDataSource] = useState([])


    useEffect(() => {
        const getDraws = async () => {
            try {
                const res = await UserServices.getAgents();
                if (res.data.data) {
                    setDataSource(res.data.data.stakes)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getDraws()
    }, []);


    const columns = [
        {
            title: 'First Name',
            dataIndex: 'first_name',
            key: 'first_name',
        },
        {
            title: 'Last Name',
            dataIndex: 'last_name',
            key: 'last_name',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Balance',
            dataIndex: 'balance',
            key: 'balance',
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

            <div className="raffle-stake content">
                <StakeComponent titleContent="Agents" />

                <Row>
                    <Col span={24}>
                        <Table dataSource={dataSource} columns={columns} />;
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Agents