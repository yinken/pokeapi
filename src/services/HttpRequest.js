
import axios from 'axios';

export default class HttpRequest {
  constructor() {
    let service = axios.create({});
    this.service = service;
  }
  get(path) {
    return this.service.get(path)
  }
}