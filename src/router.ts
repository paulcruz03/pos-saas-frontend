import {
  createRootRoute,
  createRoute,
  createRouter,
  lazyRouteComponent,
} from '@tanstack/react-router'

const root = createRootRoute()

const main = createRoute({
  getParentRoute: () => root,
  component: lazyRouteComponent(() => import('./layouts/main')),
  path: '/',
})

const indexRoute = createRoute({
  getParentRoute: () => main,
  path: 'home',
  component: lazyRouteComponent(() => import('./pages/index')),
})

const orderRoute = createRoute({
  getParentRoute: () => main,
  path: 'transactions/orders',
  component: lazyRouteComponent(() => import('./pages/order/list')),
})

const refundRoute = createRoute({
  getParentRoute: () => main,
  path: 'transactions/refunds',
  component: lazyRouteComponent(() => import('./pages/order/refunds')),
})

const productsRoute = createRoute({
  getParentRoute: () => main,
  path: 'products',
  component: lazyRouteComponent(() => import('./pages/product/list')),
})

const productDetailRoute = createRoute({
  getParentRoute: () => main,
  path: 'product-detail/$productId',
  component: lazyRouteComponent(() => import('./pages/product/detail')),
})

const customersRoute = createRoute({
  getParentRoute: () => main,
  path: 'customers',
  component: lazyRouteComponent(() => import('./pages/customers')),
})

const manageDevicesRoute = createRoute({
  getParentRoute: () => main,
  path: 'settings/devices',
  component: lazyRouteComponent(() => import('./pages/settings/devices')),
})

const manageUserRoute = createRoute({
  getParentRoute: () => main,
  path: 'settings/users',
  component: lazyRouteComponent(() => import('./pages/settings/users')),
})

const configRoute = createRoute({
  getParentRoute: () => main,
  path: 'settings/config',
  component: lazyRouteComponent(() => import('./pages/settings/config')),
})

const loginRoute = createRoute({
  getParentRoute: () => root,
  component: lazyRouteComponent(() => import('./pages/login')),
  path: 'login',
})

const routeTree = root.addChildren([
  main.addChildren([
    indexRoute,
    orderRoute,
    refundRoute,
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