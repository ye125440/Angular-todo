import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  loginWithCredentials(userName: string, password: string): boolean {
    return (userName === 'yejiaxu');
  }

}
