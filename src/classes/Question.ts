export default class Question {
    text: String
    answers: Array<String>
    link: String

    constructor(text: String, answers: Array<String>, link?: String | null) {
        this.text = text
        this.answers = answers
        this.link = link
    }
}