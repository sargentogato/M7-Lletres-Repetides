import Excercises from "./Exercises.js"
export default class EvenListner {
  constructor() {
    this.excercises = new Excercises()
    const buttons = document.querySelectorAll("button")
    for (const button of buttons) {
      button.addEventListener("click", (event) => {
        this.handlerEvent(event)
      })
    }
  }

  handlerEvent(clickEvent) {
    const eventTriggered = clickEvent.target.id
    this.excercises.cleanMessage()
    this.excercises.eventTriggered = eventTriggered
    this.excercises[eventTriggered]()
  }
}
