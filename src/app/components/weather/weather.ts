import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Weather as WeatherService } from '../../services/weather';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather.html',
  styleUrl: './weather.css'
})
export class WeatherComponent {

  city: string = '';
  weatherData: any = null;
  errorMessage: string = '';

  constructor(private weatherService: WeatherService) { }

  buscarClima(): void {
    if (!this.city.trim()) {
      this.errorMessage = 'Por favor ingresa una ciudad';
      return;
    }

    this.errorMessage = '';
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
        console.log('Respuesta de la API:', data);
      },
      error: (error: HttpErrorResponse) => {
        console.log('Error recibido en el componente');
        console.log(error);
        this.weatherData = null;

        switch (error.status) {
          case 400:
            this.errorMessage = 'Solicitud incorrecta. Verifica el nombre de la ciudad';
            break;
          case 401:
            this.errorMessage = 'La API key no es válida';
            break;
          case 403:
            this.errorMessage = 'Acceso denegado a la API';
            break;
          case 404:
            this.errorMessage = 'No se encontró la ciudad ingresada';
            break;
          case 429:
            this.errorMessage = 'Se excedió la cantidad de peticiones permitidas';
            break;
          case 500:
            this.errorMessage = 'Error interno del servidor';
            break;
          default:
            this.errorMessage = 'Ocurrió un error inesperado';
        }
      }
    });
  }
}