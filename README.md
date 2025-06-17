# Sistema de Delivery - FatsFood

## 📌 Sobre o Projeto

**FatsFood** é uma plataforma de delivery desenvolvida para proporcionar uma experiência moderna e eficiente tanto para clientes realizarem pedidos de refeições quanto para restaurantes gerenciarem seus pedidos e cardápio.

Este repositório contém o código-fonte completo do sistema, incluindo **frontend**, **backend**, scripts de banco de dados e os protótipos visuais da aplicação. O sistema foi projetado com foco em usabilidade, hierarquia visual e acessibilidade, seguindo as 10 heurísticas de usabilidade de Nielsen.

---

## 🎯 Objetivos desta Fase

- Implementar a comunicação entre frontend e backend via API RESTful
- Realizar o cadastro, edição e exclusão de produtos, pedidos e usuários
- Garantir a autenticação e autorização via JWT
- Oferecer um fluxo de compra completo com gerenciamento de carrinho de compras
- Prover um backend que automaticamente cria e popula o banco de dados na inicialização

---

## 🚀 Tecnologias Utilizadas

### Frontend
- **React.js**
  - Gerenciamento de estado com Context API (usuário e carrinho)
  - React-Bootstrap para estrutura e responsividade
  - CSS customizado para estilos adicionais

### Backend
- **Node.js + Express.js**
  - API RESTful
  - Autenticação via JWT
  - Inicialização automática do banco SQLite

### Banco de Dados
- **SQLite3**

### Ferramentas Auxiliares
- bcrypt, jsonwebtoken, dotenv, cors

---

## 🗂️ Estrutura do Projeto

```
/ (raiz do repositório)
│
├── relatorio/         # Relatórios da disciplina (PDFs, documentos)
│
├── src/               # Código-fonte da aplicação
│   ├── backend/       # Backend Node.js + Express
│   │   ├── database.sqlite  # Banco de dados SQLite gerado automaticamente
│   │   ├── init.js    # Inicializa e popula o banco
│   │   ├── schema.sql # Criação das tabelas
│   │   ├── seed.sql   # Inserção de dados iniciais
│   │   ├── controllers/  # Controllers da API
│   │   ├── routes/    # Rotas da API
│   │   └── package.json  # Dependências do backend
│   │
│   └── frontend/      # Frontend React.js
│       ├── public/    # Arquivos estáticos
│       ├── src/       # Código React (componentes, páginas, contextos)
│       └── package.json  # Dependências do frontend
│
├── video/             # Vídeo de apresentação
│   └── apresentacao.mp4
│
└── README.md          # Este arquivo
```

---

## 💾 Instalação e Execução

1. Clone o repositório:
   ```bash
   git clone <link-do-repositorio>
   cd Projeto-A3-Delivery
   ```

### Backend
```bash
cd src/backend
npm install
npm run dev
```
⚠️ O backend será iniciado na porta 3001 e criará automaticamente o banco `database.sqlite` com dados iniciais (3 restaurantes, 3 modos de pagamento, 10 produtos).

### Frontend
```bash
cd ../frontend
npm install
npm start
```
⚠️ O frontend será iniciado na porta 3000.

🔄 Recomendado abrir dois terminais separados para rodar backend e frontend simultaneamente.

ℹ️ **Observação:**  
Para reiniciar o banco (zerar dados), basta excluir o arquivo `database.sqlite` e rodar novamente `npm run dev`.

---

## 🎞️ Demonstração em Vídeo

O vídeo de apresentação está disponível na pasta `/video` e também no YouTube:  
🔗 [Assistir no YouTube](https://youtu.be/2GxXm4CRpUI)

---

## 🖌️ Protótipos

### Wireframes (baixa fidelidade)
🔗 [Acessar no Canva](https://www.canva.com/design/DAGmm5mhsjc/ZGqg_pBwYIOIDuPJFvfmCA/edit?utm_content=DAGmm5mhsjc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

### Protótipo de Alta Fidelidade
🔗 [Acessar no Figma](https://www.figma.com/design/bsLVa3BYkOIievNeNs56Tw/Projeto-A3?node-id=0-1&p=f&t=5jUqpojekMGWtJf1-0)

---

## 👥 Integrantes

- Allan Lucas de Jesus Nascimento / 12725157323
- Vinicius Bitencourt Assis / 12724129830
- Rebert da Silva Azevedo / 1272320687
- Ana Beatriz Santos da Silva / 12724220932
- Caio Portugal de Oliveira / 12725168958

---

## 🏷️ Tags de Entrega

`EntregaP1A3`: Primeira entrega (Protótipos, Relatório)  
`EntregaFinalA3`: Entrega final completa (Frontend, Backend, Banco de Dados, Relatório, Vídeo)