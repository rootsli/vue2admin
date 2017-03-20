/**
 * Created by lichb on 2017/2/9.
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

