import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'

console.log(library)
library.add(fas)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)


app.use(createPinia()).use(router).mount('#app')

