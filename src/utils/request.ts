import axios, { AxiosResponse } from 'axios'

// 创建 axios 实例
const service = axios.create({
    //   baseURL: "/api",
    timeout: 50000,
    headers: { 'Content-Type': 'application/json;charset=utf-8' }
})

// 响应拦截器
service.interceptors.response.use(
    (response: AxiosResponse) => {
        const { code, msg } = response.data
        if (code === 0) {
            return response.data
        }
        alert(msg || '系统出错')
        if (code === 401) {
            window.location.href = '/'
        }
        return Promise.reject(new Error(msg || 'Error'))
    },
    (error: any) => {
        alert(error.message || '系统出错')
        return Promise.reject(error.message)
    }
)

// 导出 axios 实例
export default service
