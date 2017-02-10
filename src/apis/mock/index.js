/**
 * Created by lichb on 2017/2/10.
 */
import MockFetch from 'mock-fetch-api'

export default {
  start(){
    // if (process.env.NODE_ENV !== 'production') {
      MockFetch.when('GET', '/login').respondWith(200, '{"tokens":"6C15B16A70AE9FEDC6546343E79103532AB88DCE1B91B0DF77BE49AE9F493D04"}');
    // }
  }
}
