/**
 * Created by lichb on 2017/3/20.
 *
 */
export default {
  /**
   * webpack的code spliting（Using require.ensure）功能可以将require.ensure及其回调内依赖的包合并到一个独立的模块（chunk）中，
   * 并且webpack使用jsonp对这个模块进行异步静默加载
   * @好处：在中大型项目中，避免合并后的文件过大；此外，也有利于优化项目的资源加载速度
   * @结果：此处module-a.js,module-b.js,module-c.js将被打包到一个独立的chunk中。可以通过 npm run build查看打包结果。
   */
  start(){
    console.log('webpack2 code splitting demo(Using require.ensure) start...')
    require.ensure(['./module-a', './module-b'], function (require) {
      require('./module-c')
      console.log('webpack2 code splitting demo(Using require.ensure) end!')
    });
  }
}
