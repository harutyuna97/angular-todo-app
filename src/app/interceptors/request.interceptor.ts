import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {LoadingService} from "../services/loading.service";

@Injectable({providedIn: 'root'})
export class RequestInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) {
  }

  intercept(httpRequest: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.show();
    return httpHandler.handle(httpRequest.clone()).pipe(
      finalize(() => {
          this.loadingService.hide();
        }
      )
    );
  }
}
