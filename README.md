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

## Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto para configurar as variáveis de ambiente necessárias.

Exemplo de conteúdo do `.env`:

```
# Exemplo de configuração
NEXTAUTH_URL=seu_database_url // no caso o http://localhost:3000/
NEXTAUTH_SECRET=sua_chave_secreta // pode ser uma chave gerada pelo: openssl rand -base64 32
```

Certifique-se de substituir os valores de exemplo pelas suas configurações reais.

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
