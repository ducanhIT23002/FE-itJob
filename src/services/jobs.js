import {getListJob , getAJob} from "../query/index"
import { CreateAJob, UpdateAJob , DeleteJob} from "../mutation"
const path = process.env.REACT_APP_GRAPHQL_ENDPOINT;
export const jobs = async  () => {
    const query = getListJob
    const res = await fetch(path, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      const parsedResult = data.data.getListJob.map(job => ({
        ...job,
        tags: JSON.parse(job.tags),
        city: JSON.parse(job.city),
      }));
      return parsedResult; // Chỉ return phần dữ liệu
}

export const Ajob = async (id) => {
  const query = getAJob(id)
  const res = await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    const job = data.data.getAJob;

    return {
      ...job,
      tags: JSON.parse(job.tags),
      city: JSON.parse(job.city),
    };
}

export const createJob = async (ajob) => {
  const query = CreateAJob(ajob)
  const res = await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    const job = data.data.CreateJob;
    return {
      ...job,
      tags: JSON.parse(job.tags),
      city: JSON.parse(job.city),
    };
}

export const UpdateJob = async (ajob) => {
  const query = UpdateAJob(ajob)
  const res = await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    const job = data.data.UpdateJob;
    return {
      ...job,
      tags: JSON.parse(job.tags),
      city: JSON.parse(job.city),
    };
}

export const deleteJob = async (id) => {
  const query = DeleteJob(id)
  const res = await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    const job = data.data.DeleteJob;
    return job;
}