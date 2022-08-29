import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getReposByUser(username: string) {
    const url = `https://api.github.com/users/${username}/repos`;
    return this.http.get(url);
  }

  getReposData(username: string, repos: string) {
    const url = `https://api.github.com/repos/${username}/${repos}`;
    return this.http.get(url);
  }

  getUser(username: string) {
    const url = `https://api.github.com/users/${username}`;
    return this.http.get(url);
  }

  searchUsers(name: string) {
    const url = 'https://api.github.com/search/users';
    const urlRequest = `${url}?q=${name}`;
    return this.http.get(urlRequest);
  }
}
