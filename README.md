# Projeto de Autenticação com Next.js

Este é um projeto de autenticação desenvolvido com [Next.js](https://nextjs.org), utilizando `bcryptjs` para criptografia de senhas e APIs para cadastro e login de usuários.

## Instalação

1. **Clone o repositório**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_DIRETORIO>
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

## Configuração

Certifique-se de que o Node.js e o npm estão instalados corretamente. Você pode verificar as versões instaladas com:

```bash
node -v
npm -v
```

## Execução

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:3000`.

## Funcionalidades

- **Cadastro de Usuários**: Permite que novos usuários se cadastrem no sistema.
- **Login de Usuários**: Autentica usuários existentes com email e senha.
- **Criptografia de Senhas**: As senhas são criptografadas usando `bcryptjs` para maior segurança.

## Estrutura do Projeto

- `app/api/users/route.ts`: Gerencia o cadastro de usuários e armazena os dados em memória.
- `app/api/auth/authenticate/route.ts`: Lida com a autenticação de usuários, verificando email e senha.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
