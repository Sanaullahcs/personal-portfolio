import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import mitt from 'mitt'
const emitter = mitt()

const app = createApp(App)
  .use(router)
  .use(vuetify)
  // .mount('#app')
  app.config.globalProperties.emitter = emitter
  app.mount('#app')