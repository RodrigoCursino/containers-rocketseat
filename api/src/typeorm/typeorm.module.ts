// src/typeorm/typeorm.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VaultService } from '../vault/vault.service';
import { TaskEntity } from '../typeorm/entities/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (vaultService: VaultService) => {
        console.log('TypeOrmModule.forRootAsync called');
        const { username, password } = await vaultService.getDbCredentials();
        return {
          type: 'mysql',
          host: 'db',
          port: 3306,
          username,
          password,
          database: 'desafio',
          entities: [TaskEntity],
          synchronize: true,
        };
      },
      inject: [VaultService],  // Injetando o VaultService
    }),
  ],
})
export class TypeOrmCustomModule {}
