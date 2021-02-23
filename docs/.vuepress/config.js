module.exports = {
    title: 'feelone blog',
    description: 'feelonewong',
    head: [
        ['link', { rel: 'icon', href: 'https://www.baidu.com/img/dong_8f1d47bcb77d74a1e029d8cbb3b33854.gif' }]
    ],
    themeConfig: {
        displayAllHeaders: true,
        nav: [
          { text: '首页', link: '/' },
          { text: 'CSS', link: '/css/' },
          { text: 'JavaScript', link: '/javascript/' },
          { text: 'Vue', link: '/vue/' },
          { text: 'React', link: '/react/' },
          { text: 'MySQL', link: '/mysql/' },
          {
            text: 'Node',
            ariaLabel: 'Language Menu',
            items: [
              { text: 'Node构建博客', link: '/node/nodeBlog/' },
            ]
          },  
          { text: '面试集锦', link: '/interview/' },                   
          { text: '鸡零狗碎', link: '/other/' },       
                    
        ],
        sidebar: "auto"
      }
  }