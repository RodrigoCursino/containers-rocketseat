/* types.ts */
/* eslint-disable prettier/prettier */

export class UpdateTaskParams {
    id: number;
    title: string;
    description: string;
}

export class CreateTaskParams {
    title: string;
    description: string;
}