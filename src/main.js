import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons';
import PrimeVue from 'primevue/config';
import Menubar from 'primevue/menubar';
import 'primevue/resources/themes/lara-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import { vfmPlugin } from 'vue-final-modal'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

axios.defaults.baseURL = 'https://www.ryanai.ir/api/v1/'

library.add(fas, far)

createApp(App).component('file-upload', require('../public/file-upload').default).use(VueSweetalert2).use(vfmPlugin({ key: '$vfm', componentName: 'VueFinalModal', dynamicContainerName: 'ModalsContainer' })).use(store).use(PrimeVue).component("font-awesome-icon", FontAwesomeIcon).component('Menubar', Menubar).use(router).mount('#app')