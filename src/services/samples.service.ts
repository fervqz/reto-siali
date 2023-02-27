import { mockSamples } from "../mock/samples.mock"
import { ApiResponse } from "../types/Api"

export default {

    getSamples: async (): Promise<ApiResponse> => (
        new Promise<ApiResponse>((resolve) => setTimeout(
            () => resolve(mockSamples),
            (Math.random() * (2000 - 300) + 300)
        ))
    ),

}