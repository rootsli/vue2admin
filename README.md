# vue2admin

> 基于vue2 + vue-router + vuex + fetch + PostCSS + [element-ui](http://element.eleme.io/) + webpack2 实现的一个后台管理系统基础框架。

#### 已实现功能：
- 基础框架（完全的组件化架构）
- 登录功能（利用vuex与localstorage的持久化方案进行登录认证缓存）
- 路由功能
- 基于vuex的状态管理
- vuex与localstorage的持久化方案（目前持久化方案不能限定过期时间，待优化）
- PostCSS支持：支持自动拼装前缀（autoprefixer插件），支持最新css语法（postcss-cssnext插件），支持@import方式引入css。具体示例请见项目源码：src\modules\page1\index.vue
- 基于fetch的网络服务
- 支持mock数据服务

[点此查看运行效果](http://vue2admin.duapp.com)（用户名密码不限）

```
说明：项目生成的UI虽然只是一个简单的框架，但是已经集成了大部分前端项目必须的插件服务和项目逻辑架构。真正实现了拿来即用。
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```


## 工程目录结构
```
src：项目源码。开发的时候代码写在这里。
 |--assets # 项目静态资源，编译时不进行处理的资源都放这里
 |--components # 项目公共组件库
 |--config # 公共配置文件，例如路由配置等
 |--css # 项目公共样式库
 |--modules # 项目应用模块，根据应用需要，还可以有子模块，各子模块目录结构和顶级子模块类似
 |    |--components # 模块级公共组件
 |    |--views # 模块视图
 |    |--css # 模块样式
 |    |--js # 模块脚本
 |--App.vue # 项目根视图
 |--main.js # 项目入口文件
 |--store # 基于vuex的状态管理模块
 |    |--index.js # 入口及store初始化
 |    |--mutation-types.js # mutation名称定义
 |    |--state.js # 根state
 |    |--mutations.js # 根mutation
 |    |--getters.js # 根getter
 |    |--actions.js # 根action
 |    |--modules # 子模块的store对象
 |    |    |--menu.js # menu模块
 |--apis # 服务层ajax请求服务
 |    |--mock # api数据mock服务
 |--utils # 公共库函数
 |    |--request.js # 网络请求服务，实现了对fetch的二次封装（目前只封装了get,post；实际项目中可按着示例封装其他请求）

 ```
 
 ## todo
 
 - vuex与localstorage的持久化方案（待改进：只对指定的vuex state内容进行持久化，并可指定过期时间，目前待选方案：https://github.com/liesislukas/localstorage-ttl，https://github.com/WQTeam/web-storage-cache）
 - 国际化
 - fetch与Service Workers的本地缓存方案
 - 大项目打包方案webpack code-splitting
 - 引入图表插件
 - 热部署
 
