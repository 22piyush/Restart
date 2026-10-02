import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Auth Interceptor: Intercepting request', req);

  // You can modify the request here, for example, add an Authorization header
  const modifiedReq = req.clone({
    setHeaders: {
      Authorization: `Bearer YOUR_AUTH_TOKEN`, // Replace with your actual token
    },
  });

  console.log('Auth Interceptor: Modified request', modifiedReq);

  return next(modifiedReq);
};
