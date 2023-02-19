import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { GetSearchComponent } from './components/get-search/get-search.component';
import { ViewSearchComponent } from './components/view-search/view-search.component';
import { UserGitComponent } from './components/user-git/user-git.component';
import { UserFollowersGrapComponent } from './components/user-followers-grap/user-followers-grap.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { ScoreGuard } from './score.guard';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    GetSearchComponent,
    ViewSearchComponent,
    UserGitComponent,
    UserFollowersGrapComponent,
    ErrorMessageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'search', component: SearchComponent },
      {
        path: 'user/:username',
        component: UserGitComponent,
        canActivate: [ScoreGuard]
      }
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
