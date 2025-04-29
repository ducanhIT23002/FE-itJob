import { ItemCompany } from "../../../../services/company";
import { useEffect, useState } from "react";
import cookieUtils from "../../../../helpers/cookie/cookie";
function InforCompany() {
    const id = cookieUtils.getCookie("companyID")
    const [company, setCompany] = useState({});
    useEffect(() => {
        const Company = async () => {
            const result = await ItemCompany(id);
            setCompany(result);
        };
        Company();
    }, [id]);
    return (
        <>
            <div className="collection">
                <h3><b>Thông tin công ty</b></h3>
                <div>tên công ty : <b>{company.companyName}</b></div>
                <div>email : <b>{company.email}</b></div>
                <div>số điện thoại : <b>{company.phone}</b></div>
                <div>số nhân viên : <b>{company.quantityPeople}</b></div>
            </div>
        </>
    )
}
export default InforCompany;