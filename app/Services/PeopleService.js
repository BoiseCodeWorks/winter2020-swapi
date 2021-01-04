import { ProxyState } from "../AppState.js";
import Person from "../Models/Person.js";
import { swapi } from "./AxiosService.js";

class PeopleService {
  async getPeople(url) {
    let res = await swapi.get(url)
    debugger
    ProxyState.people = res.data.results.map(p => new Person(p))
    ProxyState.next = res.data.next || ''
    ProxyState.previous = res.data.previous || ''
  }
}

export const peopleService = new PeopleService();