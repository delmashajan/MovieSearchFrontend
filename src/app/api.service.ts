import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Movie {
  title: string;
  releaseDate: string;
  overview: string;
  ratings: number;
  posterPath: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  searchMovies(query: any) {
    return this.http.get<Movie[]>('http://localhost:8080/api/movies/search', { params: query });
  }

  
  
}
