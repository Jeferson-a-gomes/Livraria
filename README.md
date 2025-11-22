Trabalho da Matéria Integração de Páginas Web com Banco de Dados


1. Objetivos da Prática

O trabalho visa desenvolver habilidades fundamentais em:

Construção de servidor Node.js com Express e Mongoose;

Utilização de banco de dados MongoDB;

Implementação de API REST;

Integração de um cliente Angular com o back-end via HTTP;

Manipulação de dados utilizando operações GET, POST e DELETE.

2. Tecnologias Utilizadas
   Back-end

Node.js

Express

Mongoose

Cors

JavaScript

MongoDB

Front-end

Angular

TypeScript

HTML/CSS

Ferramentas

MongoDB Compass

Postman

3. Estrutura do Projeto
   livraria\_projeto/
   │
   ├── backend/      # Servidor Node.js com Express e Mongoose
   │   ├── modelo/
   │   ├── routes/
   │   ├── app.js
   │   ├── package.json
   │
   └── frontend/     # Aplicação Angular
   ├── src/
   ├── angular.json
   ├── package.json
4. Desenvolvimento do Back-end
   4.1 Criação do Banco de Dados

Criado no MongoDB Compass:

Banco: livraria

Coleção: livros

4.2 Criação do Servidor

Instalação do gerador do Express:

npm install -g express-generator



Criação do servidor:

express -e livro-servidor



Instalação das dependências:

npm install
npm install mongoose cors

4.3 Configuração do Mongoose
Arquivo conexao.js

Conexão com MongoDB

Opções: useUnifiedTopology, useNewUrlParser

Exportação do módulo

Arquivo livro-schema.js

Definição da estrutura do documento Livro

Associação à coleção livros

Exportação do modelo Libro

4.4 LivroDAO (modelo/livro-dao.js)

Funções criadas:

obterLivros() → retorna todos os livros

incluir(livro) → insere novo livro

excluir(codigo) → remove livro por \_id

Todas com async/await.

4.5 Rotas da API (routes/livros.js)

GET /livros → lista os livros

POST /livros → inclui novo livro

DELETE /livros/:id → exclui livro

4.6 Configuração do Servidor

Porta alterada para 3030

Habilitação de CORS

Inclusão das rotas /livros no app.js

5. Desenvolvimento do Front-end (Angular)
   5.1 Ajustes na Classe Livro

Arquivo: src/app/livro.ts

codigo alterado para string

Inicialização com texto vazio

5.2 Serviço ControleLivrosService

Arquivo: src/app/controle-livros.service.ts

Alterações:

Constante baseURL = "http://localhost:3030/livros"

Criação de LivroMongo para compatibilidade

Remoção do vetor antigo de livros

Métodos assíncronos usando fetch:

Métodos implementados:

obterLivros() → GET

incluir(livro) → POST

excluir(codigo) → DELETE

5.3 Componente LivroLista

Arquivo: livro-lista.component.ts

ngOnInit modificado para usar chamada assíncrona

Após excluir, recarrega a lista dentro do .then()

codigo agora é string

5.4 Componente LivroDados

Arquivo: livro-dados.component.ts

Ao incluir, navegar para "/lista" somente após finalização com .then()

6. Como Executar o Projeto
   Back-end
   cd backend
   npm install
   npm start



Servidor disponível em:
http://localhost:3030/livros

Front-end Angular
cd frontend
npm install
ng serve



Acessar em:
http://localhost:4200

7. Resultados Esperados

API funcional com operações CRUD básicas.

Front-end Angular consumindo a API corretamente.

Integração perfeita back-end ↔ front-end.

Código organizado, limpo e coerente.

