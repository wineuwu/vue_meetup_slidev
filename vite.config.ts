import { defineConfig } from 'vite';

// export default defineConfig({
//   base: process.env.NODE_ENV === 'production' ? '/slides/1025-vue-tw-slidev/' : '/',
// })



export default ({ mode }) => {

  return defineConfig({
    base: mode === 'production' ? '/slides/1025-vue-tw-slidev/' : '/',
  })
}
