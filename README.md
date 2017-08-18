![](https://github.com/rootsli/vue2admin/blob/master/doc/img/logo.png)

vue2-admin - A scaffolding base Vue2.js
========================================================

[![Vuejs](https://img.shields.io/badge/%20Powered%20by-Vuejs%202.1.x%20-brightgreen.svg)](https://github.com/vuejs/vue) [![Build Status](https://travis-ci.org/rootsli/vue2admin.svg?branch=master)](https://travis-ci.org/rootsli/vue2admin) [![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php) [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

> 基于vue2 + vue-router + vuex + fetch + PostCSS + [element-ui](http://element.eleme.io/)（也可以使用其他UI，例如[iView](https://www.iviewui.com/)） + webpack2 实现的一个后台管理系统基础框架。

#### 框架能力：
- 完全的基于组件化的架构
- 基于组件的CSS命名空间独立，不相互污染
- 登录功能（利用vuex与cookie的持久化方案进行登录认证缓存）
- 多级路由支持
- 基于vuex2的状态管理（开发时建议安装chrome插件vue.js devtools跟踪状态）
- vuex2与cookie的持久化支持（支持对指定vuex状态进行持久化，并能指定cookie的过期时间）。具体示例请见项目源码：src\store\index.js
- PostCSS支持：支持自动拼装前缀（autoprefixer插件），支持最新css语法（postcss-cssnext插件），支持@import方式引入css。具体示例请见项目源码：src\modules\page1\index.vue
- 基于fetch的网络服务（源码路径：src\utils\request.js）
- 支持mock数据服务（mock示例路径：src\apis\mock）
- 基于webpack2的开发构建编译：支持开发阶段的HRM，支持模块依赖，静态资源优化，模块打包和Hash指纹等编译功能，一个命令，即可完成整个项目的构建编译
- 提供了一个webpack大项目打包方案(On demand code-splitting)的示例，请见目录：src\modules\code-splitting-demo

[点此查看运行效果](http://vue2admin.duapp.com)（用户名密码不限）

```
说明：项目框架已经集成了大部分前端项目必须的插件服务和项目逻辑架构，可以拿来即用。让框架尽量简单，逻辑尽量清晰，编译构建过程完全可定制，也是本框架追求的目标之一。
```

## Build Setup

```
依赖环境：运行项目前请确认本地已安装nodejs和npm。依赖的版本如下：
- "node": ">= 4.0.0"
- "npm": ">= 3.0.0"

※ 开发和运行时阶段依赖的其他包请到package.json中查看
```

``` bash
# 安装依赖-国内用户推荐使用npm淘宝镜像，设置方法：
# step1.npm config set registry https://registry.npm.taobao.org 
# step2.npm info underscore 
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
 
 ## 页面结构
 
 ![页面结构](https://github.com/rootsli/vue2admin/blob/master/doc/img/vue2admin.png)
 
 ## todo
 - fetch与Service Workers的本地缓存方案
 - 国际化
 - 图表插件
 
