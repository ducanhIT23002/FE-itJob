export const register = (users) => {
    console.log(users)
    return {
        type : "REGISTER",
        user : users
    };
}

export const login = (users) => {
    return {
        type : "LOGIN",
        user : users
    };
}

export const logout = () => {
    return {
        type : "LOGOUT"
    };
}