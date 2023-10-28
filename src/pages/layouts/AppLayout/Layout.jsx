import Aside from '../Aside/Aside'
import { Col, Row } from 'antd';
// import MainContent from '../../layout/MainContent/MainContent'
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import "./Layout.scss"
const Layout = () => {
    return (
        <div >

            <Row>
                <Col span={5}>
                    <Aside />
                </Col>
                <Col span={19}>
                    <Row>
                        <Col span={24}>
                            <Navbar />
                        </Col>
                        <Col span={24}>
                            <div className="outlet">
                                <Outlet />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Layout
