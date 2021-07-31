module.exports = {
  title: '叫我文doi就好',
  base:'/blog/',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '前端笔记', link: '/fornt-end/' },
      { text: '后端笔记', link: '/back-end/' },
      { text: 'Nginx', link: '/nginx/' },
    ],
    sidebar: {
      '/fornt-end/': [
        {
          title: 'Vue',
          collapsable: false,
          path: '/fornt-end/',
          children: [

          ]
        }
      ],
      '/back-end/': [
        {
          title: 'ThinkPHP',
          collapsable: false,
          path: '/back-end/ThinkPHP/',
          children: [
            { title: '关于服务Service', path:'/back-end/ThinkPHP/service/'},
            { title: '关于门面Facade', path:'/back-end/ThinkPHP/facade/'},
            { title: '关于中间件Middleware', path:'/back-end/ThinkPHP/middleware/'},
            { title: '关于事件Event', path:'/back-end/ThinkPHP/event/'},
            { title: '路由', path:'/back-end/ThinkPHP/route/'},
          ]
        }
      ],
      '/nginx/': [
        ''
      ],
      '/': [
        '',
      ]
    }
  }
}