import './assets/main.css'
import'../node_modules/bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
// 產生APP vue

app.use(createPinia())
app.use(router)

app.mount('#app')
