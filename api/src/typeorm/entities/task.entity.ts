/* task.entity.ts */
/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tasks' })
export class TaskEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    updatedAt: Date;

}
