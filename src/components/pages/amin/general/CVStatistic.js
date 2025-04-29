import { ListCV } from "../../../../services/cv";
import { useEffect, useState } from "react";

function CVStatistic() {
    const [CVData, setCVData] = useState([]);
    useEffect(() => {
        const fetchCV = async () => {
            const result = await ListCV();
            setCVData(result);
        };
        fetchCV();
    }, []);
    if (CVData.length === 0) return
    const TrueStatus = CVData.filter(item => {
        if (item.statusRead ==="1") {
            return true
        }
        else return false
    }       
    )
    return (
        <>
            <div className="collection">
                <h3><b>CV</b></h3>
                <div>số lượng CV : <b>{CVData.length}</b></div>
                <div>số CV đã đọc :<b>{TrueStatus.length}</b></div>
                <div>số CV chưa đọc: <b>{CVData.length - TrueStatus.length}</b></div>
            </div>
        </>
    )
}
export default CVStatistic;