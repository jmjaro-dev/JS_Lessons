// EasyHTTP Library
// @version 3 Async Await

class EasyHTTP {
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }
}