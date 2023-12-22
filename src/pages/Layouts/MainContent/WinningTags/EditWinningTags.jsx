
import { Card, Button, Form, Input, Select } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { CategoryServices } from '../../../../../services/CategoryService';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

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
    const navigate = useNavigate();
    const { id } = useParams()
    const [winningTags, setWinningTags] = useState([])

    useEffect(() => {
        const getDraws = async () => {
            try {
                const res = await CategoryServices.getSingleWinningTags(id);
                console.log(res.data.data.name)
                if (res.data.data) setWinningTags(res.data.data)
            } catch (error) {
                console.log("Error Occurred")
                Swal.fire(
                    'Alert!',
                    'Error Occurred. Please Try again',
                    'warning'
                )
            }

        }
        getDraws()
    }, []);


    const [form] = Form.useForm();

    const onFinish = async (values) => {
        console.log(values);
        try {
            const res = await CategoryServices.updateWinningTags(id, values);
            console.log(res.data)
            if (res.data.msg === "success") {
                setWinningTags(res.data.data)
                Swal.fire(
                    'Alert!',
                    'Winning Tag Updated Successfully..',
                    'Success',
                ).then(function () {
                    navigate("/winning-tags")
                })

            }
        } catch (error) {
            Swal.fire(
                'Alert!',
                'Error Occurred. Please Try again',
                'warning'
            )
        }
    };
    const onReset = () => {
        form.resetFields();
    };
    console.log("name ", winningTags.name)
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ "height": "70vh" }}>
            <Card title="Edit Winning Tag" style={{ width: 600 }}>
                {winningTags && winningTags.name}
                <Form
                    {...layout}
                    form={form} fields={[
                        {
                            name: ["name"],
                            value: winningTags && winningTags.name,
                        },
                        {
                            name: ["stake_price"],
                            value: winningTags && winningTags.stake_price,
                        },
                    ]}
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
                            Update
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