import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div>
      <form #formRef="ngForm" (ngSubmit)="submit(formRef.value)">
        <fieldset><input name="userName" required minlength="3" type="text" [(ngModel)]="userName"
                         #userNameRef="ngModel" placeholder="请输入用户名"/>            <!--{{userNameRef.errors | json}}-->
          <div *ngIf="userNameRef.errors?.required">this is required</div>
          <div *ngIf="userNameRef.errors?.minlength">should be at least 3 characters</div>
          <div></div>
          <input name="password" required type="password" [(ngModel)]="password" #passwordRef="ngModel"
                 placeholder="请输入密码"/>            <!--{{passwordRef.errors | json}}-->
          <!--<button (click)="login()">Login</button>-->
          <button type="submit">Login</button>
        </fieldset>
      </form>
    </div>    `,
  styles: [`
    input.ng-invalid{
      border: 3px solid red;
    }
    input.ng-valid{
      border: 3px solid green;
    }
  `],
  providers: []
})
export class LoginComponent implements OnInit {

  userName = '';
  password = '';

  constructor(@Inject('auth') private authService) { }

  ngOnInit() {
  }

  // login() {
  //   console.log('the result is:' + this.authService.loginWithCredentials(this.userName, this.password)
  //     + '\n\ruserName: ' + this.userName + '\n\rpassword: ' + this.password);
  // }

  submit(formValue) {
    console.log('the result is:' + this.authService.loginWithCredentials(formValue.userName, formValue.password)
      + '\n\ruserName: ' + this.userName + '\n\rpassword: ' + this.password);
  }

}
