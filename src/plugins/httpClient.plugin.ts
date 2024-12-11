import axios from "axios";

export const httpClientPlugin = {

    get: async (url: string) => {
        const { data } = await axios(url)
        return data
    }

    //Other requests

}