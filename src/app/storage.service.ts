import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async getItem(itemName) {
    const item = await localStorage.getItem(itemName);
    return item;
  }

  async getObject(objectName) {
    const obj = await JSON.parse(localStorage.getItem(objectName));
    return obj;
  }

  async setObject(objectName, obj) {
    const result = await localStorage.setItem(objectName, JSON.stringify(obj));
    return result;
  }

  async setItem(itemName, obj) {
    const result = await localStorage.setItem(itemName, JSON.stringify(obj));
    return result;
  }

}
