import { MockMethod } from 'vite-plugin-mock'
export default [
    {
        url: '/api/test',
        method: 'get',
        response: ({}) => {
            return {
                code: 0,
                data: {
                    name: 'leo'
                }
            }
        }
    },
    {
        url: '/api/table',
        method: 'get',
        response: ({}) => {
            return {
                code: 0,
                data: [
                    { name: 'vue3' },
                    { name: 'vite' },
                    { name: 'vue-router4' },
                    { name: 'pinia' },
                    { name: 'vite-mock' }
                ]
            }
        }
    }
] as MockMethod[]
