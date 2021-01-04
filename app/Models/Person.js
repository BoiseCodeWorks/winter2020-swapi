export default class Person {
  constructor({ name, height, mass, gender, url, eye_color }) {
    this.name = name
    this.height = height
    this.mass = mass
    this.gender = gender
    this.url = url
    this.eyeColor = eye_color
  }


  get Template() {
    return `
    <li class="eyes-${this.eyeColor}">
      ${this.name} - ${this.gender} Height: ${this.height} GU, Weight ${this.mass} GU 
    </li>
    `
  }
}
