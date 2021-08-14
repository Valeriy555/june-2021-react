import axios from 'axios';


let confing = {
    baseURL: 'https://jsonplaceholder.typicode.com/users',

};

let axiosInstance = axios.create(confing);

const getAxiosUsers = () => { return axiosInstance.get('');};


const getPostsOfUser = (id)=>{
    return axiosInstance('/'+id +'/posts');

}


export {getAxiosUsers, getPostsOfUser};