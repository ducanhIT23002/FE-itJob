import {getlistCompany , getItemCompary } from "../query/index"
import { updateCPN } from "../mutation"
const path = "http://localhost:3000/graphql"

export const ListCompany = async  () => {
    const query = getlistCompany
    const res = await fetch(path, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      return data.data.getlistCompany; // Chỉ return phần dữ liệu
}

export const ItemCompany = async  (id) => {
  const query = getItemCompary(id);
  const res = await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    return data.data.getItemCompary; // Chỉ return phần dữ liệu
}

export const updateCompany = async  (id) => {
  const query = updateCPN(id);
  const res = await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    return data.data.updateItemCompany; // Chỉ return phần dữ liệu
}