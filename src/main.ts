import { createApp } from "vue";
import App from "./App.vue";
import router from './router'

import BalmUI from "balm-ui"; // Official Google Material Components
import BalmUIPlus from "balm-ui-plus"; // BalmJS Team Material Components
import "balm-ui-css";

const app = createApp(App);
app.config.unwrapInjectedRef = true;
app.use(router);

const dark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

app.use(BalmUI, {
  $theme: {
    primary: dark ? "#174579" : "#2A6CB8",
    secondary: "#34313C",
    "on-primary": "#eaeaea",
    // surface: "#2360A7",
    surface: dark ? "#174579" : "#2A6CB8",
  },
});
app.use(BalmUIPlus);
app.mount("#app");
