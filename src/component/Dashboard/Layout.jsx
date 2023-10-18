import Aside from '../../layout/Aside/Aside'
import './Dashboard.scss'
import { Col, Row } from 'antd';
// import MainContent from '../../layout/MainContent/MainContent'

const Layout = () => {
    return (
        <div >

            <Row>
                <Col span={5}>
                    <Aside />
                </Col>
                <Col span={19}>
                </Col>
            </Row>
        </div>
    )
}

export default Layout
