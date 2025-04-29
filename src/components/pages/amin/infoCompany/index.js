import { Card, Form, Input, Row, Col, Button } from "antd";
import { useEffect, useState } from "react";
import { ItemCompany } from "../../../../services/company";
import cookieUtils from "../../../../helpers/cookie/cookie";
import "./index.scss";
import { updateCompany } from "../../../../services/company";
function InfoCompany() {

  const id = cookieUtils.getCookie("companyID");

  const [company, setCompany] = useState(null);
  const [form] = Form.useForm();
  const [status, setStatus] = useState(true);
  // const [content, setContent] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   address: "",
  //   staff: "",
  //   workTime: "",
  //   website: "",
  //   shortDesc: "",
  //   longDesc: "",
  // });

  useEffect(() => {
    const fetchCompany = async () => {
      const result = await ItemCompany(id);
      setCompany(result);
    };
    fetchCompany();
  }, [id]);

  useEffect(() => {
    if (company) {
      const initial = {
        name: company.companyName,
        email: company.email,
        phone: company.phone,
        address: company.address,
        staff: company.quantityPeople,
        workTime: company.workingTime,
        website: company.website,
        shortDesc: company.detail,
        longDesc: company.description,
      };
      // setContent(initial);
      form.setFieldsValue(initial);
    }
  }, [company, form]);

  const Handle = () => {
    if (status) {
      setStatus(false);
    } else {
      form
        .validateFields()
        .then(async (values) => {
          const data = {
            ...values,
            id :parseInt(id)
          }
          const datas = await updateCompany(data)
          setStatus(true);
        })
        .catch((err) => {
          console.error("lỗi code infoCompany dòng 64");
        });
    }
  };
//initialValues={content}
  if (!company) return null;
    return (
        <Card
            title="Thông tin công ty"
            extra={<Button type="primary" onClick={Handle}> {status ? "Chỉnh sửa" : "lưu chỉnh sửa"}</Button>}
            className="inforCompany"
        >
            <Form layout="vertical" form={form}   disabled={status}>
                <Row gutter={[16, 16]}>
                    <Col span={8}>
                        <Form.Item label="Tên công ty" name="name" rules={[{ required: true }]}>
                            <Input  />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Email" name="email" rules={[{ required: true }]}>
                            <Input  />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Số điện thoại" name="phone">
                            <Input  />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Địa chỉ" name="address">
                            <Input  />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Số lượng nhân sự" name="staff">
                            <Input  />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Thời gian làm việc" name="workTime">
                            <Input  />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Link website" name="website">
                            <Input  />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item label="Mô tả ngắn" name="shortDesc">
                    <Input.TextArea  autoSize={{ minRows: 3 }} />
                </Form.Item>

                <Form.Item label="Mô tả chi tiết" name="longDesc">
                    <Input.TextArea autoSize={{ minRows: 6 }} />
                </Form.Item>
            </Form>
        </Card>
    );
}
export default InfoCompany;