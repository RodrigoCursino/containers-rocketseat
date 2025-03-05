import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from 'src/typeorm/entities/task.entity';
import { CreateTaskParams, UpdateTaskParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {

    constructor(
        @InjectRepository(TaskEntity) private taskRepository: Repository<TaskEntity>,
    ) { }

    getTask() {
        return this.taskRepository.find();
    }

    createTask(taskDetails: CreateTaskParams) {
        const newTask = this.taskRepository.create({ ...taskDetails, createdAt: new Date() });
        return this.taskRepository.save(newTask);
    }

    updateTask(id: number, updateTaskDetails: UpdateTaskParams) {
        return this.taskRepository.update({ id }, { ...updateTaskDetails })
    }

    deleteTask(id: number) {
        return this.taskRepository.delete(id)
    }

}
