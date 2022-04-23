import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthadminGuard implements CanActivate {
  constructor(private data:UserService){}
  canActivate(){
    if(this.data.checkTokenAdmin()){
      return true;
    }
    else{
      return false;
    }
  }
  
}
