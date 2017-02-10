/**
 * Created by lichb on 2017/2/9.
 */
import request from '../utils/request'

export default {
  getTokens(name, pass){
    return request.get('/login')
  }
}
