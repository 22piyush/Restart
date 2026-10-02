import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    // You can handle errors here, for example, log them or show a notification
    // For demonstration, we'll just log the error to the console
    catchError((error) => {
      console.error('Error Interceptor: An error occurred', error);
      // You can also rethrow the error or return a default value
      return throwError(() => error);
    }),
  );
};
