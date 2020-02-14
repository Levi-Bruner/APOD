import ApodService from "../Services/ApodService.js";
import store from "../store.js";

//Private
function _draw() {
  let apods = store.State.apods;
  document.getElementById("apod").style.backgroundImage = `url(${apods.url})`;
  document.getElementById("title").innerHTML = `${apods.Title}`
  document.getElementById("explanation").innerHTML = `${apods.Explanation}`
  document.getElementById("copyright").innerHTML = `${apods.Copyright}`

}

//Public
export default class ApodController {
  constructor() {
    store.subscribe("apods", _draw);

    ApodService.getApods();
  }
  getApodDate(event) {
    event.preventDefault();
    let formData = event.target
    let date = formData.date.value
    ApodService.getApodDate(date);
  }
}
