import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { GithubService } from './home/github.service';
import {UserService} from './user.service';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';



// 1.
import {
  RouterModule,
  Routes
} from '@angular/router';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { environment } from 'src/environments/environment';


// 2.
const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'work', component: WorkComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact' },
  { path: 'login', component: LoginComponent }
];





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumeComponent,
    WorkComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // 3.
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
 

  ],
  providers: [
    GithubService,
   UserService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: APP_BASE_HREF, useValue: '/'}
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
