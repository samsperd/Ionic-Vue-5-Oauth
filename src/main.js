import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';
import axios from 'axios'
import * as IonComponents from '@ionic/vue';
import localforage  from 'localforage'

// Above the createApp() line
import { defineCustomElements } from '@ionic/pwa-elements/loader';

import { store } from './store';
/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
require('./store/modules/subscriber');
const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store);

Object.keys(IonComponents).forEach(key => {
  if (/^Ion[A-Z]\w+$/.test(key)) {
    app.component(key, IonComponents[key]);
  }
});
store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
  router.isReady().then(() => {
    app.mount('#app');
  });  
});

// router.isReady().then(() => {
//   app.mount('#app');
// });