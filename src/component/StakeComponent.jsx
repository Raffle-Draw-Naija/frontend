import { Col, Row, Card } from 'antd';
import { NavLink } from 'react-router-dom';
const StakeComponent = ({ titleContent, buttonContent = '', url = '', total = '' }) => {
    return (
        <div>

            <Row className='mb-3'>
                <Col span={24}>
                    <Card>
                        <div className="d-flex justify-content-between">
                            <div>
                                <div className="d-flex align-items-center gap-3">
                                    <div>
                                        <h3>{titleContent}</h3>
                                    </div>
                                    {url && (

                                        <div className='ml-5'>
                                            <NavLink to={url} className="btn btn-primary">
                                                {buttonContent}
                                            </NavLink>
                                        </div>
                                    )}
                                </div>

                            </div>
                            {total && (
                                <div className='d-flex align-items-center'>
                                    <h5 style={{ fontWeight: "bolder", fontSize: '1.2rem' }}>Total</h5>
                                    <div className="badge bg-success py-2 px-3 mx-4">{total}</div>
                                </div>
                            )}
                        </div>
                    </Card>
                </Col>
            </Row>

        </div>
    )
}

export default StakeComponent