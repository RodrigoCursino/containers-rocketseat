// src/app.module.ts
import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VaultModule } from './vault/vault.module';  // Importando o VaultModule
import { TypeOrmCustomModule } from './typeorm/typeorm.module';  // Importando o módulo customizado do TypeORM

@Module({
  imports: [
    TaskModule,
    VaultModule,  // Importando o VaultModule para garantir que o VaultService esteja disponível
    TypeOrmCustomModule,  // Importando o módulo com a configuração do TypeORM
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
