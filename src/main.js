//import './assets/main.css'
//AQUI ES DONDE SE HABILITAN TODOS LOS PAQUETES Y MODULOS QUE TIENE EL PROYECTO
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { abilitiesPlugin } from '@casl/vue';
//import ability from './services/ability';//viene de la pagina de casl original pero nos desordenara
//import ability from './casl/ability';//mejor se aplica esta variante
import ability from './casl/ability';
import App from './App.vue'
import router from './router'


const app = createApp(App) //aqui instancia la aplicación de Vue
//CASL.js
app.use(abilitiesPlugin, ability, { //ability se envia como unmiddleware para habilitar castl
    useGlobalProperties: true //se usa las propiedades de manera global
  })


app.use(createPinia())
app.use(router)

app.mount('#app')
