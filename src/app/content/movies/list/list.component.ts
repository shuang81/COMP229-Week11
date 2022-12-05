import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';
import { MovieService } from '../../../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class MovieListComponent implements OnInit {

  isLoggedId = false;
  hasError = false;
  movies = [];


  constructor(
    private MovieService:MovieService,
    private router: Router,
    private TokenStorageService: TokenStorageService
    ) { }

  ngOnInit(): void {
    this.isLoggedId = !!this.TokenStorageService.getToken();
    this.MovieService.getMoviesList()
    .subscribe({
      next: data => {
        this.movies = data.movies;
        this.hasError = false;
      },
      error: err => {
        this.hasError = true;
      }
    })
  }

  editMovie(id: string): void {
    this.router.navigate(['/movies/edit' + id])
  }

  deleteMovie(id: string): void {
    this.MovieService.deleteMovie(id)
    .subscribe({
      next: data => {
        console.log(data);
        this.reloadPage();
      },
      error: err => {
        this.hasError = true;
      }
    })
  }

  reloadPage(): void {
    window.location.reload();
  }

}
