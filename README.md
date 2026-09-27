#  V.Medeiros.E — Software Engineering Portfolio

<div align="center">

![React](https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite%208-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS%20v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

<p align="center">
  <strong>Plataforma web minimalista, veloz e acessível construída para demonstrar maturidade técnica em engenharia de software e interfaces modernas.</strong>
</p>

</div>

---

##  1. Visão Geral & Propósito

Este portfólio não foi concebido como uma simples página de apresentação curricular estática, mas como **um produto de software real**. O objetivo primordial é refletir a mentalidade de engenharia de software aplicada à web moderna: performance extrema, tipografia disciplinada, estética técnica inspirada em ambientes de linha de comando (*CLI*) e separação estrita de responsabilidades.

O propósito central da plataforma é unificar sob uma mesma identidade técnica três pilares complementares de atuação:

1. **Desenvolvimento Web Moderno (Core):** Interfaces reativas, componibilização robusta, otimização de renderização e estado desacoplado.
2. **Mentalidade de Cibersegurança (Security by Design):** Aplicação de princípios defensivos e sanitização, compreensão dos vetores de ataque modernos (OWASP) e tratamento rigoroso de dados e requisições.
3. **Engenharia de Sistemas & Lógica (Game Development & Labs):** Uso de prototipagem em tempo real, máquinas de estado, loops determinísticos e simulação matemática como catalisadores para a resolução de problemas complexos de software.

---

##  2. Arquitetura de Software & Decisões de Projeto

A arquitetura do projeto prioriza manutenibilidade, extensibilidade e tempo de carregamento (*Time to Interactive* quase instantâneo):

```
┌────────────────────────────────────────────────────────┐
│                   Apresentação (UI)                    │
│   Navbar | Hero (Terminal) | Skills | Showcase | Labs   │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│              Componentes Atômicos & UI Core            │
│   CardShell | ExpandableText | SkillIcon | ExtLink     │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│            Camada de Domínio / Dados Estáticos         │
│   categories.js | profile.js | skills.js | labs.js     │
└────────────────────────────────────────────────────────┘
```

### Principais Decisões Arquiteturais:
- **Desacoplamento de Conteúdo e Visão (`src/data/`):** Todos os metadados, experiências, taxonomias, habilidades e registros são armazenados como estruturas de dados puras (JavaScript objects/arrays tipados conceitualmente). Nenhuma string ou conteúdo estático de negócio fica engessado nos componentes JSX, garantindo que atualizações na plataforma exijam zero refatoração de UI.
- **Renderização Orientada a Componentes Puros:** Componentes modulares com responsabilidades estritas e previsíveis, evitando prop drilling desnecessário.
- **Zero Dependências Pesadas:** O projeto dispensa bibliotecas monolíticas de animação (como framer-motion) ou carrosséis de terceiros inflados, mantendo o bundle minúsculo e utilizando recursos nativos do navegador (`IntersectionObserver`, transições CSS aceleradas por GPU, cálculo trigonométrico/modular de scroll).

---

##  3. Ferramentas & Tecnologias

| Camada | Tecnologia | Motivação & Benefício Técnico |
| :--- | :--- | :--- |
| **Core Framework** | **React 19** | Aproveitamento das melhorias no compilador e manipulação otimizada da árvore DOM virtual. |
| **Build & Tooling** | **Vite 8** | Servidor de desenvolvimento baseado em ESM nativo com HMR instantâneo e bundling de produção via Rollup com *tree-shaking* agressivo. |
| **Estilização** | **Tailwind CSS v4** | Utilização da nova engine nativa (`@tailwindcss/vite` + `@theme`), gerando CSS atômico sem dependência de pré-processadores lentos. |
| **Tipografia Técnica** | **Google Fonts** | Combinação de `Bricolage Grotesque` (display de impacto), `IBM Plex Sans` (legibilidade corporativa) e `IBM Plex Mono` (precisão de sintaxe). |
| **Iconografia** | **Lucide React & React Icons** | Conjunto coeso de ícones vetoriais em SVG renderizados como componentes leves e tree-shakeable. |
| **Hospedagem & CDN** | **Vercel** | Distribuição global em Edge Network com suporte nativo a compressão Brotli e HTTP/2. |

---

##  4. Engenharia de Recursos & Destaques de Implementação

###  Terminal Shell Interativo (Hero CLI)
- Simula a inicialização de um ambiente Unix interativo digitando comandos (`ls -p`, `cat status.txt`) com cálculo assíncrono de digitação caractere por caractere.
- Totalmente acessível: usuários com leitores de tela recebem a síntese direta via `sr-only`, e dispositivos com preferência de movimento reduzido (`prefers-reduced-motion`) ignoram o delay e visualizam o terminal pronto instantaneamente.

###  Motor de Prateleira Circular Infinita (360° Loop)
- Implementação matemática proprietária de carrossel de 2 linhas horizontais que gira continuamente em ambos os sentidos.
- Utiliza **normalização modular invisível**: quando o leitor ultrapassa as extremidades limítrofes da lista clonada (Set 1 ou Set 3), o ponteiro de rolagem `scrollLeft` é recalculado imperceptivelmente sem piscar a tela, criando uma sensação ininterrupta de profundidade.
- Suporte duplo nativo: rolagem suave via botões de passo, mouse drag contínuo (*grab/grabbing*) e suporte a *touch-swipe* com CSS scroll snap.

###  Mecanismo de Leitura Expansível (`ExpandableText`)
- Tratamento automático de truncamento de texto: conteúdos longos são delimitados por padrão para preservar o alinhamento visual dos cards e da grade de 2 linhas.
- Detecção dinâmica de overflow via `scrollHeight` + verificação heurística com medição sincronizada com o carregamento de fontes (`document.fonts.ready`).
- Permite expandir e recolher o conteúdo com um clique ou toque, com parada de propagação de eventos (`stopPropagation`) para não disparar acidentalmente o arraste horizontal do container pai.

###  Grid Modular Estilo Tetris (Skills & Categorias)
- Apresentação visual densa e balanceada dividida em 2 linhas com spans variáveis (`row-span-2`), permitindo que grupos de ferramentas de maior relevância ganhem destaque proporcional sem quebrar o ritmo da interface.
- Classificação cromática semântica inspirada em sintaxe de temas dark (Ciano para Web, Verde para Segurança, Roxo para Game Dev).

###  Rastreamento Reativo com `IntersectionObserver`
- Observabilidade de rolagem de custo zero para a CPU: a navegação fixa no topo destaca a seção ativa monitorando os pontos de entrada no viewport com margens calibradas (`rootMargin: -40% 0px -55% 0px`), eliminando gargalos de renderização decorrentes de listeners convencionais de `window.onscroll`.

---

##  5. Acessibilidade (A11y) & Usabilidade

- **Navegação Rápida por Teclado:** Implementação de botão acessível "Pular para o conteúdo" (*skip link*) no primeiro nível do DOM.
- **Gerenciamento de Foco e ARIA:** Uso estrito de `role="tablist"`, `role="tab"`, `role="tabpanel"`, além de propriedades `aria-selected`, `aria-controls` e `aria-expanded`.
- **Alto Contraste Estético:** Paleta baseada em Preto Puro (`#000000`) com cinzas intermediários (`#09090b`, `#141416`, `#27272a`) e textos brancos/cinza-claro, atendendo às diretrizes de contraste WCAG AA/AAA.
- **Suporte a Movimento Reduzido:** Todas as transições de entrada (`reveal`, `animate-rise`, `animate-blink`) respeitam `@media (prefers-reduced-motion: reduce)`.

---

##  6. Estrutura de Pastas

```
portfolio/
├── public/                 # Assets estáticos (favicons, manifestos)
├── src/
│   ├── assets/             # Mídias e vetores do projeto
│   ├── components/         # Camada de apresentação
│   │   ├── cards/          # Shells e variantes de cards modulares
│   │   │   ├── CardShell.jsx
│   │   │   ├── GameCard.jsx
│   │   │   ├── SecurityCard.jsx
│   │   │   └── WebCard.jsx
│   │   ├── About.jsx       # Narrativa de trajetória e objetivos
│   │   ├── Contact.jsx     # Seção de contato com cópia direta para clipboard
│   │   ├── ExpandableText.jsx # Engine de expansão e clamp acessível
│   │   ├── ExtLink.jsx     # Links externos protegidos (noopener/noreferrer)
│   │   ├── Footer.jsx      # Rodapé padronizado
│   │   ├── Hero.jsx        # Seção principal com chamada e status
│   │   ├── Labs.jsx        # Vitrine de experimentos rápidos
│   │   ├── Navbar.jsx      # Header responsivo com IntersectionObserver
│   │   ├── Projects.jsx    # Vitrine com prateleira circular infinita
│   │   ├── Reveal.jsx      # Efeito fade-in on-scroll via IO
│   │   ├── Section.jsx     # Layout padronizado de seção com título e container
│   │   ├── SkillIcon.jsx   # Mapeador declarativo de ícones
│   │   ├── Skills.jsx      # Prateleira modular Tetris de competências
│   │   ├── Tag.jsx         # Micro-badge de tecnologia
│   │   └── Terminal.jsx    # CLI simulada animada
│   ├── data/               # Camada isolada de dados puros
│   │   ├── categories.js   # Cores, temas e metadados das áreas
│   │   ├── labs.js         # Experimentos e protótipos de engenharia
│   │   ├── profile.js      # Informações de perfil, contato e bio
│   │   ├── projects.js     # Catálogo de repositórios e implementações
│   │   └── skills.js       # Taxonomia completa de linguagens e ferramentas
│   ├── App.jsx             # Montador principal da aplicação
│   ├── index.css           # Configuração de tema e diretivas Tailwind v4
│   └── main.jsx            # Ponto de entrada do React DOM
├── index.html              # HTML shell com meta-tags OpenGraph e pré-conexão de fontes
├── package.json            # Manifesto de dependências e scripts NPM
├── vercel.json             # Diretivas de build e output para Vercel
└── vite.config.js          # Configuração do bundler Vite + plugins
```

---

##  7. Acesso Online & Infraestrutura de Produção

A plataforma está disponível publicamente em ambiente de produção de alta disponibilidade:

<div align="center">

[![Acessar Portfólio Online](https://img.shields.io/badge/Acessar%20Portf%C3%B3lio-Online%20%E2%86%92-38bdf8?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-lmedeirosl.vercel.app)

*(Substitua pela sua URL final de produção da Vercel ou domínio personalizado)*

</div>

### Pipeline de Entrega Contínua (CI/CD):
- **Continuous Deployment:** Cada commit na branch `main` dispara um fluxo automatizado de integração e deploy via Vercel Edge Network.
- **Compilação e Otimização:** Processamento estático ultra-rápido com Rollup/Vite, aplicando *tree-shaking*, minificação agressiva e *cache-busting* automático em todos os assets da pasta `dist/`.
- **Roteamento SPA:** Configuração declarada via `vercel.json` para entrega instantânea e segura com headers otimizados.

---

##  8. Contato & Oportunidades

Estou disponível para posições como **Desenvolvedor Frontend / Full Stack**, com foco em aplicações modernas, código escalável e segurança por design.

- **LinkedIn:** [linkedin.com/in/lmedeirosl](https://www.linkedin.com/in/lmedeirosl)
- **GitHub:** [github.com/lmedeirosl](https://github.com/lmedeirosl)
- **E-mail:** [contatolmedeirosl@gmail.com](mailto:contatolmedeirosl@gmail.com)

---

## 📄 Licença

Este projeto é autoral e está registrado sob a [Licença MIT](LICENSE).

