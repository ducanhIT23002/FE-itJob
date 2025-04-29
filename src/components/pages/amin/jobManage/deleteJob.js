import React from 'react';
import { Button, Popconfirm } from 'antd';
import { QuestionCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { deleteJob } from '../../../../services/jobs';

export default function DeletedJob({ record, onReload }) {

    const DeleteJobs = async () => {
        try {
            const check = await deleteJob(record.id);
            if (check) {
                onReload();
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <Popconfirm
                title="Delete the task"
                description="Are you sure to delete this task?"
                icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                onConfirm={DeleteJobs}
            >
                <Button danger><DeleteOutlined /></Button>
            </Popconfirm>
        </>
    )
}