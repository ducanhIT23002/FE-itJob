import { Button, Layout, Menu } from "antd";
import { MenuUnfoldOutlined, ClockCircleOutlined, UserOutlined, ControlOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";
import "./adminPlayout.scss"
import cookieUtils from "../../../../helpers/cookie/cookie";

const { Footer, Sider, Content } = Layout;

function AdminPlayout() {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const navigate = useNavigate();
    const Logout = () => {
        cookieUtils.deleteInfo()
        navigate(`/login`);
    }
    return (
        <>
            <Layout className="layout-default">
                <header className={`header${collapsed ? ' header--collapsed' : ''}`}>
                    <div className="header__logo">
                        {collapsed ? 'ITA' : 'IT ADMIN'}
                    </div>

                    <div className="header__nav">
                        <div className="header__nav-left">
                            <div className="header__collapse" onClick={toggleCollapsed}>
                                <MenuUnfoldOutlined />
                            </div>
                        </div>

                        <div className="header__nav-right">
                            <Button>
                                <Link to="/">
                                    Trang chủ
                                </Link>
                            </Button>
                            <Button onClick={Logout}>Đăng xuất</Button>
                        </div>
                    </div>
                </header>

                <Layout>
                    <Sider
                        className="sider" width={200}
                        collapsedWidth={100} // chiều rộng khi thu lại
                        collapsed={collapsed}
                    >
                        <Menu
                            mode="inline"
                            inlineCollapsed={collapsed}
                            items={[
                                {
                                    key: '1',
                                    icon: <ClockCircleOutlined />,
                                    label: <Link to="/admin">Tổng quan</Link>
                                },
                                {
                                    key: '2',
                                    icon: <UserOutlined />,
                                    label: <Link to="/admin/info-company">Thông tin công ty</Link>
                                },
                                {
                                    key: '3',
                                    icon: <UnorderedListOutlined />,
                                    label: <Link to="/admin/job-manage">Quản lý việc làm</Link>
                                },
                                {
                                    key: '4',
                                    icon: <ControlOutlined />,
                                    label: <Link to="/admin/manage-cv">Quản lý CV</Link>
                                },
                            ]}
                        />
                    </Sider>
                    <Content className="main">
                        <Outlet />
                    </Content>
                </Layout>
                <Footer >Footer</Footer>
            </Layout>
        </>
    )
}
export default AdminPlayout;