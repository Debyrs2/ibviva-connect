# Landing Page — Igreja Batista Viva em Piedade (IBVIVA)

Página única, moderna e acolhedora, em azul + amarelo (cores da logo), com tema claro/escuro, três idiomas (PT-BR, EN, ES) e animações leves.

## Seções

1. **Header fixo** — logo oficial, menu com âncoras (Sobre, Mural, Localização, Contato), seletor PT/EN/ES, botão claro/escuro. No celular: menu hambúrguer.
2. **Hero** — montagem em loop das fotos reais da igreja (zoom/parallax suave, tipo Ken Burns) com overlay azul para legibilidade, nome da igreja, frase de boas-vindas e botões "Conheça-nos" e "Como chegar". Primeira foto entra como imagem estática (fallback imediato).
3. **Sobre** — texto institucional genérico e caloroso (missão, valores em linguagem simples), marcado como conteúdo editável.
4. **Mural de fotos** — grid responsivo (3 colunas desktop / 2 tablet / 1 coluna com carrossel no celular), tratamento visual uniforme, hover suave e legendas curtas com frases inspiradoras leves. Clique abre a foto ampliada.
5. **Localização** — endereço em texto + link para o Google Maps (link exato fornecido), mapa incorporado e horários de culto como placeholders editáveis (a definir).
6. **Contato** — cards destacados: e-mail (`mailto:Igrejab.viva@gmail.com`) e os dois WhatsApp com mensagem pré-preenchida traduzida conforme o idioma ativo.
7. **Redes sociais** — Instagram, Facebook e YouTube como "IBVIVA", abrindo em nova aba.
8. **Footer** — nome, endereço resumido, redes, contato e copyright.

## Design

- Paleta derivada da logo: azul primário, amarelo de acento para botões/ícones; bom contraste nos dois temas.
- Tipografia moderna e legível (display + texto), muito espaço livre, poucos elementos por vez.
- Animações: scroll reveal (fade/slide-up), micro-interações de hover, parallax sutil no Hero, transição suave ao trocar de tema, carrossel com fade.
- Mobile-first, com breakpoints desktop / tablet / celular; botões de WhatsApp com área de toque generosa.

## Detalhes técnicos

- Rota única em `src/routes/index.tsx`, seções em componentes próprios (`src/components/sections/*`).
- Tokens de cor (azul/amarelo, claro e escuro) definidos em `src/styles.css` via `@theme inline`; nenhuma cor fixa nos componentes.
- Tema: contexto React com classe `.dark` no `<html>` e persistência em `localStorage` (aplicada após hidratação para evitar mismatch).
- Idiomas: dicionário próprio em `src/i18n/` (pt/en/es) + contexto com seletor; sem dependência externa. Mensagem do WhatsApp codificada por idioma.
- Logo e fotos publicadas como Lovable Assets (ponteiros `.asset.json`), sem binários no repositório.
- Animações via CSS/Tailwind e `IntersectionObserver` (sem bibliotecas pesadas); respeitar `prefers-reduced-motion`.
- SEO: `head()` da rota com título, descrição, og/twitter e JSON-LD de igreja local.

## Fora do escopo

Sem backend, formulário de contato ou banco de dados — o contato acontece por WhatsApp, e-mail e redes sociais.
