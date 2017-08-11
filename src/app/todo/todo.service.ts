import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { UUID } from 'angular2-uuid';
import { Http, Headers  } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {
  // 定义你的假WebAPI地址，这个定义成什么都无所谓
  // 只要确保是无法访问的地址就好
  // private api_url = 'api/todos';
  private api_url = 'http://localhost:3000/todos';
  private headers = new Headers({'Content-Type': 'application/json'});

  todos: Todo[] = [];

  constructor(private http: Http) { }
  // POST 新增
  addTodo(desc: string): Promise<Todo> {
    // 现在有一个问题 如果什么都不输(或者 < debounceTime) 会添加空记录
    // if (desc === '') { return; }
    const todo = {
      id: UUID.UUID(),
      desc: desc,
      completed: false
    };
    this.todos.push(todo);
    return this.http // 构造一个POST类型的HTTP请求
               // 其访问的url是this.api_url，request的body是一个JSON（把todo对象转换成JSON）
               // 在参数配置中我们配置了request的header。
      .post(this.api_url, JSON.stringify(todo), {headers: this.headers})
      .toPromise() // 返回的是一个Observable（可观察对象）,转为 Promise
      // .then(res => res.json().data as Todo)
      .then(res => res.json() as Todo)
      .catch(this.handleError);
  }
  // PUT 更新
  toggleTodo(todo: Todo): Promise<Todo> {
    const url = `${this.api_url}/${todo.id}`;
    console.log(url);
    const updateTodo = Object.assign({}, todo, {completed: !todo.completed});
    return this.http
      .put(url, JSON.stringify(updateTodo), {headers: this.headers})
      .toPromise()
      .then(() => updateTodo)
      .catch(this.handleError);
  }

  // DELETE 删除
  deleteTodoById(id: string): Promise<void> {
    const url = `${this.api_url}/${id}`;
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  // GET 拉取
  getTodos(): Promise<Todo[]> {
    return this.http.get(this.api_url)
      .toPromise()
      .then(res => res.json().data as Todo[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<void> {
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
