import {GetlistTag} from "../query/index"

const path = process.env.REACT_APP_GRAPHQL_ENDPOINT;
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