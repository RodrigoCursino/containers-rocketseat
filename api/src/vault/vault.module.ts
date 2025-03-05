// src/vault/vault.module.ts
import { Global, Module } from '@nestjs/common';
import { VaultService } from './vault.service';

@Global()  // Tornando o módulo global
@Module({
  providers: [VaultService],
  exports: [VaultService],  // Exportando o VaultService para que outros módulos possam usá-lo
})
export class VaultModule {}
