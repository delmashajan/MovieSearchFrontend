import { Component } from '@angular/core';
import { ApiService } from '../api.service';

interface Movie {
  title: string;
  releaseDate: string;
  overview: string;
  ratings: number;
  posterPath: string;
  
}

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent {
  query: string = ''; // Initialize the query property

  highlightedMovie: Movie | null = null;

  movies: Movie[] = [];
  searchPerformed: boolean = false;
  loading: boolean = false; // Add a loading state property

 

  
  
  

  constructor(private apiService: ApiService) { }

  searchMovies(): void {
    if (this.query) {
      this.loading = true; // Set loading state to true before making the API call

      this.apiService.searchMovies({ query: this.query }).subscribe(
        (movies: Movie[]) => {
          this.movies = movies;
          this.searchPerformed = true;
          this.loading = false; // Set loading state to false after movies are fetched
        },
        (error: any) => {
          console.log('Error fetching movies:', error);
          this.loading = false; // Set loading state to false in case of an error
        }
      );
    }
  }

  highlightCard(movie: Movie | null): void {
    this.highlightedMovie = movie;
  }




  
  
}
