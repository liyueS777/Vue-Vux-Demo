

export default [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path: '/login',
    name: 'login',
    component: function (resolve) {
      require(['../components/login/login.vue'], resolve)
    }
  },
    {
      path: '/home',
      name: 'home',
      component: function (resolve) {
        require(['../components/common/home.vue'], resolve)
      },
      children:[
        {
          path: '/u',
          name: 'u',
          component: function (resolve) {
            require(['../components/common/u.vue'], resolve)
          }
        },
        {
          path: '/swiper',
          name: 'swiper',
          component: function (resolve) {
            require(['../components/swiper/swiper.vue'], resolve)
          }
        },
        {
          path: '/previewer',
          name: 'previewer',
          component: function (resolve) {
            require(['../components/previewer/previewer.vue'], resolve)
          }
        },
        {
          path: '/aboutMe',
          name: 'aboutMe',
          component: function (resolve) {
            require(['../components/aboutMe/aboutMe.vue'], resolve)
          }
        },
        {
          path: '/confirm',
          name: 'confirm',
          component: function (resolve) {
            require(['../components/confirm/confirm.vue'], resolve)
          }
        },
        {
          path: '/group',
          name: 'group',
          component: function (resolve) {
            require(['../components/groupSelectInput/groupSelectInput.vue'], resolve)
          }
        },
        {
          path: '/swiperLoad',
          name: 'swiperLoad',
          component: function (resolve) {
            require(['../components/swiperLoad/swiperLoad.vue'], resolve)
          }
        },
        {
          path: '/map',
          name: 'map',
          component: function (resolve) {
            require(['../components/map/map.vue'], resolve)
          }
        },
        {
          path: '/pulldown',
          name: 'pulldown',
          component: function (resolve) {
            require(['../components/swiperLoad/pulldown.vue'], resolve)
          }
        },
        {
          path: '/sticky',
          name: 'sticky',
          component: function (resolve) {
            require(['../components/sticky/sticky.vue'], resolve)
          }
        },
        {
          path: '/swipeout',
          name: 'swipeout',
          component: function (resolve) {
            require(['../components/swipeout/swipeout.vue'], resolve)
          }
        },
        {
          path: '/toast',
          name: 'toast',
          component: function (resolve) {
            require(['../components/toast/toast.vue'], resolve)
          }
        },
        {
          path: '/select',
          name: 'select',
          component: function (resolve) {
            require(['../components/groupSelectInput/selecter.vue'], resolve)
          }
        },
      ]
    },

    {
      path: '/404',
      component:function (resolve) {
        require(['../components/common/404.vue'], resolve)
      }
    },
    {
      path: '*',
      redirect:'/404'
    }
  ]

