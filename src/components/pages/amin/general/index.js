import InforCompany from "./inforCompany";
import CVStatistic from "./CVStatistic";
import JobStatistic from "./jobStatistic";
import { Col, Row } from "antd"
import "./index.scss"
function General() {
    return (
        <>
            <div className="dash_board">
                <span className="dash_board_title"><b>Tổng quan</b></span>
                <Row gutter={[20, 20]}>
                    <Col span={8}>
                        <JobStatistic />
                    </Col>
                    <Col span={8}>
                        <CVStatistic />
                    </Col >
                    <Col span={8}>
                        <InforCompany />
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default General;