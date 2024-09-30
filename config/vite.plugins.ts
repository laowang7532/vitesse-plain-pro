import type { ConfigEnv } from 'vite'
import { autoImports } from './plugins/auto-imports'
import { components } from './plugins/components'
import { elementPlus } from './plugins/element-plus'
import { routeNameAsComponentName } from './plugins/routeName-as-cptName'
import { svgLoader } from './plugins/svg-loader'
import { unocss } from './plugins/unocss'
import { vitePWA } from './plugins/vite-pwa'
import { vue } from './plugins/vue'
import { vueDevTools } from './plugins/vue-devtools'
import { vueI18n } from './plugins/vue-i18n'
import { layouts } from './plugins/vue-layouts'
import { vueRouter } from './plugins/vue-router'

function pluginsConfig(command: ConfigEnv['command']) {
  return [
    vueRouter(),
    vue(),
    routeNameAsComponentName(),
    vueI18n(),
    autoImports(),
    components(command),
    elementPlus(command),
    layouts(),
    svgLoader(),
    unocss(),
    vueDevTools(),
    vitePWA(),
  ]
}

export default pluginsConfig
