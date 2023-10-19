
import { useEffect, useState } from 'react';
import { Button, Form, Card, Select, DatePicker } from 'antd';
import { CategoryServices } from '../../../../../services/CategoryService';
import { StakeServices } from '../../../../../services/StakeService';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const { Option } = Select;
const StartADraw = () => {
    const [categories, setCategories] = useState([])
    const [winningTags, setWinningTags] = useState([])
    const [formData, setFormData] = useState({})
    const [validationErrors, setValidationErrors] = useState([])
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
        }
        getCategories()
    }, []);
    const notify = () => toast("Raffle Draw Started Successfully..");


    const onChange = (date, dateString) => {
        console.log(dateString);
        setFormData({ ...formData, start_date: dateString })
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
            const startADraw = await StakeServices.startADraw(formData)
            if (startADraw.status == 200) {
                setLoading(false)
                navigate("/raffle-draws");
            }
        } catch (error) {
            setValidationErrors(error.response.data.errors)
            console.log("error", validationErrors);
            setLoading(false)
        }
    };


    return (
        <div className="d-flex justify-content-center align-items-center main-content">
            <ToastContainer />
            <Card title="Start a New Draw" style={{ width: 600 }}>
                <Form
                    layout={formLayout}
                    form={form}
                    onValuesChange={onFormLayoutChange}
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
                                    <Option key={category.id} value={category.id}>{category.name}</Option>

                                ))
                            }
                        </Select>

                    </Form.Item>
                    <Form.Item name="winning_tags" label="Select Winning Tag" rules={[{ required: true }]} labelCol={{ span: 24 }}>
                        <Select
                            placeholder="Select a option and change input text above"
                            onChange={onWinningTagChange}
                            allowClear
                        >
                            {
                                winningTags && winningTags.map(winningTag => (
                                    <Option key={winningTag.id} value={winningTag.id}>{winningTag.name}</Option>
                                ))
                            }
                        </Select>

                    </Form.Item>
                    <Form.Item name="start_date" label="Select Date" rules={[{ required: true }]} labelCol={{ span: 24 }}>
                        <DatePicker format="YYYY-MM-DD" onChange={onChange} className='w-100' />
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