import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetSearchComponent } from  './components/get-search/get-search.component';

@Injectable({
  providedIn: 'root'
})
export class ScoreGuard implements CanActivate {
  constructor(private searchService: GetSearchComponent, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const username = route.paramMap.get('username')??'';
      return this.searchService.getUser(username).pipe(
        map(user => {
          if (user.score >= 30.0) {
            return true;
          } else {
            this.router.navigate(['/search']);
            return false;
          }
        })
      );
  }
}
