export default {
  components: true,

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/toast',
    'bootstrap-vue/nuxt',
  ],

  axios: {
    baseURL: 'http://localhost:8000'
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/token/',
            method: 'post',
            propertyName: 'access',
            altProperty: 'refresh'
          },
          logout: {},
          user: false
        }
      }
    },
    redirect: {
      login: '/login',
    },
  },
  
  router: {
      middleware: ['auth']
  },

  toast: {
    position: 'top-center',
    iconPack: 'fontawesome',
    duration: 3000,
    register: [
      {
        name: 'defaultSuccess',
        message: (payload) =>
          !payload.msg ? 'Operation Successful' : payload.msg,
        options: {
          type: 'success',
          icon: 'check'
        }
      },
      {
        name: 'defaultError',
        message: (payload) =>
          !payload.msg ? 'Oops.. Unexpected Error' : payload.msg,
        options: {
          type: 'error',
          icon: 'times'
        }
      }
    ]
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