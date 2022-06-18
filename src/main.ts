import { createApp } from 'vue';
import App from './App.vue';
// import router from './router'


import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui-plus'; // BalmJS Team Material Components
import 'balm-ui-css';

const app = createApp(App);
// app.use(router);

app.config.unwrapInjectedRef = true
app.use(BalmUI, {
    $theme: {
        primary: '#23202A',
        secondary: '#34313C',
        'on-primary': '#eaeaea',
        surface: '#373840',
    }
});
app.use(BalmUIPlus);
app.mount('#app');