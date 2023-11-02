import Aside from '../../pages/layouts/Aside/Aside'
import { Col, Row } from 'antd';
// import MainContent from '../../layout/MainContent/MainContent'
import { Outlet } from 'react-router-dom';
import Navbar from '../../pages/layouts/Navbar/Navbar';
import "./Layout.scss"
const Layout = () => {
    return (
        <div >

            <Row>
                <Col lg={5} className='d-sm-block d-none d-sm-none d-md-block'>
                    <Aside />
                </Col>
                <Col xl={19} lg={19} md={19} sm={24} xs={24}>
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
