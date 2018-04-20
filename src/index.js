import VueMalou from './VueMalou.jsx'

function plugin (Vue) {
  Vue.component('vue-malou', VueMalou)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'
// Export all components too
export {
  VueMalou,
  version
}
