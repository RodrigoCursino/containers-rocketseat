import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ITask } from '../../../../core/models/task.interface';
import { Task } from '../../../../core/models/tasl.class';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent implements OnChanges{
  
  constructor(private _fb: FormBuilder) {}
  
  @Input()  taskData: ITask               = new Task(null);
  @Output() saveTask: EventEmitter<ITask> = new EventEmitter<ITask>();
  
  public form = this._fb.group({
    id: [0],
    title: ['', Validators.required],
    description: ['', Validators.required]
  })

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['taskData'] && this.taskData) {
      this.form.patchValue(this.taskData)
    }
  }

  saveAndInitForm() {
    if(this.form.valid) {
      this.saveTask.emit({... this.form.value} as ITask)
      this.form.reset();
    }
  }
}
