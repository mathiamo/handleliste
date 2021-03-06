import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../authentication/auth.service";
import { Observable } from "rxjs/Observable";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const copiedReq = req.clone({
      params: req.params.set('auth', this.authService.getToken())
    });
    return next.handle(copiedReq);
  }
}
