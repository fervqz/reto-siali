import axios, { Axios, AxiosResponse } from "axios";
import { mockSamples } from "../mock/samples.mock"
import { ApiResponse } from "../types/Api"

export default {

    getSamples: async (): Promise<ApiResponse> => (
        new Promise<ApiResponse>((resolve) => setTimeout(
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