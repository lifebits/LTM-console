import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(
    private http: HttpClient
  ) { }

  // http://api.mystreet.site/tasks/load

  getAllTasks() {
    const url = 'https://api.mystreet.site/tasks/load';
    return this.http.get(url);
  }
}
