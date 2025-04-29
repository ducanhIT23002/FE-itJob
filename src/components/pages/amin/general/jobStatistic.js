import { useEffect, useState } from "react";
import { jobs } from "../../../../services/jobs";
function JobStatistic() {
    const [jobData, setJobData] = useState([]);
    useEffect(() => {
        const fetchJobs = async () => {
            const result = await jobs();
            setJobData(result);
        };
        fetchJobs();
    }, []);
    if (jobData.length === 0) return
    const TrueStatus = jobData.filter(item => {
        if (item.status) {
            return true
        }
        else return false
    }
    )
    return (
        <>
            <div className="collection">
                <h3><b>job</b></h3>
                <div>số lượng job : <b>{jobData.length}</b></div>
                <div>số job đang bật : <b>{TrueStatus.length}</b></div>
                <div>số job đang tắt : <b>{jobData.length - TrueStatus.length}</b></div>
            </div>
        </>
    )
}
export default JobStatistic;