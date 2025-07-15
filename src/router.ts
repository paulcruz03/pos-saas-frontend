import {
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router'

const root = createRootRoute()

const main = createRoute({
  getParentRoute: () => root,
  component: await import('./layouts/main').then(mod => mod.default),
  path: '/',
})

const indexRoute = createRoute({
  getParentRoute: () => main,
  path: 'home',
  component: await import('./pages/index').then(mod => mod.default),
  
})

const aboutRoute = createRoute({
  getParentRoute: () => main,
  path: 'about',
  component: await import('./pages/about').then(mod => mod.default),
})

const orderRoute = createRoute({
  getParentRoute: () => main,
  path: 'orders',
  component: await import('./pages/orders').then(mod => mod.default),
})

const productsRoute = createRoute({
  getParentRoute: () => main,
  path: 'products',
  component: await import('./pages/products').then(mod => mod.default),
})

const loginRoute = createRoute({
  getParentRoute: () => root,
  component: await import('./pages/login').then(mod => mod.default),
  path: 'login',
})

const routeTree = root.addChildren([
  main.addChildren([
    indexRoute,
    aboutRoute,
    orderRoute,
    productsRoute
  ]),
  loginRoute
])

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
})