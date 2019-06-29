import Vue from 'vue'
import Router from 'vue-router'
import Time from './components/time/DataPicker.vue'
import Job from './components/job/Job.vue'
import Role from './components/role/Role.vue'
import Thing from './components/thing/Things.vue'
import Workmate from './components/workmate/Workmate.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
  {
    path: "/time", component: Time
  },
  {
    path: "/job", component: Job
  },
  {
    path: '/role', component: Role
  },
  {
    path: "/thing", component: Thing
  },
  {
    path: "/workmate", component: Workmate
  }
  ]
})
