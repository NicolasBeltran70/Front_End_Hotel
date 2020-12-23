import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/inicio'
import CReserva from './components/Reserva'
import CCalendario from './components/Calendario'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/consulta/reserva',
      name: 'CReserva',
      component: CReserva
    },
    {
      path: '/consulta/calendario',
      name: 'CCalendario',
      component: CCalendario
    }
  ]
})
