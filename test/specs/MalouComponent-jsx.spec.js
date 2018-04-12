import MalouComponent from 'src/malou-component.jsx'
import { createVM } from '../helpers/utils.js'

describe('MalouComponent.jsx', function () {
  it('should render two paragraphs', function () {
    // You can write your tests in JSX but make sure to use the lower case
    // version of your component because otherw
    const vm = createVM(this, h => (
      <vue-malou paragraphs='2'></vue-malou>
    ), { components: { MalouComponent }})
    vm.$el.querySelectorAll('p').length.should.eql(2)
  })
})
