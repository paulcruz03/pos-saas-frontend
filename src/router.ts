import {
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router'

const rootRoute = createRootRoute({
  component: await import('./layouts/main').then(mod => mod.default),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: await import('./pages/index').then(mod => mod.default),
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: await import('./pages/about').then(mod => mod.default),
})

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute])

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
})