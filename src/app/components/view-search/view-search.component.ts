import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-search',
  templateUrl: './view-search.component.html',
  styleUrls: ['./view-search.component.scss']
})
export class ViewSearchComponent {
  @Input() users: any[] = [];
}
