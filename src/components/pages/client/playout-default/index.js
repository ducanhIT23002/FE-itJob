import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { Link } from "react-router-dom";
import cookieUtils from "../../../../helpers/cookie/cookie";
// import { useEffect, useState } from "react";
import { UserOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../../actions";
import { listUser } from "../../../../services/user";
import { useState, useEffect } from "react";
import '@ant-design/v5-patch-for-react-19';
import "./playout-default.scss"
function LayoutDefault() {
    const [user, checkUser] = useState([])
    const resault = useSelector(state => state.AuthReducer)
    console.log(resault)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = cookieUtils.getCookie("token")
    useEffect(() => {
        const data = async () => {
            const userList = await listUser()
            checkUser(userList)
        }
        data();
    },[])
    if (user.length === 0) return

    const check = user.find(item => item.token ===token)

    const Handle = () => {
        navigate(`/`);
    }
    const Logout = () => {
        cookieUtils.deleteInfo()
        dispatch(logout())
        navigate(`/login`);
    }
    return (
        <>
            <div className="layout_default">
                <header className="layout_default_header">
                    <div onClick={Handle} className="layout_default_header_title">
                        IT Jobs
                    </div>
                    <div className="layout_default_header_authority">
                        {token ? (
                            <div>
                                {check.admin === true && (
                                    <Button>
                                        <Link to="/admin">
                                            <UserOutlined />
                                            Amin
                                        </Link>
                                    </Button>)}
                                <Button onClick={Logout}>
                                    đăng xuất
                                </Button>
                            </div>
                        ) : (
                            <>
                                <Link to="/login">
                                    <Button>
                                        đăng nhập
                                    </Button>
                                </Link>
                                <Link to="/register">
                                    <Button type="primary">
                                        Đăng Ký
                                    </Button>
                                </Link>
                            </>
                        )}

                    </div>
                </header>
                <main className="layout_default_main"><Outlet /></main>
                <footer className="layout_default_footer"> End </footer>
            </div>
        </>
    );
}
export default LayoutDefault