import { value } from './src/module'

declare let self: ServiceWorkerGlobalScope

self.addEventListener('install', () => {
  self.skipWaiting()
  console.log('Service worker installed')
})
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim())
  console.log('Service worker activated')
})

console.log(value)
