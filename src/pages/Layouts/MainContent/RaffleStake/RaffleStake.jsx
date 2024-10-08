import { Col, Form, Row, Table } from 'antd';
import SearchByDate from '../../../../components/SearchByDate/SearchByDate';
import { StakeServices } from '../../../../../services/StakeService';
import { useEffect, useState } from 'react';
import check from "../../../../assets/Icon/check.png"
import close from "../../../../assets/Icon/close.png"
import StakeComponent from '../../../../component/StakeComponent';

const RaffleStake = () => {

    const [dataSource, setDataSource] = useState([])
    const [onTicketForm] = Form.useForm();
    const [data, setData] = useState({});
    const [winningTags, setWinningTags] = useState();
    const [total, setTotal] = useState();

    const onChangeStartDate = (date, dateString) => {
        console.log("Start Date", dateString);
        setData({ ...data, start_date: dateString })
    };
    const onChangeEndDate = (date, dateString) => {
        console.log(date, dateString);
        setData({ ...data, end_date: dateString })

    };
    const handleChange = (value) => {
        console.log(`selected ${value}`);
        setData({ ...data, search_value: value })

    };

    const onInputChange = (e) => {

        setData({ ...data, search_item: e.target.value })

    };
    const handleWinningTagsChange = (value) => {

        setData({ ...data, winningTag: value })

    };
    const onSubmit = async () => {
        console.log("data is ", data)
        // try {
        //     const res = await StakeServices.searchStakeByDate(data);
        //     if (res.data.data) {
        //         setDataSource(res.data.data.res)
        //         setTotal(res.data.data.total)

        //     }

        // }catch(error){

        // }
    }
    useEffect(() => {
        const getDraws = async () => {
            try {
                const res = await StakeServices.getAllStakes();
                if (res.data.data) {
                    setDataSource(res.data.data.stakes)
                    setTotal(res.data.data.total)
                    setWinningTags(res.data.data.winningTags)
                }
            } catch (error) {
                console.log(error)
            }
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
            title: 'Pay Method',
            dataIndex: 'payment_method',
            key: 'payment_method',
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
                record.is_open === 1 ? (
                    <div className='d-flex gap-1'>
                        Active

                    </div>
                ) : (
                    <div className='d-flex gap-1'>
                        Closed
                    </div>

                ),
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
            <StakeComponent titleContent="All Stakes" total={total} />

            <div className="raffle-stake content">
                {/* <SearchByDate
                    search_item={data.search_item}
                    handleWinningTagsChange={handleWinningTagsChange}
                    onInputChange={onInputChange}
                    winningTags={winningTags}
                    handleChange={handleChange}
                    onSubmit={onSubmit}
                    onChangeEndDate={onChangeEndDate}
                    onChangeStartDate={onChangeStartDate}
                /> */}
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
