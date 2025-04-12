// imports
import "./assets/main.css";
import { createApp, ref } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import ChoosePage from "./components/ChoosePage.vue";
import WelcomePage from "./components/WelcomePage.vue";
import PageLayout from "./components/PageLayout.vue";
import GeneratePage from "./components/GeneratePage.vue";
import OptionsPage from "./components/OptionsPage.vue";

// create routes for the app
const router = createRouter({
  history: createWebHistory(), // use HTML5 history mode
  routes: [
    { path: "/", component: WelcomePage },
    {
      path: "/colour-palette-generator",
      component: PageLayout,
      children: [
        { path: "choose", component: ChoosePage, props: true },
        { path: "generate", component: GeneratePage, props: true },
        { path: "options", component: OptionsPage },
      ],
    },
  ],
});

// create the app and register components
const app = createApp(App);

const data = ref({ model: "default" });
const inputName = ref("Random");

// set router for the app
app.use(router);

// passing data and inputName to all components
app.provide("data", data);
app.provide("inputName", inputName);

// mount the app to the DOM
app.mount("#app");
