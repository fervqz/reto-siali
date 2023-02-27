import { ApiResponse } from "../types/Api";

export const mockSamples: ApiResponse = {
    status: 200,
    data: {
        meta: {
            length: 8,
        },
        records:
            [
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
                // { name: 'Muestra unfortunate', date: '2023-01-07' },
                // { name: 'Muestra faint', date: '2023-01-15' },
                // { name: 'Muestra roof', date: '2023-01-18' },
                // { name: 'Muestra champion', date: '2023-01-22' },
                // { name: 'Muestra film', date: '2023-02-27' },
                // { name: 'Muestra transport', date: '2023-02-20' },
                // { name: 'Muestra average', date: '2023-02-05' },
                // { name: 'Muestra disaster', date: '2023-01-01' },
            ]
    },
}