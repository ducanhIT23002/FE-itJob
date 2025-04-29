import React from 'react';
import { Button, Popconfirm } from 'antd';
import { QuestionCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { deleteCV } from '../../../../services/cv';

export default function DeletedCV({ record, onReload }) {

    const DeleteCVs = async () => {
        try {
            const check = await deleteCV(record.id);
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
                title="Delete the CV"
                description="Are you sure to delete this CV?"
                icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                onConfirm={DeleteCVs}
            >
                <Button danger><DeleteOutlined /></Button>
            </Popconfirm>
        </>
    )
}