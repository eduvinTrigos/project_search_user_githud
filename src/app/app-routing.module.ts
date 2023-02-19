import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { UserGitComponent } from './components/user-git/user-git.component';


const routes: Routes = [
  { path: '',  component: SearchComponent },
  { path: 'search', component: SearchComponent },
  { path: 'user/:username', component: UserGitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
