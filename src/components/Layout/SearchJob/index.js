import { useNavigate } from "react-router-dom";
import { Col, Row, Form, Select, Input, Button } from "antd"


export default function SerachJob() {

  const navigate = useNavigate();
  const Handle = (e) => {
    const city = e.cityName;
    navigate(`/search?query=${e.item}&city=${city}`);
  }

  return (
    <>

      <div className='title'>
        1000+ IT Jobs for developers
      </div>
      <Form onFinish={Handle}>
        <Row gutter={[16, 16]}>
          <Col span={12} >
            <Form.Item name="cityName">
              <Select
                placeholder="chọn thành phố"
                options={[
                  { value: 'Hồ Chí Minh', label: 'Ho Chi Minh' },
                  { value: 'Hà Nội', label: 'Ha Noi' },
                  { value: 'Đằ Nẵng', label: 'Đằ Nẵng' }
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={12} >
            <Form.Item name="item">
              <Input placeholder="Nhập từ khóa... " />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item >
          <Button type="primary" htmlType="submit">
            tìm kiếm
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}