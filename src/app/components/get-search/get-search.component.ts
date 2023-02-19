import { Component,Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-get-search',
  templateUrl: './get-search.component.html',
  styleUrls: ['./get-search.component.scss']
})
export class GetSearchComponent {
  private API_URL = 'https://api.github.com';
  constructor(private http: HttpClient) {}

  searchUsers(searchTerm: string): Observable<any> {
    const url = `${this.API_URL}/search/users?q=${searchTerm}&per_page=10`;
    return this.http.get(url);
  }

  async searchUsersAsync(searchTerm: string): Promise<any> {
    return await firstValueFrom(this.searchUsers(searchTerm));
  }

  searchFollowers(followersUrl: string): Observable<any> {
    return this.http.get(followersUrl);
  }

  async searchFollowersAsync(followersUrl: string): Promise<any> {
    return await firstValueFrom(this.searchFollowers(followersUrl));
  }

  getUser(username: string): Observable<any> {
    const url = `${this.API_URL}/users/${username}`;
    return this.http.get(url);
  }

  async getUserAsync(username: string): Promise<any> {
    return await firstValueFrom(this.getUser(username));
  }

  getDataUrl(url: string): Observable<any> {
    return this.http.get(url);
  }

  async getDataUrlAsync(url: string): Promise<any> {
    return await firstValueFrom(this.getDataUrl(url));
  }
}
