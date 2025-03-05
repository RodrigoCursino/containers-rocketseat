import { Controller, Get, Post, Body, Put, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './createTask.dto';
import { UpdateTaskDto } from './updateTask.dto';

@Controller('tasks')
export class TaskController {

    constructor(private taskService: TaskService) {}

    @Get()
    getTask() {
        return this.taskService.getTask();
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto) {
        return this.taskService.createTask(createTaskDto);
    }

    @Put(':id')
    async updateTask(@Param('id', ParseIntPipe) id: number, @Body() updateTaskDto: UpdateTaskDto) {
        await this.taskService.updateTask(id, updateTaskDto);
    }

    @Delete(':id')
    async deleteTask(@Param('id', ParseIntPipe) id: number) {
        await this.taskService.deleteTask(id);
    }
}
