import { Router } from '@angular/router';
import { MovieService } from './../../../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class MovieAddComponent implements OnInit {

  form: any = {
    name: null,
    year: null,
    director: null,
    genre: null,
    runtime: null
  }

  isSuccessful = true;
  errorMessage = "";

  constructor(private MovieService: MovieService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.MovieService.addMovie(this.form)
    .subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.backToList();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSuccessful = false;
      }
    })
  }
  backToList(): void {
    this.router.navigate(['/movies/list']);
  }
}
