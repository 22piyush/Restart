import { HttpInterceptorFn } from '@angular/common/http';
import { retry } from 'rxjs/operators';

export const retryInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    retry(0), // Retry the request up to 3 times
  );
};
