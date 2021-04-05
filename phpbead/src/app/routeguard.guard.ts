import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {BeadservService} from './beadserv.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteguardGuard implements CanActivate {

  constructor(public service: BeadservService,
              public route: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.service.isLogged){
      return true;
    }
    else{
      this.route.navigate(['/login']);
      return false;
    }
  }
}
