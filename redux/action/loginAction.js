const LoginAction=(data)=>{
    return{
        type: "login",
        payload : data
    }
}

export default LoginAction;