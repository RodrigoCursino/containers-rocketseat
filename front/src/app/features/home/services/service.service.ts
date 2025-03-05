import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, shareReplay, tap } from 'rxjs';
import { ITask } from '../../../core/models/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 
  private _url  = signal('http://localhost:3000/tasks')
  constructor(private _http: HttpClient){}

  #setTaskList       = signal<ITask[] | null>(null);
  public getTaskList = this.#setTaskList.asReadonly();

  #setCreateTask     = signal<ITask | null>(null);
  public getTask  = this.#setTaskList.asReadonly();
  
  public httpTaskList$(): Observable<ITask[]> {
    return this._http.get<ITask[]>(this._url()).pipe(
      shareReplay(),
      tap((res) => this.#setTaskList.set(res))
    );
  }

  public httpCreateTask$(task : ITask): Observable<ITask> {
    return this._http.post<ITask>(this._url(), task).pipe(
      shareReplay()
    );
  }

  public httpUpdateTask$(task: ITask): Observable<ITask> {
    return this._http.put<ITask>(`${this._url()}/${task.id}`, task).pipe(
      shareReplay()
    );
  }

  public httpDeleteTask$(task: ITask): Observable<ITask> {
    return this._http.delete<ITask>(`${this._url()}/${task.id}`).pipe(
      shareReplay()
    );
  }
}
