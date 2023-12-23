import { Col, Row, Table } from 'antd';
import { useEffect, useState } from 'react';
import check from "../../../../assets/Icon/check.png"
import StakeComponent from '../../../../component/StakeComponent';
import { UserServices } from '../../../../../services/UserService';
import { useNavigate } from 'react-router-dom';
const Agents = () => {
    const [dataSource, setDataSource] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const getDraws = async () => {
            try {
                const res = await UserServices.getAgents();
                if (res.data.data) {
                    setDataSource(res.data.data)
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
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
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
            title: 'Action',
            dataIndex: 'numberPicked',

            render: (_, record) =>
                record.verified !== 2 ? (
                    <div className='d-flex gap-1'>
                        <div> <button type="button" onClick={() => getRaffles(record.identity)} className="btn btn-primary btn-sm">View Raffles</button></div>
                        {/* <div> <button type="button" className="btn btn-primary">Confirm</button></div> */}

                    </div>
                ) : (
                    <div className='d-flex gap-1'>
                        <img src={check} alt="" style={{ "height": "20px" }} />
                    </div>

                ),
        },
    ];

    const getRaffles = (id) => {
        console.log("Id is ", id)
        navigate(`raffle-draws?identity=${id}`)
    }
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