import { Component } from '@angular/core';
import { GetSearchComponent } from '../get-search/get-search.component';
import { ErrorServiceService } from '../../error-service.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTerm: string = '';
  onSearch: boolean=false;
  constructor(
    private searchService: GetSearchComponent,
    private ErrorServiceService: ErrorServiceService
  ) {}
  users: any[] = [];
  onSubmit() {
    this.onSearch=true;
    if (!this.searchTerm) {
      this.ErrorServiceService.showError('La variable searchTerm no tiene un valor válido');
      return;
    }

    // Validar mínimo 4 caracteres
    if (this.searchTerm.length < 4) {
      this.ErrorServiceService.showError('La búsqueda debe tener al menos 4 caracteres');

      return;
    }

    // Validar palabra prohibida
    if (this.searchTerm.toLowerCase() === 'doublevpartners') {
      this.ErrorServiceService.showError('La palabra "doublevpartners" no está permitida en la búsqueda');
      return;
    }

    this.searchService.searchUsers(this.searchTerm).subscribe({
      next: (response: any) => {
        // Lógica para mostrar los resultados
        this.users = response.items;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
