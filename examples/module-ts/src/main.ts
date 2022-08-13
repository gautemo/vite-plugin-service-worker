import './style.css'
import { serviceWorkerFile } from 'virtual:vite-plugin-service-worker'

try {
  navigator.serviceWorker.register(serviceWorkerFile, {
    type: 'module',
  })
} catch (error) {
  console.error('Registration failed', error)
}
