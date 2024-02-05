
import { useEffect, useState } from 'react';
import { Button, Form, Card, Select, DatePicker, Input } from 'antd';
import { CategoryServices } from '../../../../../services/CategoryService';
import { StakeServices } from '../../../../../services/StakeService';
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

const { Option } = Select;
const StartADraw = () => {
    const [categories, setCategories] = useState([])
    const [winningTags, setWinningTags] = useState([])
    const [formData, setFormData] = useState({})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('vertical');
    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };


    useEffect(() => {
        async function getCategories() {

            const res = await CategoryServices.getCategories();
            setCategories(res.data.Categories)
            console.log(res.data.Categories)
        }
        getCategories()
    }, []);

    const onStartChange = (date, dateString) => {
        console.log(dateString);
        setFormData({ ...formData, start_date: dateString })
    };

    const onEndChange = (date, dateString) => {
        console.log(dateString);
        setFormData({ ...formData, end_date: dateString })
    };

    const onWinNumberChange = async (e) => {
        setFormData({ ...formData, win_nos: e.target.value })
    };
    const onMaxWinNumberChange = async (e) => {
        setFormData({ ...formData, max_winner_count: e.target.value })
    };
    const onStakePriceChange = async (e) => {
        setFormData({ ...formData, stake_price: e.target.value })
    };
    const onWinningTagChange = async (value) => {
        const res = await CategoryServices.getWinningTags(value);
        setWinningTags(res.data.data)
        setFormData({ ...formData, winning_tags_id: value })
    };

    const onCategoryChange = async (value) => {
        const res = await CategoryServices.getWinningTags(value);
        setWinningTags(res.data.data)
        setFormData({ ...formData, category_id: value })
    };
    const onFinish = async () => {
        setLoading(true)
        try {
            const startADraw = await StakeServices.stateARaffle(formData)
            if (startADraw.status == 200) {
                setLoading(false)
                // navigate("/raffle-draws");
                Swal.fire({
                    title: 'Success!',
                    text: 'Raffle Draw Created Successfully.',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                }).then(() => {
                    navigate("/raffle-draws")
                })
            }
        } catch (error) {
            setLoading(false)
        }

    };


    return (
        <div className="d-flex justify-content-center align-items-center main-content">
            <ToastContainer />
            <Card title="Start a New Raffle" className='mt-5' style={{ width: 600, height: "600px", overflow: "auto" }}>
                <Form
                    layout={formLayout}
                    form={form}

                    onFinish={onFinish}
                >
                    <Form.Item name="category" label="Choose Category" rules={[{ required: true }]} labelCol={{ span: 24 }}>
                        <Select

                            placeholder="Select a option and change input text above"
                            onChange={onCategoryChange}
                            allowClear
                        >
                            {
                                categories && categories.map(category => (
                                    <Option key={category.cat_ref} value={category.cat_ref}>{category.name}</Option>

                                ))
                            }
                        </Select>

                    </Form.Item>
                    <Form.Item name="winning_tags" label="Select Winning Tag" rules={[{ required: true }]} labelCol={{ span: 24 }}>
                        <Select
                            placeholder="Select a option and change input text above"
                            allowClear
                            onChange={onWinningTagChange}
                        >
                            {
                                winningTags && winningTags.map(winningTag => (
                                    <Option key={winningTag.win_tag_ref} value={winningTag.win_tag_ref}> {winningTag.name}</Option>
                                ))
                            }
                        </Select>

                    </Form.Item>

                    <Form.Item name="start_date" label="Select Start Date" rules={[{ required: true }]} labelCol={{ span: 24 }}>
                        <DatePicker format="YYYY-MM-DD" onChange={onStartChange} className='w-100' />
                    </Form.Item>

                    <Form.Item name="end_date" label="Select End Date" rules={[{ required: true }]} labelCol={{ span: 24 }}>
                        <DatePicker format="YYYY-MM-DD" onChange={onEndChange} className='w-100' />
                    </Form.Item>
                    <Form.Item
                        label="Type Win Number"
                        name="win_nos"
                        onChange={onWinNumberChange}
                        value={setFormData || ''}
                        rules={[
                            {
                                required: true,
                                message: 'Win Number is Required',
                            },
                        ]}
                        labelCol={{ span: 24 }}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Type Maximum No. of Winners"
                        name="max_winner_count"
                        onChange={onMaxWinNumberChange}
                        value={setFormData || ''}
                        rules={[
                            {
                                required: true,
                                message: 'Maximum No. of Winners',
                            },
                        ]}
                        labelCol={{ span: 24 }}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Stake Price"
                        name="stake_price"
                        onChange={onStakePriceChange}
                        value={setFormData || ''}
                        rules={[
                            {
                                required: true,
                                message: 'Stake Price',
                            },
                        ]}
                        labelCol={{ span: 24 }}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" className='btn btn-primary w-100'>
                            {
                                loading ? (
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                ) : (
                                    <div>Start</div>
                                )
                            }
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default StartADraw