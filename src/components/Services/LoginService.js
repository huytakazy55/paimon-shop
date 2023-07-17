import axios from "axios";

const API_ENDPOINT = "https://localhost:7039";
axios.defaults.withCredentials = true; // cho phép gửi cookie hay token

class LoginService {
    login(username, password){
        return axios.post(API_ENDPOINT+"/api/auth/signin", {
            username: username,
            password: password
        }, { withCredentials: true });// cho phép gửi cookie hay token
    }
    signup(username, password, nickname) {
        return axios.post(API_ENDPOINT+"/api/auth/signup", {
            username: username,
            password: password,
            nickname: nickname
        });
    }

    logout() {
        return axios.post(API_ENDPOINT+"/logout");
    }

    profile() {
        return axios.get(API_ENDPOINT+"/profile");
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new LoginService()