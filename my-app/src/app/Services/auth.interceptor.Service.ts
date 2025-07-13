import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modify = req.clone({ headers: req.headers.append('Auth', 'Farhan') });
    console.log('Interceptor Working Header added');
    return next.handle(modify).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          console.log('Response Recieved in interceptor');
          console.log(event.headers);
        }
      })
    );
  }
}
