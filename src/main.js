import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import router from './router'
import axios from './app/common/helpers/axios/axios.js'
import VueAxios from 'vue-axios'
import * as Vue from 'vue'
import store from './store'
import './index.css'
import Spinner from './assets/icons/Spinner.vue'

const app = createApp(App);

app.use(VueAxios, axios)
app.use(router);
app.use(store);

app.component('Spinner', Spinner);


app.mount('#app');
