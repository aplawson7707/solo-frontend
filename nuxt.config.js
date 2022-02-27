export default {
    components: true,

    modules: [
      '@nuxtjs/axios',
      'bootstrap-vue/nuxt',
    ],
  
    axios: {
      proxy: true
    },
    
    bootstrapVue: {
      icons: true,
      // bootstrapCSS: false, // Or `css: false`
      // bootstrapVueCSS: false // Or `bvCSS: false`
      // componentPlugins: [
      //     'LayoutPlugin',
      //     'FormPlugin',
      //     'FormCheckboxPlugin',
      //     'FormInputPlugin',
      //     'FormRadioPlugin',
      //     'ToastPlugin',
      //     'ModalPlugin',
      // ],
      // directivePlugins: [
      //     'VBPopoverPlugin',
      //     'VBTooltipPlugin',
      //     'VBScrollspyPlugin'
      // ],
    },
  }