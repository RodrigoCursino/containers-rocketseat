import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../../../../core/models/task.interface';
import swal from 'sweetalert';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  @Input() task!       : ITask
  @Output() deleteTask : EventEmitter<ITask> = new EventEmitter<ITask>();
  @Output() editTask   : EventEmitter<ITask> = new EventEmitter<ITask>();

  delete(task: ITask) {
    swal({
      title: "Vocẽ tem certeza disso?",
      text: "Um vez deletado, os dados não estarão mais disponíveis!",
      icon: "warning",
      buttons: ["Cancelar", true],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.deleteTask.emit(task)
      } else {
        swal({
          icon: "info", 
          title: "Tudo certo !!!",
          text:"Não se preocuoe os Seus dados estão salvos!"
        });
      }
    });
    
  }

  edit(task: ITask) {
    this.editTask.emit(task)
  }
}
