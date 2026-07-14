import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Weather {

  private apiUrl = 'https://api.weatherapi.com/v1/current.json';
  private apiKey = '979f74c582854e5784433137260707'; // tu API key

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const url = `${this.apiUrl}?key=${this.apiKey}&q=${city}`;

    return this.http.get(url, { headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('Error recibido en el servicio');
        console.log(error);
        return throwError(() => error);
      })
    );
  }
}