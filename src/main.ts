import { createApp } from 'vue'
import './style.css'
import router from "./router";
import { createPinia } from 'pinia'
import App from './App.vue'
import { createDiscreteApi } from 'naive-ui'


createDiscreteApi(['message', 'dialog', 'notification', 'loadingBar'])

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
