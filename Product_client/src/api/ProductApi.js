import axios from "axios";
import config from "../config/config";

const list = async () => {
    try {
        const result = await axios.get(`${config.domain}/viewProduct`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

const filtering = async () => {
    try {
        const result = await axios.get(`${config.domain}viewProduct`)
        return result.data
    } catch (error) {
        return await error.message
    }
}


export default { 
    list,
    filtering
 }