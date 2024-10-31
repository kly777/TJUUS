import { createApp } from 'vue'
import './style.css'
import router from "./router";
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import 'virtual:uno.css'
import { createPinia } from 'pinia'
import App from './App.vue'



const vuetify = createVuetify({
  components,
  directives,
})

const pinia = createPinia()



const app = createApp(App)
app.use(pinia)
app.use(vuetify)
app.use(router)
app.mount('#app')
