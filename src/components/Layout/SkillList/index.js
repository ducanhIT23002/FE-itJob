import { listTag } from "../../../services/tags"
import { useEffect, useState } from 'react';
import "./SkillList.scss"
export default function SkillList() {
    const [tag, setTag] = useState()
    useEffect(() => {
        const data = async () => {
            const items = await listTag()
            setTag(items)
        }
        data();
    }, [])
    if (!tag) return 
    return (
        <>
            <div className = "skill_list">
                {tag.map((item, index) => (
                    <div className ="skill_list_item" key={index}>
                        <a  href={`/search?query=${item.name}`} target="_self" rel="noopener noreferrer">
                            {item.name}
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}