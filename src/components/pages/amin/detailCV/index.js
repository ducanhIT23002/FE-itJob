import { Table, Tag, Button, Space } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { ListCV } from '../../../../services/cv';
import { jobs } from "../../../../services/jobs"
import { StatusCV } from '../../../../services/cv';
import { useNavigate } from 'react-router-dom';
import DeletedCV from "./deletedCV"
function ManageCV() {
    const navigate = useNavigate()
    const [CVData, setCVData] = useState([]);
    const [JobData, setJobData] = useState([]);
    const fetchCV = async () => {
        const result = await ListCV();
        setCVData(result);
        const result2 = await jobs();
        setJobData(result2);
    };
    useEffect(() => {
        fetchCV();
    }, []);
    if (CVData.length === 0 && JobData.length === 0) return
    const Reload = () => {
        fetchCV()
    }
    const setStatus = async (id) => {
        const check = await StatusCV(id)
        if (check) {
            console.log("Trạng thái đã được cập nhật thành công");
            navigate(`/admin/detailCV/${id}`)
        } else {
            console.log("Cập nhật trạng thái thất bại");
        }
    }


    const newData = CVData.map(item => {
        for (let i = 0; i < JobData.length; i++) {
            if (item.idJob === JobData[i].id) {
                return {
                    ...item,
                    title: JobData[i].name
                }
            }
        }
        return { ...item, title: '' };
    })
    const columns = [
        {
            title: 'Tên job',
            dataIndex: 'title',
            id: 'title',
        },
        {
            title: 'Họ tên',
            dataIndex: 'name',
            id: 'name',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
            id: 'phone',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            id: 'email',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'statusRead',
            id: 'statusRead',
            render: (status) => (
                <Tag color={status === "1" ? 'green' : 'red'}>
                    {status === "1" ? "đã đọc" : "chưa đọc"}
                </Tag>
            ),
        },
        {
            title: 'Hành động',
            id: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button icon={<EyeOutlined />} onClick={() => setStatus(record.id)} />
                    <DeletedCV record={record} onReload={Reload} />
                </Space>
            ),
        },
    ];


    return (
        <div style={{ padding: 24 }}>
            <h2>Danh sách CV</h2>
            <Table rowKey="id" columns={columns} dataSource={newData} pagination={false} />
        </div>
    );
};

export default ManageCV;