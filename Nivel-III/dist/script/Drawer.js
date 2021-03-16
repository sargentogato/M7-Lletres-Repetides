export default class Drawer {
  displayTask(elementToSelect, message) {
    const divToWrite = document.getElementById(`${elementToSelect}Box`)
    let paragraph = document.createElement("p")
    paragraph.textContent = message
    divToWrite.appendChild(paragraph)
  }
}
