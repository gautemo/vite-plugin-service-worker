import { value } from './module'

declare let self: ServiceWorkerGlobalScope

self.addEventListener('install', () => {
  console.log('-Service worker installed')
  self.skipWaiting()
})
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim())
  console.log('-Service worker activated')
})

console.log(value, '4556')
