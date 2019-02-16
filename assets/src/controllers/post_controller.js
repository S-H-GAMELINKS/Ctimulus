import { Controller } from "stimulus"

export default class extends Controller {
    static targets = ["content", "preview"]

    content() {
        this.previewTarget.value = this.contentTarget.value
    }
}