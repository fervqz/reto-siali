import axios, { Axios, AxiosResponse } from "axios";
import { mockSamples } from "../mock/samples.mock"

export default {

    getSamples: async (): Promise<AxiosResponse> => (
        new Promise<AxiosResponse>((resolve) => setTimeout(
            () => resolve(mockSamples),
            (Math.random() * (2000 - 300) + 300)
        ))
    ),

    uploadSamples: async (payload: any): Promise<AxiosResponse> => (
        axios.post('https://httpbin.org/post', payload, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
    ),

}