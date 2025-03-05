import { Component, inject, OnInit } from '@angular/core';
import { TaskService } from '../../services/service.service';
import { ITask } from '../../../../core/models/task.interface';
import { Task } from '../../../../core/models/tasl.class';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  
  #taskService = inject(TaskService)

  public getTaskList    = this.#taskService.getTaskList;
  public taskData: Task = new Task(null)
  
  ngOnInit(): void {
    this.loadList();
  }

  loadList() {
    this.#taskService.httpTaskList$().subscribe();
    this.getTaskList = this.#taskService.getTaskList;
  }

  public submitFormAndLoadTaskList(task: ITask) {
    if(task?.id) {
      this.updateTask(task)
    } else {
      this.createTask(task)
    }
  }

  private createTask(task: ITask) {
    this.#taskService.httpCreateTask$(task).subscribe({
      complete: () => this.loadList()
    })
  }

  private updateTask(task: ITask) {
    this.#taskService.httpUpdateTask$(task).subscribe({
      complete: () => this.loadList()
    })
  }

  public deleteTask(task: ITask) {
    this.#taskService.httpDeleteTask$(task).subscribe({
      complete: () => this.loadList()
    })
  }

  public editTaskInForm(task: ITask) {
    this.taskData = new Task(task)
  }
}
