import { useParams } from 'react-router-dom';
import { ItemCompany } from '../../../../services/company';
import { jobs } from '../../../../services/jobs';
import { useEffect, useState } from "react"
import { Col, Tag } from 'antd';
import { Link } from "react-router-dom";

import "./index.scss"
function DetailCompany() {
    const { id } = useParams()
    const [ItemCompanies, SetItemCompany] = useState();
    const [Jobs, setJobs] = useState();

    useEffect(() => {
        const data = async () => {
            const companyList = await ItemCompany(id);
            SetItemCompany(companyList)
            const job = await jobs()
            setJobs(job)
        }
        data();
    }, [id])

    if (!ItemCompanies || !Jobs) {
        return <div>vui lòng đợi ..... </div>;
    }
    const jobCompany = Jobs.filter(item =>
        item.company?.id === ItemCompanies.id
    );
    return (
        <>
            <div className='company'>
                <div>
                    <h1>{ItemCompanies.companyName}</h1>
                </div>
                <div>
                    địa chỉ: <b> {ItemCompanies.address}</b>
                </div>
                <div>
                    số lượng nhân sự :  <b> {ItemCompanies.quantityPeople}</b>
                </div>
                <div>
                    thời gian làm việc :   <b>{ItemCompanies.workingTime}</b>
                </div>
                <div>
                    link website : <b>  {ItemCompanies.website}</b>
                </div>
                <div>
                    mô tả ngắn :  {ItemCompanies.detail}
                </div>
                <div>
                    mô tả chi tiết :  {ItemCompanies.description}
                </div>
                <div>
                    {jobCompany.map((item, index) => (
                        <Col span={12} key={index}>
                            <div className='Job-item'>
                                <div >
                                    <Link to={`/detail/${item.id}`}>
                                        <b>{item.name}</b>
                                    </Link>
                                </div>
                                <div> Ngôn Ngữ :
                                    {item.tags.map((subLag, subIndex) => (
                                        <Tag key={subIndex} color="blue">{subLag}</Tag>
                                    ))}
                                </div>
                                <div> Thành Phố :
                                    {item.city.map((subLag, subIndex) => (
                                        <Tag key={subIndex} color="orange">{subLag}</Tag>
                                    ))}
                                </div>
                                <div>Lương : <b>{item.salary}</b></div>
                                <div>Công ty : <b>{item.company ? item.company.companyName : "Đang cập nhật"}</b></div>
                                {/* <div>Ngày Tạo : <b>{item.Created}</b></div> */}
                            </div>
                        </Col>
                    ))}
                </div>

            </div>
        </>
    )
}

export default DetailCompany