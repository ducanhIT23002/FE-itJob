import React, { useState, useEffect } from 'react'; // for React hooks
import { Form, Input, Modal, Tooltip, Button, notification } from 'antd'; // for Ant Design components
import { EditOutlined , LoadingOutlined } from '@ant-design/icons'; // for EditOutlined icon
import { Select } from 'antd';
import { UpdateJob } from '../../../../services/jobs';

const { Option } = Select;


const EditJob = ({ record , onReload}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [form] = Form.useForm();

  useEffect(() => {
    if (isModalOpen) {
      form.setFieldsValue(record);
    }
  }, [isModalOpen, record, form]);

  const handleOk = async () => {
    const values = await form.validateFields(); // 1. validate rồi lấy toàn bộ data
    const data = {
      ...values,
      salary: parseInt(values.salary),
      id: record.id,
      idCompany: record.company.id
    }
    const undatedJob = await UpdateJob(data)
    console.log('Form values:', undatedJob);
    api.success({
      message: 'đang update job',
      description: (
        <>
            <LoadingOutlined /> đang update job vui lòng đợi.
        </>
    )
  });
    setTimeout(() => {
      onReload()
      setIsModalOpen(false);
    },5000)
  };

  return (
    <>
      {contextHolder}
      <Tooltip title="Chỉnh sửa">
        <Button icon={<EditOutlined />} onClick={() => setIsModalOpen(true)} />
      </Tooltip>
      <Modal
        title="Chỉnh sửa công việc"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleOk}
      >
        <Form form={form} layout="vertical">
          <Form.Item label="Tên job" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Mức lương" name="salary">
            <Input />
          </Form.Item>
          <Form.Item label="status" name="status">
            <Input />
          </Form.Item>
          <Form.Item label="city" name="city">
            <Select mode="tags">
              {record.city.map(item => (
                <Option value={item}>{item}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="tags" name="tags">
            <Select mode="tags">
              {record.tags.map(item => (
                <Option value={item}>{item}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="description" name="description">
            <Input />
          </Form.Item>

        </Form>
      </Modal>
    </>
  );
};

export default EditJob