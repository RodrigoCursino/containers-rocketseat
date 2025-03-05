FROM node:22.14.0-alpine3.21
WORKDIR /usr/src/front
COPY . .
RUN npm install -g @angular/cli@17
RUN npm install
# EXPOSE 4200
CMD [ "ng", "serve", "--host", "0.0.0.0"]
# CMD [ "tail", "-f", "/dev/null"]
# Garante que o usuário tenha permissão para alterar arquivos
EXPOSE 4200
RUN chown -R node:node /usr/src/front
# Define o usuário que rodará o container (para evitar permissões de root)
USER node