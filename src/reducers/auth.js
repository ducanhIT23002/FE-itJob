const AuthReducer =  (state = false, action) => {
    switch (action.type) {
        case "LOGOUT":
            return "logout success"
        case "LOGIN":
            return action.user
        case "REGISTER":
            return action.user
        default:
            return state
    }
}

export default AuthReducer