import { Table, Tag, Button, Space } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { jobs } from '../../../../services/jobs';
import EditJob from "./editJob"
import DeletedJob from './deleteJob';
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
function JobManage() {
  const resaultJob = useSelector(state => state.JobReducer)
  console.log(resaultJob)
  // fetch DATA
  const [jobDatas, setJobData] = useState([]);

  const fetchJobs = async () => {
    const result = await jobs();
    setJobData(result);
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  const Reload = () => {
    fetchJobs()
  }
  if (jobDatas.length === 0) return
  // fetch DATA

  // TABLE
  const columns = [
    {
      title: 'Tên job',
      dataIndex: 'name',
      id: 'name',
      render: (text) => <div>{text}</div>,
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      id: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map(tag => (
            <Tag color="blue" key={tag}>{tag}</Tag>
          ))}
        </>
      ),
    },
    {
      title: 'Mức lương ($)',
      dataIndex: 'salary',
      id: 'salary',
    },
    // {
    //   title: 'Thời gian',
    //   key: 'time',
    //   render: (_, record) => (
    //     <>
    //       <div>Ngày tạo: {record.createdAt}</div>
    //       <div>Cập nhật: {record.updatedAt}</div>
    //     </>
    //   ),
    // },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      id: 'status',
      render: (_, record) => (
        <>
          {record.status ? (
            <Tag color="green">đang bật</Tag>
          ) : (
            <Tag color="red">đang tắt</Tag>
          )}
        </>
      ),
    },
    {
      title: 'Hành động',
      id: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/admin/detail-job/${record.id}`}>
            <Button icon={<EyeOutlined />} />
          </Link>
          <EditJob record={record} onReload={Reload} />
          <DeletedJob record={record} onReload={Reload} />
        </Space>
      ),
    },
  ];
  // TABLE


  return (
    <div style={{ padding: 24 }}>
      <h2>Danh sách việc làm</h2>
      <Link to="/admin/create-job">
        <Button type="primary" style={{ marginBottom: 16 }}>+ Tạo việc mới</Button>
      </Link>
      <Table rowKey="id" columns={columns} dataSource={jobDatas} pagination={false} />
    </div>
  );
}
export default JobManage;