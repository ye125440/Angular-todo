import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './core/auth.service';
import { routing } from './app.routes';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryTodoDbService } from './todo/todo-data';
import { TodoComponent } from './todo/todo.component';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
import { TodoHeaderComponent } from './todo/todo-header/todo-header.component';
import { TodoModule } from './todo/todo.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // TodoComponent,
    // TodoFooterComponent,
    // TodoHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    TodoModule
  ],
  providers: [
    {provide: 'auth',  useClass: AuthService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
