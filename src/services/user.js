import { createUser } from "../mutation";
import { ListUser } from "../query";

const path = process.env.REACT_APP_GRAPHQL_ENDPOINT;
export const User = async (users) => {
    const query = createUser(users)
    const res = await fetch(path, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();

      if (data.errors) {
        console.error("GraphQL Error:", data.errors);
        throw new Error("CreateUser mutation failed");
      }

      return data.data.CreateUser; // Chỉ return phần dữ liệu
}


export const listUser = async () => {
    const query = ListUser
    const res = await fetch(path, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      return data.data.ListUser; // Chỉ return phần dữ liệu
}