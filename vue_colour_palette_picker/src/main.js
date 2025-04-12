import './assets/main.css'
import { createApp, provide } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import ChoosePage from "./components/ChoosePage.vue"
import WelcomePage from "./components/WelcomePage.vue"
import PageLayout from './components/PageLayout.vue'
import ChooseItem from './components/ChooseItem.vue'
import GeneratePage from './components/GeneratePage.vue'
import OptionsPage from './components/OptionsPage.vue'

const router = createRouter({
    history : createWebHistory(),
    routes: [
        { path : "/", component : WelcomePage },
        { 
            path : "/colour-picker",
            component : PageLayout,
            children: [
                { path : "choose", component : ChoosePage, props : true },
                { path : "generate", component : GeneratePage, props: true },
                { path : "options", component : OptionsPage }
            ]    
        }
    ]
})

const app = createApp(App)
app.use(router)
app.component('ChooseItem', ChooseItem)
app.provide('data', { model: "default" })
app.mount('#app')
