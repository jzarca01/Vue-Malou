import Malou from './lib/malou'

export default {
  name: 'VueMalou',
  props: {
    paragraphs: {
      default: '1',
      type: String
    },
    sentences: {
      default: '5',
      type: String
    }
  },
  data () {
    return {
      malou: new Malou()
    }
  },
  methods: {
    createParagraph () {
      const paragraph = this.malou.getParagraph(this.sentences)
      return <p>{paragraph}</p>
    }
  },
  computed: {
    arrayParagraphs () {
      return new Array(Number(this.paragraphs)).fill(0)
    }
  },
  render (h) {
    return (
      <div>
        {this.arrayParagraphs.map(element => this.createParagraph())}
      </div>
    )
  }
}
