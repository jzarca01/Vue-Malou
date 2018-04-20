import VueMalou from 'src/VueMalou.jsx'
import { createVM } from '../helpers/utils.js'

describe('VueMalou.jsx', function () {
  it('should render two paragraphs', function () {
    // You can write your tests in JSX but make sure to use the lower case
    // version of your component because otherw
    const vm = createVM(this, h => (
      <vue-malou paragraphs='2' sentences="3"></vue-malou>
    ), { components: { VueMalou }})
    vm.$el.querySelectorAll('p').length.should.eql(2)
  })
})
