import {getlistCV , getItemCV} from "../query/index"
import { createCV , statusCV ,DeleteCV} from "../mutation"
const path = "http://localhost:3000/graphql"

export const ListCV = async  () => {
    const query = getlistCV
    const res = await fetch(path, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      return data.data.getlistCV; // Chỉ return phần dữ liệu
}

export const ItemCV = async  (id) => {
  const query = getItemCV(id);
  const res = await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    return data.data.getItemCV; // Chỉ return phần dữ liệu
}


export const NewCV = async  (cv) => {
  const query = createCV(cv);
  const res = await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    return data.data.CreateCV; // Chỉ return phần dữ liệu
}


export const StatusCV = async (id) => {
  const query = statusCV(id)
  const res = await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    const job = data.data.StatusCV;
    return job;
}

export const deleteCV = async (id) => {
  const query = DeleteCV(id)
  const res = await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    const job = data.data.DeleteCV;
    return job;
}