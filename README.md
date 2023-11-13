# Repositório de exemplo de implementação dos conceitos de Autenticação I.

O código final refatorado está nas branchs respectivas:

-   implementacao-uuid
-   implementacao-dotenv
-   implementacao-jwt

## Índice

-   [UUID](#uuid)
-   [dotenv](#dotenv)
-   [Json Web Token (JWT)](#json-web-token-jwt)

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

## Json Web Token (JWT)

### Instalação

```bash
npm install jsonwebtoken
```

Tipagem

```bash
npm install -D @types/jsonwebtoken
```

### Configurações

`services.TokenManager.ts`

```ts
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { TokenPayload } from '../models/User';

dotenv.config();

// esse enum pode ser alocado para outro arquivo
// export enum USER_ROLES {
//     NORMAL = "NORMAL",
//     ADMIN = "ADMIN"
// }

// essa interface também pode ser alocada para outro arquivo
// TokenPayload -> É objeto que guarda as informações do token
// export interface TokenPayload {
//     id: string,
// 		name: string,
//     role: USER_ROLES
// }

export class TokenManager {
    // converte o objeto de dados (payload) para um token string
    public createToken = (payload: TokenPayload): string => {
        const token = jwt.sign(payload, process.env.JWT_KEY as string, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });

        return token;
    };

    // valida e converte o token string para um objeto de dados (payload)
    public getPayload = (token: string): TokenPayload | null => {
        try {
            const payload = jwt.verify(token, process.env.JWT_KEY as string);

            return payload as TokenPayload;

            // se a validação falhar, um erro é disparado pelo jsonwebtoken
            // nós pegamos o erro aqui e retornamos null para a Business saber que falhou
        } catch (error) {
            return null;
        }
    };
}
```
