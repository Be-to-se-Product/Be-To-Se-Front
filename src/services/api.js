import axios from "axios";


const ips={
    cesar:'10.18.6.54',
    local:'localhost'
}

const api = axios.create({
    baseURL: `http://${ips.local}:8080`,
    timeout: 5000,
});


api.interceptors.request.use(
    
     config => {
        const token = sessionStorage.getItem('TOKEN');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        
        return config;
    }
);



export default api;

