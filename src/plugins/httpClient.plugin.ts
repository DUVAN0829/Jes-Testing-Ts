import axios from "axios";

export const httpClientPlugin = {

    get: async (url: string) => {
        const { data } = await axios(url)
        return data
    },

    //Other requests
    post: async (url: string, body: any) => {
        throw new Error('Not implemented')
    },

    put: async (url: string, body: any) => {
        throw new Error('Not implemented')
    },

    delete: async (url: string, body: any) => {
        throw new Error('Not implemented')
    }

}