import React from 'react';
import { Form, Input, Select, InputNumber, Button, Row, Col, notification } from 'antd';
import { ListCompany } from '../../../../services/company';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { createJob } from '../../../../services/jobs';
import { create } from '../../../../actions/job';
import { useNavigate } from 'react-router-dom';
import {LoadingOutlined} from "@ant-design/icons"
const { TextArea } = Input;
const { Option } = Select;

const CreateJob = () => {
    const [api, contextHolder] = notification.useNotification();
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const [listCom, setListCom] = useState([])
    useEffect(() => {
        const data = async () => {
            const company = await ListCompany()
            setListCom(company)
        }
        data()
    }, [])
    if (listCom.length === 0) return
    const onFinish = async (values) => {
        const newJobs = await createJob(values)
        dispatch(create(newJobs))
        form.resetFields()
        api.success({
            message: `Đang tạo job mới`,
            description: (
                <>
                  <LoadingOutlined /> vui lòng đợi trong giây lát
                </>
              )
          });
        setTimeout(() => {
            navigate("/admin/job-manage")
        }, 2000)
    };

    return (
        <>
            {contextHolder}
            <div style={{ padding: 24, background: '#fff', height: "100%" }}>
                <h2 style={{ marginBottom: 24 }}>Tạo job mới</h2>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="name"
                                label="Tên job"
                                rules={[{ required: true, message: 'Vui lòng nhập tên job' }]}
                            >
                                <Input placeholder="Nhập tên job" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="salary"
                                label="Mức lương"
                                rules={[{ required: true, message: 'Vui lòng nhập mức lương' }]}
                            >
                                <InputNumber
                                    style={{ width: '100%' }}
                                    min={0}
                                    addonAfter="$"
                                    placeholder="Nhập số"
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="tags"
                                label="Tags"
                                rules={[{ required: true, message: 'Vui lòng chọn hoặc nhập tags' }]}
                            >
                                <Select placeholder="Chọn tags" mode="tags">
                                    <Option value="java">java</Option>
                                    <Option value="C">C++</Option>
                                    <Option value="nodeJS">nodeJS</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="city"
                                label="Thành phố"
                                rules={[{ required: true, message: 'Vui lòng chọn thành phố' }]}
                            >
                                <Select placeholder="Chọn thành phố" mode="tags">
                                    <Option value="hanoi">Hà Nội</Option>
                                    <Option value="hcm">Hồ Chí Minh</Option>
                                    <Option value="danang">Đà Nẵng</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row >
                        <Col span={12}>
                            <Form.Item
                                name="idCompany"
                                label="company"
                                rules={[{ required: true, message: 'Vui lòng chọn hoặc nhập tags' }]}
                            >
                                <Select placeholder="Chọn company">
                                    {listCom.map((item, index) => (
                                        <Option key={index} value={item.id}>
                                            {item.companyName}
                                        </Option>))}
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item
                        name="description"
                        label="Mô tả"
                    >
                        <TextArea rows={6} placeholder="Nhập mô tả công việc" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Tạo mới
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
};

export default CreateJob;
