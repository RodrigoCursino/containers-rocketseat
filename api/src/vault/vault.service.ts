// // vault/vault.service.ts
// import { Injectable } from '@nestjs/common';
// import * as vault from 'node-vault';

// @Injectable()
// export class VaultService {
//   private readonly client: vault.client;

//   constructor() {
//     this.client = vault({
//         apiVersion: 'v1',
//         endpoint: process.env.VAULT_ADDR || 'http://vault:8200',
//         token: process.env.VAULT_TOKEN || 'desafio-rocketseat',
//     });
//   }
  
//   async getDbCredentials(): Promise<{ username: string; password: string }> {
//     try {
//     console.log("clienet", this.client)
//       console.log('Consultando credenciais do Vault...');
//       const result = await this.client.read(
//         'database/creds/desafio-rocketseat-role',
//       );
//       console.log('Credenciais recebidas do Vault:', result);
//       return {
//         username: result.data.username,
//         password: result.data.password,
//       };
//     } catch (error) {
//       console.error('Erro ao obter credenciais do Vault:', error);
//       throw error;
//     }
//   }
// }

// src/vault/vault.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class VaultService {
  private readonly vaultUrl: string;
  private readonly vaultToken: string;

  constructor() {
    this.vaultUrl = process.env.VAULT_ADDR || 'http://vault:8200'; // URL do Vault
    this.vaultToken = process.env.VAULT_TOKEN || 'desafio-rocketseat'; // Token de acesso
  }

  async getDbCredentials(): Promise<{ username: string; password: string }> {
    try {
      console.log('Consultando credenciais do Vault...');
      const response = await axios.post(
        `${this.vaultUrl}/v1/database/creds/desafio-rocketseat-role`,
        {},
        {
          headers: {
            'X-Vault-Token': this.vaultToken, // Header com o token de autenticação
          },
        },
      );

      // Se a resposta for bem-sucedida, extraímos as credenciais do banco
      const { username, password } = response.data.data;
      console.log('Credenciais recebidas do Vault:', { username, password });

      return { username, password };
    } catch (error) {
      console.error('Erro ao obter credenciais do Vault:', error);
      throw error;
    }
  }
}
