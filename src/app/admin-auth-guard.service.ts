import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class AdminAuthGuard {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<any> {
    return this.auth.appUser$
      .map(appUser => appUser.isAdmin);
  }

}
