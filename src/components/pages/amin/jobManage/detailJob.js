import { useParams } from 'react-router-dom';
import { Tag } from 'antd';
import { useEffect, useState } from 'react';
import { Ajob } from "../../../../services/jobs"
export default function DetailJob() {
    const [item, setItems] = useState()
    const { id } = useParams();  // Lấy id từ URL
    const Id = parseInt(id)
    useEffect(() => {
        const data = async () => {
            const items = await Ajob(Id)
            setItems(items)
        }
        data();
    }, [Id])
    if (!item) {
        return (
            <>
                <div>vui lòng đợi ... </div>
            </>
        )
    }

    return (
        <>
            <div className='Detail' style={{ padding: '20px' }}>
                <div className="Detail_title">
                    {item.name}
                </div>
                <div className="Detail_company">
                    company :<b> {item.company.companyName} </b>
                </div>
                <div className="Detail_status">
                    status : {item.status ? (
                        <Tag color="green">đang bật</Tag>
                    ) : (
                        <Tag color="red">đang tắt</Tag>
                    )}
                </div>
                <div className="Detail_tags">
                    tags: {item.tags.map((items, index) => (
                        <Tag key={index} color='blue'>
                            {items}
                        </Tag>
                    ))}
                </div>
                <div className="Detail_city">
                    city: {item.city.map((items, index) => (
                        <Tag key={index} color='orange'>
                            {items}
                        </Tag>
                    ))}
                </div>
                <div className="Detail_salary">
                    Salary :<b> {item.salary} </b>
                </div>
                <div className="Detail_description">
                    description : {item.description}
                </div>
            </div>

        </>
    )
}
//props ={idJob : }         