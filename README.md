# Operação Danilo — Modular Layout V1

Base modular em HTML, CSS e JavaScript puro, já com layout claro/mobile-first aplicado.

## Rodar local

Como usa ES6 modules, rode com servidor local:

```bash
python -m http.server 5500
```

Abra:

```text
http://localhost:5500
```

## Estrutura

```text
/index.html
/src/css/base.css
/src/css/layout.css
/src/css/components.css
/src/css/pages.css
/src/js/app.js
/src/js/router.js
/src/js/store.js
/src/js/storage.js
/src/js/formatters.js
/src/js/calculations.js
/src/js/seed.js
/src/js/components/*
/src/js/pages/*
```

## Próximas tarefas para o Codex

1. Criar formulários para atualizar caixa e produção.
2. Criar checkpoint operacional.
3. Criar tela de histórico diário.
4. Criar projeções por semana/mês.
5. Criar manifest.json e service-worker.js para PWA.
6. Criar importação/restauração de backup.
7. Criar filtros por categoria nas contas.
8. Criar edição de contas no próprio app.
