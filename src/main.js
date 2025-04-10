window.process = {
  env: {
    NODE_ENV: 'development'
  }
}


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')  // <<< NÃO cria app de novo, usa o que você já criou
