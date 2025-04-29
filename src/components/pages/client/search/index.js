import { useLocation } from 'react-router-dom';
import { Row } from 'antd';
import { jobs } from "../../../../services/jobs"
import { useEffect, useState } from "react";
import "./search.scss"
import SearchItem from "../../../searchItem/index"
export default function Search() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const rawQuery = queryParams.get('query');
    const query = (!rawQuery || rawQuery === "undefined") ? null : rawQuery;

    const rawCity = queryParams.get('city');
    const city = (!rawCity || rawCity === "undefined") ? null : rawCity;

    const [jobData, setJobData] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            const result = await jobs();
            setJobData(result);
        };
        fetchJobs();
    }, []);

    return (
        <>
            <div><b>Kết Qủa Tìm kiếm : </b>{query ? query : "ALL JOB"}</div>
            <Row gutter={[16, 16]}>
                <SearchItem
                    cityQue={city}
                    data={jobData}
                    Query={query}
                />
            </Row>
        </>
    );
}