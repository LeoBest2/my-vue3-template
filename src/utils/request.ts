import axios, { AxiosResponse } from 'axios'
import ElMessage from 'element-plus/lib/components/message/index.js'

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
        ElMessage(msg || '系统出错')
        if (code === 401) {
            ElMessage.warning('会话过期,请重新登陆!')
            window.location.href = '/'
        }
        ElMessage.error(msg || 'Error')
        return Promise.reject(new Error(msg || 'Error'))
    },
    (error: any) => {
        ElMessage.error(error.message || '系统出错')
        return Promise.reject(error.message)
    }
)

// 导出 axios 实例
export const request = service
