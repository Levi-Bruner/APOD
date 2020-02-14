export default class Apod {
  constructor(data) {
    this.title = data.title
    this.date = data.date
    this.explanation = data.explanation
    this.copyright = data.copyright
    this.url = data.hdurl || data.url
  }

  get Title() {
    return `
    <div class="info title">
    <p>${this.title}</p>
    </div>
`
  }
  get Explanation() {
    return `
    <div class="info explanation">
    <p>${this.explanation}</p>
    </div>
`
  }
  get Copyright() {
    return `
    <div class="info copyright">
    <p>${this.copyright}</p>
    </div>
`
  }
}
