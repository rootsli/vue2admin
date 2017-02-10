import Vue from 'vue'
import Hello from 'src/components/CMenu'

describe('CMenu.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Hello)
    })
    expect(vm.$el.querySelector('.feed-back a').textContent)
      .to.equal('FAQ中心')
  })
})
