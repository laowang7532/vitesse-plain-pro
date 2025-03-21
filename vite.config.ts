import path from 'node:path'
import process from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import buildConfig from './config/vite.build'
import pluginsConfig from './config/vite.plugins'
import serverConfig from './config/vite.server'

// https://cn.vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd()) as ImportMetaEnv

  return {
    base: env.VITE_BASE_URL,

    build: buildConfig(mode),
    server: serverConfig(mode),
    plugins: pluginsConfig(command),

    resolve: {
      alias: {
        '@': `${path.resolve(__dirname, 'src')}`,
      },
    },

    css: {
      // 预加载全局样式
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/styles/element/index.scss" as *;',
        },
      },
    },

    optimizeDeps: {
      include: [
        '@element-plus/icons-vue',
        '@vueuse/core',
        'axios',
        'element-plus/es',
        'element-plus/es/components/base/style/index',
        'element-plus/es/components/message/style/index',
        'element-plus/es/components/message-box/style/index',
        'element-plus/es/components/notification/style/index',
        'unplugin-vue-router/runtime',
        'unplugin-vue-router/data-loaders/basic',
      ],
    },
  }
})
