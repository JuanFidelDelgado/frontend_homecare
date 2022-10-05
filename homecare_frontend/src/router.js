import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import Home from './components/Home.vue'
import RequestUsuario from './components/RequestUsuario.vue'
import DeleteUsuario from './components/DeleteUsuario.vue'
import PutUsuario from './components/PutUsuario.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: App
  },  
  {
    path: '/usuario/logIn',
    name: 'logIn',
    component: LogIn
  },
  {
    path: '/usuario/signUp',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/usuario/Home',
    name: 'Home',
    component: Home
  },    
  {
    path: '/usuario/RequestUsuario',
    name: 'RequestUsuario',
    component: RequestUsuario
  },
  {
    path: '/usuario/DeleteUsuario',
    name: 'DeleteUsuario',
    component: DeleteUsuario
  },
  {
    path: '/usuario/PutUsuario',
    name: 'PutUsuario',
    component: PutUsuario
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
