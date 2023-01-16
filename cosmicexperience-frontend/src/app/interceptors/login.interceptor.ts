// import {
//   HttpEvent,
//   HttpHandler,
//   HttpInterceptor,
//   HttpParams,
//   HttpRequest,
//   HTTP_INTERCEPTORS,
// } from '@angular/common/http';
// import { Observable } from 'rxjs';

// export class LoginInterceptor implements HttpInterceptor {
//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     const accessToken = localStorage.getItem('accessToken');
//     if (accessToken) {
//       const newReq = req.clone({
//         setHeaders: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });
//       return next.handle(newReq);
//     } else {
//       return next.handle(req);
//     }
//   }
// }

// export const LoginInterceptorProvider = {
//   provide: HTTP_INTERCEPTORS,
//   useClass: LoginInterceptor,
//   multi: true,
// };

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return next.handle(request);
    }

    return next.handle(request);
  }
}
