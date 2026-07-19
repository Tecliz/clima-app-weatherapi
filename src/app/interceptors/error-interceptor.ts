import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let mensaje = 'Ocurrió un error inesperado';

      switch (error.status) {
        case 401:
          mensaje = 'No autorizado';
          break;
        case 404:
          mensaje = 'Recurso no encontrado';
          break;
        case 500:
          mensaje = 'Error interno del servidor';
          break;
      }

      console.log('Error capturado por el Interceptor:', mensaje);
      console.log(error);

      return throwError(() => error);
    })
  );
};