import { Col, Tag } from 'antd';
import { Link } from "react-router-dom";
function SearchItem({ cityQue, data, Query }) {
    let newData  = [];
    let regex = null;
    if (Query) {
        regex = new RegExp(Query, 'i');
    }

        if (cityQue && Query) {
             newData = data.filter(item => {
                const matchCity = item.city.includes(cityQue); // match city if cityQue is provided
                const matchQuery = regex.test(item.name); // match item.name if Query is provided as a regex
                return matchCity && matchQuery;
            });
        } else if (cityQue) {
             newData= data.filter(item => {
                return item.city.includes(cityQue); // match city if only cityQue is provided
            });
        } else if (Query) {
             newData = data.filter(item => {
                return regex.test(item.name); // match item.name if only Query is provided
            });
        } else {
             newData = data.filter(item => {
                return true; // no filtering, return all data if neither cityQue nor Query is provided
            });
        }
    
    return (
        <>
            {newData.length > 0 ? (
                newData.map((item, index) => (
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
                ))
            ) : (
                <div><b>Không có bất gì job nào liên quan đến {Query} ....</b></div>
            )}

        </>
    );
}

export default SearchItem;
