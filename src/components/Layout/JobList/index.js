import { Col, Row } from "antd"
import { useEffect, useState } from "react"
import "./jobList.scss"
import { ListCompany } from "../../../services/company"
import { Link } from "react-router-dom";

export default function JobList() {
  const [ListCompanies, SetListCompany] = useState();
  useEffect(() => {
    const data = async () => {
      const companyList = await ListCompany();
      SetListCompany(companyList)
    }
    data();
  }, [])
  if (!ListCompanies) {
    return (<div>vui lòng đợi .....</div>)
  }
  return (
    <>
      <Row gutter={[16, 16]}>
        {ListCompanies.map((item, index) => (
          <Col key={index} span={12}>
            <Link to={`/company/${item.id}`} className="linkCompany">
              <div className="job_item">
                <div>Công ty : <b>{item.companyName}</b></div>
                <div>số nhân sự :<b> {item.quantityPeople}</b></div>
                <div>địa chỉ :<b> {item.address}</b></div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}