# Repositório de exemplo de implementação dos conceitos de Autenticação I.

<!-- O código final refatorado está nas branchs respectivas:
- implementacao-uuid
- implementacao-dotenv
- implementacao-jwt -->

## Índice

-   [Instalação](#instalação)

## Instalação

Instalando a biblioteca uuid:

```bash
npm install uuid
```

Instalando sua tipagem:

```bash
npm install -D @types/uuid
```

## Configuração

`src/services/IdGenerator.ts`

```ts
import { v4 } from 'uuid';

export class IdGenerator {
    public generate = (): string => {
        return v4();
    };
}
```
