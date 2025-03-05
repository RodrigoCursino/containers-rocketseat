FROM node:22.14.0-alpine3.21
WORKDIR /usr/src/api
RUN npm i @nestjs/cli
RUN npm install
CMD [ "tail", "-f", "/dev/null"]
# CMD [ "npm", "start"]
COPY . .
EXPOSE 3000
# Garante que o usuário tenha permissão para alterar arquivos
RUN chown -R node:node /usr/src/api
# Define o usuário que rodará o container (para evitar permissões de root)
USER node
# EXPOSE 3000