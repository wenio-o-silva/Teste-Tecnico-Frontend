# 💻 Frontend

Aplicação web desenvolvida com Next.js (App Router) para o teste técnico da O. O projeto consome a API do Strapi e gerencia o acesso através de autenticação JWT.

## 🚀 Tecnologias Utilizadas

- Next.js (Framework React)
- React (Biblioteca JS)
- CSS Modules (Estilização escopada e performática)
- Axios (Cliente HTTP para comunicação com API)
- Phosphor React (Biblioteca de ícones)
- JS Cookie (Gerenciamento de tokens de segurança)

## 📋 Pré-requisitos

- Node.js (v18 ou superior)
- O Backend (Strapi) deve estar rodando na porta 1337.

## ⚙️ Instalação

1. Acesse a pasta do projeto:
   ```bash
   cd frontend
Instale as dependências:

Bash
npm install
⚡ Como Rodar
Para iniciar o servidor de desenvolvimento:

Bash
npm run dev
Acesse no navegador: http://localhost:3000

Nota: Certifique-se de que o Backend está rodando (npm run develop na pasta backend), caso contrário o login falhará.

🔐 Funcionalidades Implementadas
1. Autenticação (Login)
Integração com a rota /auth/local do Strapi.

Armazenamento de Token JWT em Cookies Seguros.

Redirecionamento automático após sucesso no login.

2. Proteção de Rotas (Middleware)
O arquivo middleware.js protege as rotas do dashboard.

Se um usuário não autenticado tentar acessar /people, ele é redirecionado para o Login.

Se um usuário logado tentar acessar o Login, ele é redirecionado para o Dashboard.

3. Dashboard Dinâmico
Navbar: Identifica a rota ativa e destaca o link correspondente (People, Foods, Places).

Consumo de API: As páginas buscam dados reais do Strapi.

Logout: Funcionalidade para limpar a sessão e retornar ao início.
