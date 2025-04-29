import React from 'react';
import { Card, Form, Input, Button, Select, notification } from 'antd';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux"


import Cookie from "../../../../helpers/cookie/cookie"
import CreateCookie from "../../../../helpers/createdCookie";
import { listUser, User } from "../../../../services/user";
import { ListCompany } from '../../../../services/company';
import { register } from '../../../../actions';
const Register = () => {
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  const token = CreateCookie(16);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [user, setUser] = useState([]);
  const [company, setCompany] = useState([]);

  useEffect(() => {
    const data = async () => {
      const User = await listUser();
      setUser(User)
      const Compa = await ListCompany();
      setCompany(Compa)
    }
    data()
  }, [])
  if (user.length === 0) return

  const onFinish = async (values) => {
    const checkAccout = user.find(item => item.email === values.email || item.phone === parseInt(values.phone))
    if (checkAccout) {
      api.error({
        message: `phone : ${values.phone} hoặc email :  ${values.email} đã được sủ dụng`,
        description: "email hoặc phone đã được sử dụng",
      });
      form.resetFields()
    } else {
      Cookie.setCookie("email", values.email, 1)
      Cookie.setCookie("token", token, 1)
      Cookie.setCookie("companyID", values.companyID, 1)
      Cookie.setCookie("name", values.name, 1)
      const value = {
        ...values,
        token: token,
        phone: parseInt(values.phone)
      }
      const data = await User(value)
      dispatch(register(data))
      navigate("/")
    }
  };

  return (
    <>
      {contextHolder}
      <Card title="Đăng ký tài khoản" style={{ maxWidth: 400, margin: '40px auto' }}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Tên công ty"
            name="companyID"
            rules={[{ required: true, message: 'Vui lòng nhập tên công ty' }]}
          >
            <Select
              placeholder="chọn thành phố"
              options={
                company.map(item => (
                  { value: item.id, label: item.companyName }
                ))
              }
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Vui lòng nhập email' },
              { type: 'email', message: 'Email không hợp lệ' }
            ]}
          >
            <Input placeholder="contact@abc.com" />
          </Form.Item>

          <Form.Item
            label="Số điện thoại"
            name="phone"
          >
            <Input placeholder="Nhập số điện thoại" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
          >
            <Input.Password placeholder="Nhập mật khẩu" />
          </Form.Item>

          <Form.Item
            label="Tên người dùng"
            name="name"
            rules={[{ required: true, message: 'Vui lòng nhập tên công ty' }]}
          >
            <Input placeholder="Nhập tên người dùng" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default Register;
