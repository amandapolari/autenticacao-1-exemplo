# Repositório de exemplo de implementação dos conceitos de Autenticação I.

O código final refatorado está nas branchs respectivas:

-   implementacao-uuid
-   implementacao-dotenv
-   implementacao-jwt

## Índice

-   [UUID](#uuid)
-   [dotenv](#dotenv)

## UUID

### Instalação

Instalando a biblioteca uuid:

```bash
npm install uuid
```

Instalando sua tipagem:

```bash
npm install -D @types/uuid
```

### Configuração

`src/services/IdGenerator.ts`

```ts
import { v4 } from 'uuid';

export class IdGenerator {
    public generate = (): string => {
        return v4();
    };
}
```

## dotenv

Variáveis de ambiente (ENV)

Instalando:

```bash
npm install dotenv
```

Configurando

> Esse arquivo fica ao lado do `package.json` na raiz do projeto:

`.env`

```
PORT=3003

DB_FILE_PATH=./src/database/nome-do-arquivo.db

JWT_KEY=minha-senha-segura-bananinha
JWT_EXPIRES_IN=7d
```