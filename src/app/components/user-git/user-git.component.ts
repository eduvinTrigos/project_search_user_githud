
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GetSearchComponent } from '../get-search/get-search.component';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-user-git',
  templateUrl: './user-git.component.html',
  styleUrls: ['./user-git.component.scss']
})
export class UserGitComponent {
  username: string="";
  user: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private searchService: GetSearchComponent,
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.searchService.getUser(this.username).subscribe({
        next: (response: any) => {
          // Lógica para mostrar los resultados
          const project_user$ = this.searchService.getDataUrl(response.repos_url);
          // Esperar a que todas las llamadas asincrónicas finalicen
          forkJoin([project_user$]).subscribe((results) => {
            // Agregar la nueva propiedad al objeto response
            response.project_user = results[0];
            console.log(response);
            // Asignar el objeto actualizado a la variable this.user
            this.user = response;
          });
        },
        error: (error) => {
          console.log(error);
        }
      });

    });
  }

  private getDataUser( url:string ){
    this.searchService.getDataUrl(url).subscribe({
      next: (response: any) => {
        return response;
      },
      error: (error:string) => {
        return [];
      }
    });
  }
}
