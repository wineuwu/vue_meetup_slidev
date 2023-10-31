import { defineConfig } from 'vite';



export default ({ mode }) => {

  return defineConfig({
    base: mode === 'production' ? '/slides/1025-vue-tw-slidev/' : '/',
  })
}
