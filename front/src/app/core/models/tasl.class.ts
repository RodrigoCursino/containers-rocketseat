import { ITask } from "./task.interface"

export class Task {

    id: number
    title: string
    description: string
    createdAt: Date|null

    constructor(task: ITask|null) {
        this.id          = task?.id          ? task.id          : 0
        this.title       = task?.title       ? task.title       : "" 
        this.description = task?.description ? task.description : "" 
        this.createdAt   = task?.createdAt   ? task.createdAt   : null
    }
}