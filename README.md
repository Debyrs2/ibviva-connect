# IBVIVA Connect

# Prompt: Construção de Landing Page — Igreja Batista Viva em Piedade (IBVIVA)

## Contexto e objetivo
Crie uma landing page (site de página única) institucional para a **Igreja Batista Viva em Piedade**, localizada em Jaboatão dos Guararapes. O objetivo é apresentar a igreja de forma acolhedora e moderna, facilitar o contato/localização e direcionar visitantes para as redes sociais oficiais. O público-alvo inclui membros da igreja, visitantes e pessoas buscando uma comunidade cristã na região — use linguagem simples, calorosa e acessível, sem jargões técnicos ou teológicos complexos.

## Identidade e conteúdo institucional
- **Nome:** Igreja Batista Viva em Piedade
- **Endereço:** Rua José Brás Moscow, 701, Piedade, Jaboatão dos Guararapes — PE
  - Exibir o endereço em texto E como link clicável que abre o Google Maps na localização exata:
    `https://www.google.com/maps/place/Igreja+Batista+Viva+em+Piedade/@-8.1793185,-34.9226492,17z/data=!3m1!4b1!4m6!3m5!1s0x7aae1039c76cc19:0xa3933143d2942a46!8m2!3d-8.1793238!4d-34.9200743!16s%2Fg%2F11frs2czzz?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D`
  - Sugestão: incluir também um mapa incorporado (embed) do Google Maps na seção de contato/localização, além do link.

## Redes sociais
Incluir ícones/botões claramente identificáveis (Instagram, Facebook, YouTube) que abrem em nova aba (`target="_blank"`, `rel="noopener noreferrer"`), todos com o nome de exibição **IBVIVA**:

| Rede | Link |
|---|---|
| Instagram | https://www.instagram.com/ibviva?igsh=OXgxOGx5a2R1ZjY2 |
| Facebook | https://www.facebook.com/share/1LoupHw9tb |
| YouTube | https://www.youtube.com/@ibviva2684 |

## Contato (e-mail e telefone/WhatsApp)
- **E-mail:** Igrejab.viva@gmail.com
  - Exibir como link `mailto:Igrejab.viva@gmail.com` para abrir o cliente de e-mail padrão do usuário.
- **Telefones:** +55 81 8892-2702 e +55 81 9929-6565
  - Cada número deve ser um **link direto para o WhatsApp** (não uma ligação telefônica comum), abrindo já a conversa com o número correspondente e uma mensagem pré-preenchida de boas-vindas, do tipo: *"Olá! Vim pelo site da igreja."*
  - Usar o formato `https://wa.me/<código do país><DDD><número>?text=<mensagem codificada>`, com o texto pré-preenchido codificado em URL:
    - Telefone 1: `https://wa.me/5581988922702?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20igreja`
    - Telefone 2: `https://wa.me/5581992296565?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20igreja`
  - Os links devem abrir em nova aba (`target="_blank"`, `rel="noopener noreferrer"`).
  - A mensagem pré-preenchida deve ser traduzida de acordo com o idioma selecionado na página (ex.: em inglês "Hello! I found you through the church website", em espanhol "¡Hola! Los encontré a través del sitio web de la iglesia"), mantendo o mesmo tom acolhedor.
  - Exibir os dois telefones de forma clara (ex.: com ícone de WhatsApp), deixando evidente que o clique leva direto ao chat.

## Estrutura sugerida da página
1. **Header fixo/sticky:** logo da igreja, menu de navegação (âncoras para as seções), seletor de idioma e seletor de tema (claro/escuro).
2. **Hero (seção principal):** vídeo de fundo ou em destaque (ver seção "Vídeo de abertura" abaixo), logo ou nome em destaque, uma frase de boas-vindas curta e acolhedora, e um call-to-action (ex.: "Conheça-nos", "Veja nossos cultos", "Como chegar").
3. **Sobre a igreja:** breve texto institucional (missão/valores em linguagem simples), gerado de forma genérica caso não haja texto fornecido — sinalizar como conteúdo editável.
4. **Mural de fotos:** galeria moderna (grid responsivo ou carrossel) com as fotos da igreja enviadas pelo cliente. Aplicar tratamento visual coerente (mesma paleta de cores, bordas/espaçamentos consistentes, efeitos sutis de hover/transição) para que as fotos "conversem" entre si e com a identidade visual da logo. Incluir pequenas legendas ou frases inspiradoras/insights cristãos curtos e leves ao lado ou sobrepostos às imagens, sem parecer pesado ou didático.
5. **Localização:** endereço com link para o Google Maps (e mapa incorporado, se possível), horários de culto (placeholder editável se não informado).
6. **Contato:** botões/cards destacados para e-mail e para os dois números de WhatsApp (conforme especificado na seção "Contato" acima).
7. **Redes sociais:** seção ou botões destacados com os links de Instagram, Facebook e YouTube.
8. **Footer:** nome da igreja, endereço resumido, ícones de redes sociais e contato, copyright.

## Vídeo de abertura
- Criar (ou gerar via IA de vídeo) um **vídeo curto** para a seção Hero, inspirado nas fotos reais da igreja enviadas pelo cliente, de forma que o vídeo tenha a mesma paleta de cores, ambientação e "clima" das fotos — transmitindo coerência visual entre vídeo, fotos e logo.
- Formato sugerido: vídeo de fundo em loop (autoplay, mudo, sem controles visíveis) atrás do texto de boas-vindas, ou um vídeo em destaque logo abaixo do Hero.
- Deve ser leve (otimizado para carregamento rápido) e ter uma versão estática (imagem de capa) como fallback para conexões lentas ou dispositivos que bloqueiem autoplay.
- Duração curta (poucos segundos, em loop) para não pesar a página nem distrair demais do conteúdo.

## Identidade visual
- Utilizar a **logo oficial da igreja** fornecida (não recriar ou estilizar de forma diferente).
  - **Descrição da logo:** uma cruz azul com contorno amarelo. Essa combinação de cores deve orientar a paleta cromática da página (azul como cor primária, amarelo como cor de destaque/acento para botões, ícones e elementos de chamada de atenção).
- Utilizar as **fotos enviadas** pelo cliente, mantendo tratamento visual consistente (cores, cortes, filtros leves) para que combinem entre si e com a logo.
- Definir uma paleta de cores derivada da logo (azul + amarelo), com bom contraste em ambos os temas (claro e escuro).
- Tipografia moderna, legível, acolhedora — evitar fontes muito formais/corporativas ou muito informais/infantis.
- Design responsivo, com layout adaptado para três breakpoints principais: **desktop/PC**, **tablet** e **celular** (mobile-first como base de desenvolvimento).

## Funcionalidades obrigatórias
1. **Alternância de tema (claro/escuro):**
   - Botão/switch visível e acessível no header.
   - Persistir a preferência do usuário durante a sessão.
   - Garantir contraste e legibilidade adequados em ambos os modos, incluindo sobre as fotos do mural.
2. **Suporte a múltiplos idiomas:**
   - Português (Brasil) como idioma padrão.
   - Inglês e Espanhol como opções adicionais.
   - Seletor de idioma visível no header (ex.: bandeiras ou sigla PT/EN/ES).
   - Todo o conteúdo textual (menus, títulos, textos institucionais, legendas, botões) deve ser traduzido nos três idiomas — nomes próprios (igreja, endereço, redes sociais) permanecem inalterados.

## Diretrizes de linguagem e tom
- Frases curtas, diretas e calorosas.
- Evitar termos técnicos, institucionais demais ou teológicos complexos.
- Tom convidativo, como se a igreja estivesse "conversando" com quem visita o site pela primeira vez.

## Estilo visual e animações
- Visual **moderno e simples/clean**: bastante espaço em branco (ou "espaço vazio" equivalente no modo escuro), poucos elementos por vez, foco no conteúdo (fotos, vídeo, textos curtos).
- Incluir **animações modernas e tecnológicas** que prendam a atenção sem exagerar, por exemplo:
  - Transições suaves de entrada (fade-in, slide-up) ao rolar a página (scroll reveal) para textos, fotos e cards.
  - Micro-interações em botões e links (hover com leve escala, brilho ou mudança de cor usando o amarelo de destaque).
  - Efeito parallax sutil na seção Hero ou entre seções.
  - Transição animada suave ao alternar entre tema claro e escuro.
  - Carrossel do mural de fotos com transições fluidas (fade ou slide) em vez de troca abrupta.
- Evitar excesso de animações simultâneas ou muito chamativas — o objetivo é transmitir modernidade e cuidado técnico, sem distrair do propósito principal (informar e acolher).
- Todas as animações devem ter desempenho leve e não comprometer o tempo de carregamento, especialmente em celulares.

## Responsividade
- Layout totalmente adaptável para três públicos de tela:
  - **Desktop/PC:** aproveitamento do espaço horizontal (ex.: grids de mural em várias colunas, menu horizontal completo).
  - **Tablet:** ajuste intermediário de colunas e espaçamentos, menu ainda visível ou em formato compacto.
  - **Celular:** menu tipo "hambúrguer", uma coluna para o mural (ou carrossel), botões de contato/WhatsApp bem visíveis e fáceis de tocar (área de toque adequada).
- Testar a legibilidade de textos, tamanho de botões e comportamento do vídeo de fundo em todos os tamanhos de tela.

## Entregável esperado
Página única (landing page), responsiva (PC, tablet e celular), com:
- Estrutura de seções descrita acima, incluindo vídeo de abertura inspirado nas fotos da igreja
- Alternância de tema claro/escuro funcional, com transição animada
- Seletor de idioma funcional (PT-BR, EN, ES), incluindo tradução da mensagem pré-preenchida do WhatsApp
- Links corretos e testados para Google Maps, Instagram, Facebook, YouTube, e-mail (mailto) e WhatsApp (wa.me) dos dois telefones
- Uso coerente da logo (cruz azul com contorno amarelo) e das fotos fornecidas na paleta de cores e no vídeo
- Animações modernas e leves (scroll reveal, micro-interações, parallax sutil, transições de tema e carrossel)

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0b4fc449-4425-4c58-91e9-4b9718e4f715).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
