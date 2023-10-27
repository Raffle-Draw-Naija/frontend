
import { Card, Button, Form, Input, Select } from 'antd';
import { useParams } from 'react-router-dom';
import { CategoryServices } from '../../../../../services/CategoryService';
import { useEffect, useState } from 'react';

const { Option } = Select;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const EditWinningTags = () => {

    const { id } = useParams()
    const [winningTags, setWinningTags] = useState([])

    useEffect(() => {
        const getDraws = async () => {
            const res = await CategoryServices.getSingleWinningTags(id);
            console.log(res.data.data.name)
            if (res.data.data) setWinningTags(res.data.data)

        }
        getDraws()
    }, []);


    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
    };
    const onReset = () => {
        form.resetFields();
    };
    console.log("name ", winningTags.name)
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ "height": "70vh" }}>
            <Card title="Edit Winning Tag" style={{ width: 600 }}>
                {winningTags && winningTags.stake_price}
                <Form
                    {...layout}
                    form={form}
                    initialValues={{
                        stake_price: winningTags && winningTags.stake_price,
                        name: winningTags && winningTags.name,
                    }}
                    name="control-hooks"
                    onFinish={onFinish}
                    style={{
                        maxWidth: 600,
                    }}
                >
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="stake_price"
                        label="Stake Price"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input type='text' values="Mon" />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button htmlType="button" onClick={onReset}>
                            Reset
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default EditWinningTags