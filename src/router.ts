import {
  createMemoryHistory,
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

const orderRoute = createRoute({
  getParentRoute: () => main,
  path: 'orders',
  component: await import('./pages/orders').then(mod => mod.default),
})

const productsRoute = createRoute({
  getParentRoute: () => main,
  path: 'products',
  component: await import('./pages/product/list').then(mod => mod.default),
})

const productDetailRoute = createRoute({
  getParentRoute: () => main,
  path: 'product-detail/$productId',
  component: await import('./pages/product/detail').then(mod => mod.default),
})

const customersRoute = createRoute({
  getParentRoute: () => main,
  path: 'customers',
  component: await import('./pages/customers').then(mod => mod.default),
})

const manageDevicesRoute = createRoute({
  getParentRoute: () => main,
  path: 'settings/devices',
  component: await import('./pages/settings/devices').then(mod => mod.default),
})

const manageUserRoute = createRoute({
  getParentRoute: () => main,
  path: 'settings/users',
  component: await import('./pages/settings/users').then(mod => mod.default),
})

const configRoute = createRoute({
  getParentRoute: () => main,
  path: 'settings/config',
  component: await import('./pages/settings/config').then(mod => mod.default),
})

const loginRoute = createRoute({
  getParentRoute: () => root,
  component: await import('./pages/login').then(mod => mod.default),
  path: 'login',
})

const routeTree = root.addChildren([
  main.addChildren([
    indexRoute,
    orderRoute,
    productsRoute,
    customersRoute,
    productDetailRoute,
    manageDevicesRoute,
    manageUserRoute,
    configRoute
  ]),
  loginRoute
])

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
})