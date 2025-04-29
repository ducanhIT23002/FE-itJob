export const edit = () => {
    return {
        type: "EDIT"
    };
}

export const deleted = () => {
    return {
        type: "DELETED"
    };
}

export const create = (job) => {
        return {
            type: "CREATE",
            newJobs : job
        };
}