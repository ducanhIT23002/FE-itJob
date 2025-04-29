import { useParams } from 'react-router-dom';
import { Button, Tag } from 'antd';
import ApplyForm from "./formApply"
import { useEffect, useState } from 'react';
import "./detail.scss"
import { Ajob } from "../../../../services/jobs"
export default function Detail() {
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
            <div className='Detail'>
                <div className="Detail_title">
                    {item.name}
                </div>
                <Button type="primary" className='Detail_button'>
                    Ứng tuyển Ngay
                </Button>
                <div className="Detail_company">
                    company :<b> {item.company.companyName} </b>
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
                {/* <div className="Detail_address">

                    Address : <b>Nguyễn Hoàng Diệu</b>
                </div> */}
                {/* <div className="Detail_created">
                    created: <b> {item.Created}</b>
                </div> */}
                <div className="Detail_description">
                    description : {item.description}
                </div>
            </div>
            <ApplyForm 
            idCompany={item.company.id}
            idJob={item.id} 
            />
        </>
    )
}
//props ={idJob : }