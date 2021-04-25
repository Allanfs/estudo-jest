# estudo-jest

## Configuração

Inicialmente o vscode não vai ter o intellisense do Jest configurado, por isso é necessário usar a dependencia de tipo `@types/jest`. Pode ser instalado globalmente, mas aqui instalei apenas para o projeto.

## Execução

```bash
# para rodar todos os testes
npm run test

# para rodar os testes de uma pasta específica, nesse caso: matchers
npm run test matchers
```

## Testes

1. testar script js que é importado no HTML, fazendo uso de jQuery ([em dom](main/dom)) usando [Rewire](https://github.com/jhnns/rewire).