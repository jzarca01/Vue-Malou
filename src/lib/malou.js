import Dictionary from './dictionary.json'

class Malou {
  getParagraph (nbSentences = 1) {
    let paragraph = ''
    for (var i = 0; i < nbSentences; i++) {
      paragraph += this.getSentence()
    }
    return paragraph
  }

  getSentence () {
    var sentence = ''
    sentence += this.random(Dictionary.sentences_1) + ' '
    sentence += this.random(Dictionary.sentences_2) + ' '
    sentence += this.random(Dictionary.sentences_3) + ' '
    sentence += this.random(Dictionary.sentences_4) + ' '
    sentence += this.random(Dictionary.sentences_5) + ' '
    sentence += this.random(Dictionary.sentences_6) + ' '
    sentence += this.random(Dictionary.sentences_7)
    sentence += this.random(Dictionary.sentences_8) + '. '
    return sentence
  }

  random (sentences) {
    return sentences[Math.floor(Math.random() * sentences.length)]
  }
}

export default Malou
