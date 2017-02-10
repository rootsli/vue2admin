/**
 * Created by lichb on 2017/2/9.
 *
 * 调用示例：
 * let formData = new FormData();
 *formData.append("id",1060);
 *
 *HTTPUtil.post(url,formData,headers).then((json) => {
 * //处理 请求success
 *  	if(json.code === 0 ){
 *          //我们假设业务定义code为0时，数据正常
 *      }else{
 *           //处理自定义异常
 *          this.doException(json);
 *      }
 * },(json)=>{
 *   //处理请求fail
 *
 * })
 */
import 'whatwg-fetch'

export default {
  /**
   * 基于 fetch 封装的 GET请求
   * @param url
   * @param params {}
   * @param headers
   * @returns {Promise}
   */
  get(url, params, headers) {
    if (params) {
      let paramsArray = [];
      //encodeURIComponent
      Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
      if (url.search(/\?/) === -1) {
        url += '?' + paramsArray.join('&')
      } else {
        url += '&' + paramsArray.join('&')
      }
    }
    return new Promise(function (resolve, reject) {
      fetch(url, {
        method: 'GET',
        headers: headers,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            reject({status: response.status})
          }
        })
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject({status: -1});
        })
    })
  },
  /**
   * 基于 fetch 封装的 POST请求  FormData 表单数据
   * @param url
   * @param formData
   * @param headers
   * @returns {Promise}
   */
  post(url, formData, headers) {
    return new Promise(function (resolve, reject) {
      fetch(url, {
        method: 'POST',
        headers: headers,
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            reject({status: response.status})
          }
        })
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject({status: -1});
        })
    })
  }
}

