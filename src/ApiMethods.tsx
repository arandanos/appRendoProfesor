import axios from 'axios'

const API_URL = ("http://localhost:8000/api/");

export const sendGetAllRequest = ( url : string) => {
    return axios({
        url: API_URL + url,
        method: 'get'
    }).then(response => {       
        console.log(response.data)
        return response.data;
    })
};

export const sendGetByIDRequest = ( url : string, id : string) => {
    return axios({
        url: API_URL + url + "/" + id,
        method: 'get'
    }).then(response => {       
        console.log(response.data)
        return response.data;
    })
};

export const sendPostRequest = ( url : string, data : any) => {
    return axios({
        url: API_URL + url,
        method: 'post',
        data: data
    }).then(response => {       
        console.log(response.data)
        return response.data;
    })
};

export const sendDeleteIDRequest = (url: string, id: string) => {
    return axios({
        url: API_URL+url+"/"+id,
        method: "delete",
      }).then(response => {
        console.log(response.data);
        return(response.data);
      })
};

/*
No sé si está bien
export const sendPutRequest = ( url : string, data : any) => {
    return axios({
        url: API_URL + url,
        method: 'put',
        data: data
    }).then(response => {       
        console.log(response.data)
        return response.data;
    })
};

*/