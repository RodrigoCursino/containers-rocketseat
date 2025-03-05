#!/bin/sh
echo "Aguardando o Vault iniciar..."
until wget --spider http://vault:8200/v1/sys/health 2>/dev/null; do
  echo "Vault não está pronto... aguardando..."
  sleep 5
done

echo "Vault está pronto! Iniciando configuração..."
export VAULT_TOKEN='desafio-rocketseat'
export VAULT_ADDR='http://vault:8200'

vault login $VAULT_TOKEN
vault secrets enable database

vault write database/config/desafio-rocketseat \
    plugin_name=mysql-database-plugin \
    connection_url="root:rootpassword@tcp(db:3306)/desafio" \
    allowed_roles="desafio-rocketseat-role"

vault write database/roles/desafio-rocketseat-role \
    db_name=desafio-rocketseat \
    default_ttl="4h" \
    max_ttl="24h" \
    creation_statements="CREATE USER '{{name}}'@'%' IDENTIFIED BY '{{password}}'; 
    GRANT ALL PRIVILEGES ON desafio.* TO '{{name}}'@'%';"

echo "Configuração finalizada!"

#docker inspect --format='{{json .State.Health}}' vault | jq