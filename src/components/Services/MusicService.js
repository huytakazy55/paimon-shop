import axios from "axios";

const API_ENDPOINT = "https://localhost:7039";
axios.defaults.withCredentials = true;

class MusicService {
    ListSong() {
        return axios.get(API_ENDPOINT+"/api/musicplayer/ListSong");
    }
    DeleteSong() {
        return axios.post(API_ENDPOINT+"/api/musicplayer/DeleteSong");
    }
    GetAllMusic() {
        return axios.get(API_ENDPOINT+"/api/musicplayer/GetAllMusic");
    }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new MusicService()