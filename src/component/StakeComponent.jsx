import { Button } from 'antd';
import { Col, Row } from 'antd';
import { NavLink } from 'react-router-dom';
const StakeComponent = ({ titleContent, buttonContent, url }) => {
    return (
        <div>

            <Row className='mb-5'>
                <Col span={24}>
                    <div className="d-flex align-items-center gap-3">
                        <div>arrow</div>
                        <div>
                            <h2>{titleContent}</h2>
                        </div>
                        <div>

                            <NavLink to={url} className="btn btn-primary">
                                {buttonContent}
                            </NavLink>
                        </div>
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default StakeComponent