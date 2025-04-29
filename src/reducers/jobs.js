const JobReducer = (state = false, action) => {
        switch (action.type) {
            case "DELETED":
                return
            case "EDIT":
                return
            case "CREATE":
                return "tạo thành công"
            default:
                return state
        }
}
export default JobReducer