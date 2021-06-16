export default class Question {
    text: String
    answers: Array<String>

    constructor(text: String, answers: Array<String>) {
        this.text = text
        this.answers = answers
    }
}