import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
export const routing = RouterModule.forRoot(routes);
