import { Col, Row, Table } from "antd";
import { useEffect, useState } from "react";
import { CustomerServices } from "../../../../../services/CustomerService";

const Customers = () => {
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        const getDraws = async () => {
            const res = await CustomerServices.getCustomers();
            if (res.data.data) setDataSource(res.data.data)
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
            title: 'Wallet',
            dataIndex: 'wallet',
            key: 'wallet',
        },
        {
            title: 'Registration Date',
            dataIndex: 'registration_date',
            key: 'registration_date',
        }
    ];
    return (
        <div>

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

export default Customers