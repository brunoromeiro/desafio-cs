import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUser(username: string) {
    const url = `https://api.github.com/users/${username}`;
    return this.http.get(url);
  }

  getReposByUser(username: string) {
    const url = `https://api.github.com/users/${username}/repos`;
    return this.http.get(url);
  }

  getReposData(full_name: string) {
    const url = `https://api.github.com/repos/${full_name}`;
    return this.http.get(url);
  }

}
