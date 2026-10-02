import { HttpInterceptorFn } from '@angular/common/http';
import { retry } from 'rxjs/operators';

export const retryInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    retry(3), // Retry the request up to 3 times
  );
};
