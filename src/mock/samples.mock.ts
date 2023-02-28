import { AxiosRequestHeaders, AxiosResponse } from "axios";

export const mockSamples: AxiosResponse = {
    status: 200,
    data: {
        meta: {
            length: 8,
        },
        records: [
            {
                "name": "Angular",
                "date": "Fri, 01 Jan 2010 00:00:00 GMT",
                "img_stack": [
                    "https://cdn.iconscout.com/icon/free/png-512/angular-3-226070.png",
                    "https://cdn.iconscout.com/icon/free/png-512/angular-3-226070.png",
                    "https://cdn.iconscout.com/icon/free/png-512/angular-3-226070.png"
                ]
            },
            {
                "name": "Ember.js",
                "date": "Sat, 01 Jan 2011 00:00:00 GMT",
                "img_stack": [
                    "https://cdn.iconscout.com/icon/free/png-512/ember-3-1175049.png",
                    "https://cdn.iconscout.com/icon/free/png-512/ember-3-1175049.png",
                    "https://cdn.iconscout.com/icon/free/png-512/ember-3-1175049.png"
                ]
            },
            {
                "name": "React",
                "date": "Tue, 01 Jan 2013 00:00:00 GMT",
                "img_stack": [
                    "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
                    "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
                    "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png"
                ]
            },
            {
                "name": "Vue.js",
                "date": "Thu, 01 Feb 2014 00:00:00 GMT",
                "img_stack": [
                    "https://cdn.iconscout.com/icon/free/png-512/vue-282497.png",
                    "https://cdn.iconscout.com/icon/free/png-512/vue-282497.png",
                    "https://cdn.iconscout.com/icon/free/png-512/vue-282497.png"
                ]
            },
        ]
    },
    statusText: "",
    headers: {},
    config: {
        transitional: {
            silentJSONParsing: true,
            forcedJSONParsing: true,
            clarifyTimeoutError: false
        },
        adapter: [
            "xhr",
            "http"
        ],
        transformRequest: [],
        transformResponse: [],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {},
        headers: {} as AxiosRequestHeaders,
        method: "post",
        url: "https://httpbin.org/post",
        data: {}
    }
}