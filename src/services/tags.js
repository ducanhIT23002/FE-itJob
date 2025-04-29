import {GetlistTag} from "../query/index"

const path = "http://localhost:3000/graphql"

export const listTag = async () => {
    const query = GetlistTag
    const res = await fetch(path, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      return data.data.getlistTag; // Chỉ return phần dữ liệu
}