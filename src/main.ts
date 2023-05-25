import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createPinia } from "pinia";
const pinia = createPinia();

import BoilerplatePlugin from "./plugins/BoilerplatePlugin";


createApp(App).use(pinia).use(BoilerplatePlugin).mount('#app')
