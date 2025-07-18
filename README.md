# Projeto de E-commerce Interativo com Angular

![Capa do Projeto](https://i.imgur.com/isA0uJb.png)

## 📄 Sobre o Projeto

Este projeto é uma interface de e-commerce (ou cardápio digital) desenvolvida como um exercício prático para aprofundar conhecimentos em **Angular**. O objetivo foi construir uma aplicação de página única (SPA) dinâmica e reativa, simulando um ambiente de produção com consumo de API, gerenciamento de estado e componentização.

A aplicação permite visualizar produtos, categorizá-los, e possui um sistema de "favoritos" funcional, onde o estado é compartilhado entre diferentes componentes em tempo real.

---

## ✨ Funcionalidades Principais

* **Listagem Dinâmica de Produtos:** Os produtos são carregados a partir de uma API.
* **Sistema de Favoritos:** O usuário pode adicionar e remover produtos de uma lista de favoritos.
* **Gerenciamento de Estado Reativo:** A interface é atualizada automaticamente em diferentes componentes (como a contagem na navbar e o estilo do botão no card) quando um item é favoritado, utilizando serviços e RxJS.
* **Filtragem de Visualização:** É possível alternar a visualização na página principal para mostrar todos os produtos ou apenas os favoritados.
* **Simulação de Back-end:** Utiliza `json-server` para simular uma API RESTful, permitindo que o front-end realize operações HTTP (`GET`, `POST`, `DELETE`) de forma assíncrona.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

* **Front-end:**
    * [Angular](https://angular.io/)
    * [TypeScript](https://www.typescriptlang.org/)
    * [RxJS](https://rxjs.dev/)
    * HTML5 & CSS3

* **Back-end (Simulação):**
    * [Node.js](https://nodejs.org/en/)
    * [json-server](https://github.com/typicode/json-server)

* **Ferramentas:**
    * [Git](https://git-scm.com/) & [GitHub](https://github.com/)
    * [Angular CLI](https://cli.angular.io/)

---

## 🔗 Deploy

Você pode visualizar o projeto em funcionamento através deste link:

➡️ **[Acesse a demonstração ao vivo](https://seu-link-de-deploy.com)**

*(Substitua `https://seu-link-de-deploy.com` pelo link real do seu deploy no Vercel, Netlify, GitHub Pages, etc.)*

---

## ⚙️ Como Executar o Projeto Localmente

Siga os passos abaixo para rodar o projeto na sua máquina.

### Pré-requisitos

Antes de começar, você vai precisar ter as seguintes ferramentas instaladas:
* [Node.js](https://nodejs.org/en/) (que inclui o npm)
* [Angular CLI](https://cli.angular.io/) (`npm install -g @angular/cli`)

### Rodando o Projeto

```bash
# 1. Clone este repositório
$ git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)

# 2. Acesse a pasta do projeto
$ cd seu-repositorio

# 3. Instale as dependências
$ npm install

# 4. Inicie a API fake com json-server
# (Este comando assiste o arquivo 'db.json' na porta 3000)
# Se você criou um script no package.json, pode ser 'npm run api'
$ json-server --watch db.json

# 5. Em um novo terminal, inicie a aplicação Angular
$ ng serve

# 6. Acesse a aplicação no seu navegador
# A aplicação estará disponível em http://localhost:4200/
