import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
      error: (err) => {
        this.errorMessage = 'No se pudo obtener el clima. Verifica la ciudad o tu API Key.';
        this.weatherData = null;
        console.error(err);
      }
    });
  }
}