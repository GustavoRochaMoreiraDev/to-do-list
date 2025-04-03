# Todo List

Este projeto é uma aplicação simples de lista de tarefas (To-Do List) desenvolvida com **React** e **TypeScript**. Ele permite adicionar, remover e marcar tarefas como concluídas, armazenando os dados no **LocalStorage** do navegador.

## 🚀 Funcionalidades

- 📌 Adicionar novas tarefas com um título.
- ✅ Marcar tarefas como concluídas.
- 🗑 Remover tarefas da lista.
- 🔍 Filtrar tarefas por status (Todas, Concluídas, Pendentes).
- 💾 Armazenamento persistente usando LocalStorage.

## 🛠 Tecnologias Utilizadas

- **React** com **TypeScript**
- **CSS** para estilização
- **LocalStorage** para persistência de dados

## 🗂 Estrutura do Projeto
```
📂 src
 ├── 📁 Components
 │   ├── 📄 Todo.tsx
 │   ├── 📄 TodoForm.tsx
 │   ├── 📄 Filter.tsx
 ├── 📁 Model
 │   ├── 📄 Task.ts
 ├── 📄 App.tsx
 ├── 📄 App.css
 ├── 📄 main.tsx
```

## 📦 Como os Dados são Armazenados?

As tarefas são armazenadas no **LocalStorage** do navegador, garantindo que mesmo ao recarregar a página, os dados não sejam perdidos.

- Ao adicionar uma nova tarefa, ela é salva no `localStorage.setItem("toDos", JSON.stringify(toDos));`.
- Ao remover ou marcar uma tarefa como concluída, a lista de tarefas é atualizada e salva novamente no LocalStorage.
- Ao carregar o aplicativo, as tarefas são recuperadas com `localStorage.getItem("toDos")`.

## 📌 Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd nome-do-projeto
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

O aplicativo estará disponível em `http://localhost:5173/` (ou outra porta conforme a configuração do Vite).

## 📜 Licença

Este projeto é de código aberto e pode ser modificado e distribuído livremente.

