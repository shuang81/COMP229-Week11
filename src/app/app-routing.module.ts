import { MovieEditComponent } from './content/movies/edit/edit.component';
import { MovieAddComponent } from './content/movies/add/add.component';
import { MovieListComponent } from './content/movies/list/list.component';
import { RegisterComponent } from './content/auth/register/register.component';
import { LoginComponent } from './content/auth/login/login.component';
import { ContactComponent } from './content/contact/contact.component';
import { ServicesComponent } from './content/services/services.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { AboutComponent } from './content/about/about.component';
import { HomeComponent } from './content/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'movies/list', component: MovieListComponent},
  {path: 'movies/add', component: MovieAddComponent},
  {path: 'movies/edit/:id', component: MovieEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
