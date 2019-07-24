import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';

/**
 * Prefixes all requests with `environment.serverBaseUrl`.
 */
@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      url: environment.serverBaseUrl + request.url
    });

    return next.handle(request);
  }
}
