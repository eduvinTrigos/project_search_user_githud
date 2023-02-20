
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GetSearchComponent } from '../get-search/get-search.component';
import { forkJoin } from 'rxjs';
import { ErrorServiceService } from '../../error-service.service';

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
    private ErrorServiceService: ErrorServiceService
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
            // Asignar el objeto actualizado a la variable this.user
            this.user = response;
          });
        },
        error: (error) => {
          this.ErrorServiceService.setErrorMessage(error);
        }
      });

    });
  }
}
