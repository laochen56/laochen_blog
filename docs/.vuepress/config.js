module.exports = {
    title: '老陈笔记',
    description: '记录前端笔记', //seo优化： 以 <meta> 标签渲染到页面html中
    theme: 'vdoing',
    head: [
        ['meta', { name: 'keywords', content: '老陈笔记,前端,前端笔记'}],//seo优化:关键词
        ['link',
            {rel: 'icon', href: '/favicon.ico'}

        ],
        ['script', {src: "/js/pet.js"}],
        ['script', {src: "/js/base.js"}]
    ],
    plugins: [
        [
            '@vuepress-reco/vuepress-plugin-bgm-player',{
            audios: [
                {
                    name: '花海',
                    artist: '周杰伦',
                    url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-77a386c7-85ab-48f7-a40b-25c397281820/44d885a5-fe57-4962-8021-65fe40a1b848.MP3',
                    cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
                },
                {
                    name: '夜曲',
                    artist: '周杰伦',
                    url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-77a386c7-85ab-48f7-a40b-25c397281820/18f7ff5f-70a3-4393-9a1d-f272e4f48d7c.MP3',
                    cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
                },
                {
                    name: 'Windy Hill',
                    artist: '羽肿',
                    url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-77a386c7-85ab-48f7-a40b-25c397281820/674ed1e9-97b4-41f1-8260-afbbc9e6d311.mp3',
                    cover: 'https://img1.baidu.com/it/u=3204077419,1234117063&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
                },
                {
                    name: 'Rain after Summer',
                    artist: '羽肿',
                    url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-77a386c7-85ab-48f7-a40b-25c397281820/01e7822c-9e74-4efa-9a41-2c8a98391b29.mp3',
                    cover: 'https://img1.baidu.com/it/u=170020145,233495049&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400'
                },
                {
                    name: 'City',
                    artist: '羽肿',
                    url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-77a386c7-85ab-48f7-a40b-25c397281820/63077678-104e-4114-ace0-a8e64b41a8a2.mp3',
                    cover: 'https://img0.baidu.com/it/u=3843220414,2470473115&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=416'
                },
                {
                    name: '再见—《眷思量》',
                    artist: '默恨天',
                    url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-77a386c7-85ab-48f7-a40b-25c397281820/f0acf200-1efb-41e0-af1a-b9a4a7cd382e.mp3',
                    cover: 'https://img0.baidu.com/it/u=2322283728,1741375128&fm=253&fmt=auto&app=138&f=JPEG?w=504&h=500'
                },
                {
                    name: '孤岛',
                    artist: '赵二',
                    url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-77a386c7-85ab-48f7-a40b-25c397281820/84aab46c-6d69-4317-8ee0-00c7a04e4c26.MP3',
                    cover: 'https://img1.baidu.com/it/u=3125758418,4217217286&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400'
                },
                {
                    name: '换世门生-涅槃',
                    artist: '魏小涵',
                    url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-77a386c7-85ab-48f7-a40b-25c397281820/01e74245-a927-458a-8669-7349f239e00c.MP3',
                    cover: 'https://img0.baidu.com/it/u=2057028619,82301266&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
                },
                {
                    name: '为你铭刻',
                    artist: '元龙主题曲',
                    url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-77a386c7-85ab-48f7-a40b-25c397281820/9da1ac8c-e9dd-4b35-a25f-67b54abc2531.MP3',
                    cover: 'https://img0.baidu.com/it/u=632670148,3496743040&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=535'
                },
                {
                    name: '醉红颜',
                    artist: '刘依朵',
                    url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-77a386c7-85ab-48f7-a40b-25c397281820/ddce3e2d-538f-4a6d-a5f4-e7dee55d0df6.mp3',
                    cover: 'https://img1.baidu.com/it/u=852219260,3622517011&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400'
                },
                {
                    name: '如愿',
                    artist: '王菲',
                    url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-77a386c7-85ab-48f7-a40b-25c397281820/ad475170-16ee-467e-bb60-8957412d3885.MP3',
                    cover: 'https://img0.baidu.com/it/u=1957102053,3335938068&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400'
                },
                {
                    name: '画江湖之不良人',
                    artist: '主题曲',
                    url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-77a386c7-85ab-48f7-a40b-25c397281820/fb7df162-b4a6-4895-9fa1-69a268c950aa.MP3',
                    cover: 'https://img1.baidu.com/it/u=2163917319,3180126110&fm=253&fmt=auto?w=400&h=400'
                },
                {
                    name: '飞花',
                    artist: '邓岳章',
                    url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-77a386c7-85ab-48f7-a40b-25c397281820/072478b5-6730-45e3-8368-ae96680f8638.MP3',
                    cover: 'https://img2.baidu.com/it/u=825754283,3086691340&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=518'
                },
                {
                    name: '这一生关于你的风景',
                    artist: '隔壁老樊',
                    url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-77a386c7-85ab-48f7-a40b-25c397281820/02ecd795-acb2-4485-9dab-a98a4741beda.mp3',
                    cover: 'https://img2.baidu.com/it/u=3418011524,3684901551&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=500'
                },
                {
                    name: '我们还是做朋友吧',
                    artist: '悲情魔音',
                    url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-77a386c7-85ab-48f7-a40b-25c397281820/ca8e7e7e-11c6-4fa9-a2c9-87e4620b9b84.MP3',
                    cover: 'https://img1.baidu.com/it/u=3050931960,2066217517&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
                }
            ]
        }
        ],
            ["ribbon-animation", {
            size: 90,   // 默认数据
            opacity: 0.3,  //  透明度
            zIndex: -1,   //  层级
            opt: {
                // 色带HSL饱和度
                colorSaturation: "80%",
                // 色带HSL亮度量
                colorBrightness: "30%",
                // 带状颜色不透明度
                colorAlpha: 0.35,
                // 在HSL颜色空间中循环显示颜色的速度有多快
                colorCycleSpeed: 6,
                // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
                verticalPosition: "center",
                // 到达屏幕另一侧的速度有多快
                horizontalSpeed: 200,
                // 在任何给定时间，屏幕上会保留多少条带
                ribbonCount: 8,
                // 添加笔划以及色带填充颜色
                strokeSize: 0,
                // 通过页面滚动上的因子垂直移动色带
                parallaxAmount: -0.5,
                // 随着时间的推移，为每个功能区添加动画效果
                animateSections: true
            },
            ribbonShow: true, //  点击彩带  true显示  false为不显示
            ribbonAnimationShow: true  // 滑动彩带
        }]
    ],
    themeConfig: {
        logo: '/favicon.ico',  //网页顶端导航栏左上角的图标

        //顶部导航栏
        nav: [
            //格式一：直接跳转，'/'为不添加路由，跳转至首页
            {text: '首页', link: '/'},
            //格式二：添加下拉菜单，link指向的文件路径
            {
                text: '学习',  //默认显示
                ariaLabel: '学习',   //用于识别的label
                items: [
                    {text: 'HTML', link: '/pages/HTML/html.md'},
                    {text: 'CSS', link: '/pages/CSS/css2.md'},
                    {text: 'JavaScript', link: '/pages/JavaScript/js.md'},
                    {text: 'ES6', link: '/pages/JavaScript/es6.md'},
                    {text: 'Vue', link: '/pages/Vue/vue2.md'},
                    {text: '前端八股文', link: '/pages/Expand/expand1.md'},
                ]
            },
            {
                text: '资源列表',  //默认显示
                ariaLabel: '资源列表',   //用于识别的label
                items: [
                    {text: 'ES6', link: 'https://wangdoc.com/es6/intro.html'},
                    {text: 'Vue', link: 'https://v2.cn.vuejs.org/v2/guide'},
                    {text: 'React', link: 'https://react.docschina.org/tutorial/tutorial.html'},
                    {text: 'uniapp', link: 'https://uniapp.dcloud.net.cn'},
                    {text: 'ReactNative', link: 'https://www.reactnative.cn/docs/getting-started'},
                    {text: '菜鸟教程', link: 'https://www.runoob.com/'},
                    {text: 'Bootstrap', link: 'https://v3.bootcss.com/getting-started/'},
                    {text: 'Element', link: 'https://element.eleme.io/#/zh-CN/component/installation'},
                    {text: 'Element-plus', link: 'https://element-plus.gitee.io/zh-CN/guide/design.html'},
                    {text: 'uview', link: 'https://www.uviewui.com/components/intro.html'},
                    {text: 'BootCDN', link: 'https://www.bootcdn.cn/'},
                    {text: 'Axios', link: 'https://www.axios-http.cn/docs/example'},
                    {text: 'Node', link: 'http://nodejs.cn/learn'},
                    {text: 'Ant', link: 'https://ant.design/docs/react/introduce-cn'},
                    {text: 'Flutter', link: 'https://flutter.cn/docs/get-started/install'},
                    {text: '阿里图标', link: 'https://www.iconfont.cn/'},
                    {text: '微信小程序', link: 'https://developers.weixin.qq.com/miniprogram/introduction'},
                ]
            },
            {text: '导航网站', link: '/guide.md'},
            {
                text: '人生感悟',  //默认显示
                ariaLabel: '人生感悟',   //用于识别的label
                items: [
                    {text: '活着', link: '/Life/alive.md'},
                    {text: '人生的意义', link: '/Life/meaning_of_life.md'},
                    {text: '人生格言', link: '/Life/lifetime.md'},
                ]
            },
            {
                text: '索引',  //默认显示
                ariaLabel: '索引',   //用于识别的label
                items: [
                            { text: '分类', link: '/categories/' },
                            { text: '标签', link: '/tags/' },
                            { text: '归档', link: '/archives/' },
                            { text: '展示', link: '/show/' },
                ]
            },
		   {text: '留言板', link: 'http://www.weblearn.fit/AAA/message_board'},
            {
                text: '下载',  //默认显示
                ariaLabel: '下载',   //用于识别的label
                items: [
                    {
                        text: 'app安卓精简版',
                        link: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2b5692dd-39ab-498e-b867-9a220d2bb2f2/b79da484-fe1f-42da-855b-96831a7f41ff.apk'
                    },
                    {
                        text: 'app安卓用户版',
                        link: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2b5692dd-39ab-498e-b867-9a220d2bb2f2/5cc6ae73-c06e-49ae-a7a6-fcccdcc31524.apk'
                    },
                ]
            },
            {
                text: '仓库',
                ariaLabel: '仓库',
                items: [
                    {text: 'gitee', link: 'https://gitee.com/old-chen-next-door/lao-chens-front-end-notes'},
                    {text: 'github', link: 'https://github.com/laochen56/laochen_blog'},
                ]
            },
        ],
        //静态侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
        sidebar: {
            '/pages/': [
                {
                    title: 'HTML',   // 一级菜单名称
                    sidebarDepth: 2,
                    collapsable: true, // false为默认展开菜单, 默认值true是折叠,
                    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                    children: [
                        ['HTML/html.md', 'HTML简介'],
                        ['HTML/html5.md', 'HTML5简介']
                    ]
                },
                {
                    title: 'CSS',
                    sidebarDepth: 2,
                    collapsable: true,
                    children: [
                        ['CSS/css2.md', 'CSS简介'],
                        ['CSS/css3.md', 'CSS3简介']
                    ]
                },
                {
                    title: 'JavaScript',
                    sidebarDepth: 2,
                    collapsable: true,
                    children: [
                        ['JavaScript/js.md', 'JavaScript简介'],
                        ['JavaScript/es6.md', 'ES6简介']
                    ]
                },
                {
                    title: 'Vue',
                    sidebarDepth: 2,
                    collapsable: true,
                    children: [
                        ['Vue/vue2.md', 'Vue2简介'],
                        ['Vue/vue3.md', 'Vue3简介']
                    ]
                },
                {
                    title: '前端八股文',
                    sidebarDepth: 2,
                    collapsable: true,
                    children: [
                        ['Expand/expand1.md', '高频常见'],
                        ['Expand/expand2.md', '基础备用']
                    ]
                }
            ],
            '/Life/': [{
                title: '人生感悟',
                collapsable: false,
                children: [
                    ['alive.md', '活着'],
                    ['meaning_of_life.md', '人生的意义'],
                    ['lifetime.md', '人生格言']
                ]
            }]
            //...可添加多个不同的侧边栏，不同页面会根据路径显示不同的侧边栏
        }
    }
//   动态添加侧边导航栏
}