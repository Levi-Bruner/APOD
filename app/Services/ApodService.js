import store from "../store.js";
import Apod from "../Models/Apod.js"

// @ts-ignore
let _api = axios.create({
  baseURL: "//api.nasa.gov/planetary",
  timeout: 3000
});

class ApodService {
  getApodDate(date) {
    _api
      .get("apod?api_key=0GLiUWmfe4K6pbj47m59rSYaf2uHWEk2dbC9UhOq&date=" + date)
      .then(res => {
        let dateApods = new Apod(res.data);
        store.commit("apods", dateApods)
      })
      .catch(error => {
        console.error(error);
      })
  }

  getApods() {
    _api
      .get("apod?api_key=0GLiUWmfe4K6pbj47m59rSYaf2uHWEk2dbC9UhOq")
      .then(res => {
        let apiApods = new Apod(res.data);
        store.commit("apods", apiApods)
      })
      .catch(error => {
        console.error(error);
      })
  }

}

const service = new ApodService();
export default service;
