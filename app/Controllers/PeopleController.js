import { ProxyState } from "../AppState.js";
import { peopleService } from "../Services/PeopleService.js";

function _drawPeople() {
  let template = '<ol>'
  const people = ProxyState.people
  people.forEach(p => template += p.Template)
  document.getElementById('app').innerHTML = template + '</ol>'
}
function _drawNext() {
  // @ts-ignore
  document.getElementById("next").disabled = ProxyState.next.length <= 0
}
function _drawPrevious() {
  // @ts-ignore
  document.getElementById("previous").disabled = ProxyState.previous.length <= 0
}



export default class PeopleController {
  constructor() {
    //NOTE register subscribers first
    ProxyState.on('people', _drawPeople)
    ProxyState.on('next', _drawNext)
    ProxyState.on('previous', _drawPrevious)

    //NOTE Fetch data
    peopleService.getPeople('');
  }

  next() {
    peopleService.getPeople(ProxyState.next)
  }
  previous() {
    peopleService.getPeople(ProxyState.previous)
  }
}