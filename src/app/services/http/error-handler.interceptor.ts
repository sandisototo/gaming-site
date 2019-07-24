import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

/**
 * Adds a default error handler to all requests.
 */
@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .pipe(catchError(error => this.errorHandler(error)));
  }

  // Customize the default error handler here if needed
  private errorHandler(
    response: HttpResponse<any>
  ): Observable<HttpEvent<any>> {
    if (response.status === 401 || response.status === 400 || response.status === 404) {
      alert(`Erorr ${response.status} occured!`);
      this.router.navigate(['/home'], {
        replaceUrl: true
      });
    }

    if (!environment.production) {
      // Do something with the error
      console.error('Request error', response);
    }
    throw response;
  }
}
