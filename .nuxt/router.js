import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _41eee815 = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _317f4b61 = () => interopDefault(import('..\\pages\\dashboard\\managingusers.vue' /* webpackChunkName: "pages/dashboard/managingusers" */))
const _bf84f1b0 = () => interopDefault(import('..\\pages\\dashboard\\modal.vue' /* webpackChunkName: "pages/dashboard/modal" */))
const _9a3ffdc8 = () => interopDefault(import('..\\pages\\dashboard\\modal\\category\\index.vue' /* webpackChunkName: "pages/dashboard/modal/category/index" */))
const _f20bc02e = () => interopDefault(import('..\\pages\\dashboard\\modal\\detail\\index.vue' /* webpackChunkName: "pages/dashboard/modal/detail/index" */))
const _0445fb64 = () => interopDefault(import('..\\pages\\dashboard\\modal\\category\\_name\\index.vue' /* webpackChunkName: "pages/dashboard/modal/category/_name/index" */))
const _69d3da3e = () => interopDefault(import('..\\pages\\dashboard\\modal\\detail\\_name\\index.vue' /* webpackChunkName: "pages/dashboard/modal/detail/_name/index" */))
const _4579151c = () => interopDefault(import('..\\pages\\dashboard\\modal\\category\\_name\\new.vue' /* webpackChunkName: "pages/dashboard/modal/category/_name/new" */))
const _fe59a322 = () => interopDefault(import('..\\pages\\dashboard\\modal\\detail\\_name\\new.vue' /* webpackChunkName: "pages/dashboard/modal/detail/_name/new" */))
const _49d49e1c = () => interopDefault(import('..\\pages\\dashboard\\systeminfo.vue' /* webpackChunkName: "pages/dashboard/systeminfo" */))
const _77530f50 = () => interopDefault(import('..\\pages\\dashboard\\systeminfo\\index.vue' /* webpackChunkName: "pages/dashboard/systeminfo/index" */))
const _08bade5a = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _28131fff = () => interopDefault(import('..\\pages\\user\\login.vue' /* webpackChunkName: "pages/user/login" */))
const _47e9847d = () => interopDefault(import('..\\pages\\user\\register.vue' /* webpackChunkName: "pages/user/register" */))
const _663a985a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/dashboard",
    component: _41eee815,
    name: "dashboard",
    children: [{
      path: "managingusers",
      component: _317f4b61,
      name: "dashboard-managingusers"
    }, {
      path: "modal",
      component: _bf84f1b0,
      name: "dashboard-modal",
      children: [{
        path: "category",
        component: _9a3ffdc8,
        name: "dashboard-modal-category"
      }, {
        path: "detail",
        component: _f20bc02e,
        name: "dashboard-modal-detail"
      }, {
        path: "category/:name",
        component: _0445fb64,
        name: "dashboard-modal-category-name"
      }, {
        path: "detail/:name",
        component: _69d3da3e,
        name: "dashboard-modal-detail-name"
      }, {
        path: "category/:name/new",
        component: _4579151c,
        name: "dashboard-modal-category-name-new"
      }, {
        path: "detail/:name/new",
        component: _fe59a322,
        name: "dashboard-modal-detail-name-new"
      }]
    }, {
      path: "systeminfo",
      component: _49d49e1c,
      children: [{
        path: "",
        component: _77530f50,
        name: "dashboard-systeminfo"
      }]
    }]
  }, {
    path: "/user",
    component: _08bade5a,
    name: "user",
    children: [{
      path: "login",
      component: _28131fff,
      name: "user-login"
    }, {
      path: "register",
      component: _47e9847d,
      name: "user-register"
    }]
  }, {
    path: "/",
    component: _663a985a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
