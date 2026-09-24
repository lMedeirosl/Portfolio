# Portfólio: Web, Cybersecurity e Game Dev

React + Vite + Tailwind CSS v4. Sem backend, pronto para a Vercel.

## Rodar localmente

```bash
npm install
npm run dev
```

## Personalizar

Todo o conteúdo fica em `src/data`. Não é preciso mexer nos componentes.

| Arquivo | O que editar |
| --- | --- |
| `profile.js` | Nome, headline, e-mail, GitHub, LinkedIn, texto do Sobre e trajetória |
| `projects.js` | Projetos de Web, Cybersecurity e Game Dev |
| `labs.js` | Experimentos da seção Labs |
| `skills.js` | Linguagens, ferramentas e categorias de skills |

Troque também o título e a descrição em `index.html`.

Para adicionar um ícone novo de skill, importe-o em `src/components/SkillIcon.jsx`
e registre a chave no objeto `icons`. Sem ícone registrado, aparece um ícone genérico.

As cores de cada área (web, sec, game) ficam em `src/index.css`, no bloco `@theme`.

## Deploy na Vercel

1. Suba o projeto para um repositório no GitHub.
2. Em vercel.com, escolha **Add New > Project** e importe o repositório.
3. A Vercel detecta o Vite sozinha (`npm run build`, saída em `dist`). Clique em **Deploy**.

Pela CLI: `npm i -g vercel` e depois `vercel` na pasta do projeto.

## Estrutura

```
src/
  components/   Hero, Projects, Labs, About, Skills, Contact...
    cards/      Cards de cada área de projeto
  data/         Todo o conteúdo editável
  assets/       Imagens e arquivos estáticos
public/         favicon
```
