import { createApp } from 'vue'

import { router } from './router'
import { pinia } from './stores'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

createApp(App).use(pinia).use(router).use(ElementPlus, { locale: zhCn }).mount('#app')
