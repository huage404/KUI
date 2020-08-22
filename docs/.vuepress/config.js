module.exports = {
    title: 'KUI',
    description: '一个基于 Vue 的 UI 组件库',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '文档', link: '/install/'},
        ],
        sidebar: [
            {
                title: 'install',
                path: '/install/'
            },
            {
                title: '快速上手',
                path: '/get-started/'
            },
            {
                title: '组件',
                path: '/kui-components/',
                children: [
                    '/kui-components/button/'
                ]
            }
        ]
    }
}
