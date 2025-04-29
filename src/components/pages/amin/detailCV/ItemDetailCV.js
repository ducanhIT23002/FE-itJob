import { useParams } from "react-router-dom"
import { ItemCV } from "../../../../services/cv"
import { useState, useEffect } from "react"
import { Tag } from 'antd';

export default function ItemCv() {
    const { id } = useParams()
    const [cv , setCV] = useState()
    useEffect(()=> {
        const data = async () => {
            const itemCV = await ItemCV(id)
            setCV(itemCV)
        }
        data()
    },[id])
    if (!cv) return 
    return (
        <>
         <div className="Detail" style={{ padding: '20px' }}>
            <h1 level={2}>{cv.name}</h1>

            <div className="Detail_phoney">
                <span>phone: </span><b>{cv.phone}</b>
            </div>

            <div className="Detail_status">
                <span>Status: </span>
                {cv.statusRead === "true" ? (
                    <Tag color="green">Đang bật</Tag>
                ) : (
                    <Tag color="red">Đang tắt</Tag>
                )}
            </div>

            <div className="">
                <span>linkProject: </span>
                {cv.linkProject }
            </div>

            <div className="Detail_city">
                <span>City: </span>
                <Tag color="orange">{cv.city}</Tag>
            </div>

            <div className="Detail_email">
                <span>email: </span><b>{cv.email}</b>
            </div>

            <div className="Detail_description">
                <span>Description: </span>
                <p>{cv.description}</p>
            </div>
        </div>
        </>
    )
}