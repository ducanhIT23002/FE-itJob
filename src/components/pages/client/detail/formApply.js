import { Form, Row, Col, Input, Button, notification } from "antd";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { NewCV } from "../../../../services/cv";
export default function ApplyForm({ idJob, idCompany }) {

    const [ItemCV, setItemCV] = useState({})
    const navigate = useNavigate();

    const [api, contextHolder] = notification.useNotification();
    const [form] = Form.useForm();
    const openNotification = (e) => {
        if (e) {
            const newDataCV = {
                ...e,
                phone: parseInt(e.phone),
                idJob : idJob,
                idCompany : idCompany,

            }
            console.log(newDataCV)
            const data = async () => {
                const newCv = await NewCV(newDataCV)
                setItemCV(newCv)
            }
            data()
            api.success({
                message: 'Thông báo',
                description:`${newDataCV.name} đã gửi CV thành công.`,
            });
            form.resetFields();  // xóa hết giá trị các ô input
            setTimeout(() => {
                navigate("/")
            }, 2000)
        } else {
            api.error({
                message: 'Thông báo',
                description:
                    'Bạn đã gửi CV thất bại.',
            });
        }
    };



    return (
        <>
            {contextHolder}
            <div className="Form">
                <div > <b> Ứng tuyển ngay </b></div>
                <Form layout="vertical" onFinish={openNotification} form={form} >
                    <Row gutter={[20, 20]}>
                        <Col span={6} >
                            <Form.Item
                                label="Họ Tên :"
                                name="name"
                                rules={[{ required: true, message: 'Vui lòng nhập nội dung' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={6} >
                            <Form.Item
                                label="Số điện thoại :"
                                name="phone"
                                rules={[{ required: true, message: 'Vui lòng nhập nội dung' }]}
                            >
                                <Input  />
                            </Form.Item>
                        </Col>
                        <Col span={6} >
                            <Form.Item
                                label="Email :"
                                name="email"
                                rules={[{ required: true, message: 'Vui lòng nhập nội dung' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={6} >
                            <Form.Item
                                label="Thành Phố:"
                                name="city"
                                rules={[{ required: true, message: 'Vui lòng nhập nội dung' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} >
                            <Form.Item
                                label="Giới thiệu bản thân :"
                                name="selfIntro"
                                rules={[{ required: true, message: 'Vui lòng nhập nội dung' }]}
                            >
                                <Input.TextArea />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} >
                            <Form.Item
                                label="Danh sách link project đã làm :"
                                name="linkProject"
                                rules={[{ required: true, message: 'Vui lòng nhập nội dung' }]}
                            >
                                <Input.TextArea />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row >
                        <Button type="primary" htmlType="submit">
                            Gửi CV
                        </Button>
                    </Row>
                </Form>
            </div>
        </>
    )
}
