<h1 align="center">
<br>
  <img src="https://github.com/isabelaaug/game_score/blob/master/assets/tela%201.png" alt="game_score">
<br>
<br>
GAME SCORE :basketball:
</h1>
<p align="center">Sua plataforma para registro de placares de basquete.</p>

> Status do Projeto: Em desenvolvimento. :warning: 

## Descrição do projeto :page_facing_up:

Game Score é um projeto desenvolvido para [Pública - Proway](http://publica.proway.com.br/).<br>
<p>
O projeto é um sistema que visa facilitar para atletas de basquete o acompanhamento de seus resultados durante a temporada de jogos.<br>
Nele é possível cadastrar o placar de todos os jogos de uma temporada e visualizar os resultados em destaques e quebras de recordes.
</p>

## Funcionalidades :gear:

- Cadastro de placar: pontuação e data do jogo
- Visualização da pontuação máxima e mínima da temporada
- Visualização de quantas vezes que os recordes máximo e mínimo foram quebrados
- Visualização de todos os placares registrados, ordenados por data e com opção de exclusão

## Linguagens, dependencias e libs utilizadas :books:

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [SQLite3](https://www.sqlite.org/index.html)
- [Knex](http://knexjs.org/)

## Como rodar a aplicação :arrow_forward:

- **Pré-requisitos**

  - **[Node.js](https://nodejs.org/en/)** instalado no computador
  - Um gerenciador de pacotes instalado como o **[Yarn](https://yarnpkg.com/)** ou **[NPM](https://www.npmjs.com/)**.

1. Faça um clone do repositório:

```sh
  $ git clone https://github.com/isabelaaug/game_score.git
```

2. Executando a Aplicação:

```sh
  # API (Back-end)
  $ cd server
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Configurando o banco de dados e criando as tabelas.
  $ yarn knex:migrate # ou npm run knex:migrate
```
```sh
  # Inicie a API
  $ yarn start # ou npm start
```
```sh
  # Aplicação web (Front-end)
  $ cd web
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
```
```sh
  # Inicie a aplicação web
  $ yarn start # ou npm start
```

## Desenvolvedores/Contribuintes :octocat:
Desenvolvido por Isabela A. de Oliveira. [Meu contato](https://www.linkedin.com/in/isabela-augusta-de-oliveira-8a50a8194/):blush: 
