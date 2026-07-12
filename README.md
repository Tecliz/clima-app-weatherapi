# ClimaApp - Consumo de API REST con HttpHeaders

Aplicación desarrollada en Angular que consulta el clima actual de una ciudad utilizando la API de **WeatherAPI**, autenticada mediante `HttpHeaders`.

##  Descripción del proyecto

Esta actividad consiste en desarrollar una aplicación Angular que consuma una API REST protegida, implementando la autenticación de solicitudes HTTP mediante `HttpClient` y `HttpHeaders`.

##  Tecnologías utilizadas

- Angular 21
- TypeScript
- HttpClient / HttpHeaders
- WeatherAPI (https://www.weatherapi.com/)

##  Cómo ejecutar el proyecto

1. Clonar el repositorio:
```bash
git clone https://github.com/TU_USUARIO/clima-app-weatherapi.git
cd clima-app
```

2. Instalar las dependencias:
```bash
npm install
```

3. Levantar el servidor de desarrollo:
```bash
ng serve
```

4. Abrir el navegador en: http://localhost:4200

5. Configuración de la API Key

El servicio utiliza una API Key de WeatherAPI.

6. Estructura del proyecto
src/app/
├── services/
│   └── weather.ts       → Servicio que consume la API con HttpHeaders
└── components/
└── weather/
├── weather.ts    → Lógica del componente
├── weather.html  → Interfaz de usuario
└── weather.css   → Estilos
7. Funcionalidad

- El usuario ingresa el nombre de una ciudad (ej. Lima, Cusco, Arequipa, Iquitos).
- Al presionar **Buscar**, la aplicación consulta la API y muestra:
  - Nombre de la ciudad y país
  - Temperatura actual (°C)
  - Estado del clima
  - Humedad
  - Velocidad del viento
  - Ícono del clima
  