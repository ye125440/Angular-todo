import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo.component';

export const routes: Routes = [
  {
    path: 'todo',
    component: TodoComponent
  }
];
// 用的是forChild而不是forRoot，因为forRoot只能用于根目录，所有非根模块的其他模块路由都只能用forChild
export const routing = RouterModule.forChild(routes);
