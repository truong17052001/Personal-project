import axios from "axios";

const url= "http://127.0.0.1:8000/api"
export const getProduct = async ()=> {
    const res= await axios.get(`${url}/products`);
    return res.data;
}