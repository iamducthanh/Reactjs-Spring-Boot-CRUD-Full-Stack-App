import axios from "axios";

const USER_REST_API_URL = "http://localhost:8080/api/v1/user"

class UserService{

    getAllUser(){
        return axios.get(USER_REST_API_URL);
    }

    createUser(user){
        return axios.post(USER_REST_API_URL, user);
    }
}

export default new UserService();