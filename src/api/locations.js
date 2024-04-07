import axios from "axios";

const url = 'http://94.228.118.16:8000/api/v1'
const entity = 'locations'
    export const getLocations = () =>{
        return axios.get(`${url}/${entity}`)
    } 
    
    export const postLocation = (payload) =>{
        return axios.post(`${url}/${entity}`, payload)
    } 
    
    export const deleteLocation = (id) =>{
        return axios.delete(`${url}/${entity}/${id}`)
    } 