# vite-plugin-service-worker

Simple way to register service worker in a Vite project

## Install

```sh
npm i @gautemo/vite-plugin-service-worker -D
```

## Usage

<details>
  <summary>JavaScript</summary>

Add `serviceWorkerPlugin` to your `vite.config.js` and specify your service worker filename:

```js
import { defineConfig } from 'vite'
import { serviceWorkerPlugin } from '@gautemo/vite-plugin-service-worker'

export default defineConfig({
  plugins: [
    serviceWorkerPlugin({
      filename: 'sw.js',
    }),
  ],
})
```

Then register your service worker in your src code.

```js
navigator.serviceWorker.register('/sw.js', {
  type: 'module',
})
```

</details>

<details>
  <summary>TypeScript</summary>

Add `serviceWorkerPlugin` to your `vite.config.ts` and specify your service worker filename:

```ts
import { defineConfig } from 'vite'
import { serviceWorkerPlugin } from '@gautemo/vite-plugin-service-worker'

export default defineConfig({
  plugins: [
    serviceWorkerPlugin({
      filename: 'sw.ts',
    }),
  ],
})
```

Then register your service worker in your src code. Import the `serviceWorkerFile` so the plugin can alternate between the .js and .ts extension based on if it's in dev or build.

```ts
import { serviceWorkerFile } from 'virtual:vite-plugin-service-worker'

navigator.serviceWorker.register(serviceWorkerFile, {
  type: 'module',
})
```

Also add the type to your `vite-env.d.ts` file:

```ts
declare module 'virtual:vite-plugin-service-worker' {
  export const serviceWorkerFile: string
}
```

</details>

## Example

Project with TypeScript: [module-ts](./examples/module-ts/)

## npm publish

```sh
pnpm build
```

```sh
npm publish --access=public
```
