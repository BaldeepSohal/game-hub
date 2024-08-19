import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd36fb25b761241b1b209a2009de483ac'
    }
});
