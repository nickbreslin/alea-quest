import { createApp } from 'vue'
import App from './App.vue'

import router from "./router";

import { createPinia } from "pinia";
const pinia = createPinia();

import BoilerplatePlugin from "./plugins/BoilerplatePlugin";

import './style.css'
import "bootstrap/dist/css/bootstrap.css";


createApp(App).use(pinia).use(BoilerplatePlugin).use(router).mount('#app')
