import { Col, Row, Table } from "antd";
import { useEffect, useState } from "react";
import { UserServices } from "../../../../services/UserService";

const BankAccounts = () => {
    const [dataSource, setDataSource] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        const getDraws = async () => {
            try {

                const res = await UserServices.getAccounts();
                if (res.data.data) setDataSource(res.data.data)
            } catch (error) {

                if (error.response) {
                    setError(error.response.data.data);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            }
        }
        getDraws()
    }, []);

    const columns = [
        {
            title: 'Bank',
            dataIndex: 'bank',
            key: 'bank',
        },
        {
            title: 'Account Number',
            dataIndex: 'account_number',
            key: 'account_number',
        },
        {
            title: 'Account Name',
            dataIndex: 'account_name',
            key: 'account_name',
        },
    ];
    return (
        <div>
            {error && (<div className="alert alert-danger">{error}</div>)}
            <h3 className="mb-3">Bank Accounts</h3>
            <Row>
                <Col span={24}>

                    <Table dataSource={dataSource} columns={columns} />;

                </Col>
            </Row>
        </div>
    )
}

export default BankAccounts