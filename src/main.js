import { createApp } from 'vue'
import mitt from 'mitt'
import { VueMasonryPlugin } from 'vue-masonry'
import App from './App.vue'

const emitter = mitt()
let app = createApp(App)
app.config.globalProperties.emitter = emitter
app.use(VueMasonryPlugin)
app.mount('#app')




