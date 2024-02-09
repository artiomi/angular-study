import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('request intercepted: ', req);
  const newRequest = req.clone({ headers: new HttpHeaders({ 'token': '123456' }) });

  return next(newRequest);
};
