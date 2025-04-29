import React from 'react';
import { Card, Form, Input, Button, notification } from 'antd';
import { useNavigate } from "react-router-dom";
import Cookie from "../../../../helpers/cookie/cookie"
import { listUser } from '../../../../services/user';
import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux"
import { login } from '../../../../actions';

const Login = () => {
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [users, setUsers] = useState([])
  useEffect(() => {
    const data = async () => {
      const listUsers = await listUser()
      setUsers(listUsers)
    }
    data()
  }, [])
  if (users.length === 0) {
    return(<div>vui lòng đợi ... </div>)
  }

  const onFinish = (values) => {
    const userLogin = users.find(item => (
      values.email === item.email && values.password === item.password
    ))
    if (userLogin) {
      Cookie.setCookie("email", userLogin.email, 1)
      Cookie.setCookie("token", userLogin.token, 1)
      Cookie.setCookie("companyID", userLogin.CompanyId, 1)
      Cookie.setCookie("name", userLogin.name, 1)
      dispatch(login(userLogin))
      navigate("/")
    } else {
      api.error({
        message: `email : ${values.email} hoặc password không hợp lệ`,
        description: "email hoặc password không hợp lệ",
      });
      form.resetFields()
    }

  };

  return (
    <>
      {contextHolder}
      <Card title="Đăng nhập" style={{ maxWidth: 400, margin: '40px auto' }}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
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
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
          >
            <Input.Password placeholder="Nhập mật khẩu" />
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

export default Login;
