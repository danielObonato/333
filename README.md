# Site do Curso PCP (Planejamento e Controle da Produção)

Este pacote traz um site estático, simples de editar. Você pode abrir o `index.html` no navegador e publicar em qualquer hospedagem (GitHub Pages, Netlify, Vercel, etc.).

## Estrutura
```
pcp-curso-site/
├─ index.html      # página principal
├─ styles.css      # estilos (altere as variáveis no topo para mudar cores)
├─ script.js       # interação (abas, menu, tema, formulário)
└─ assets/
   ├─ pcp-logo.svg
   ├─ hero-illustration.svg
   └─ favicon.svg
```

## Como editar
- **Textos**: edite diretamente no `index.html`. Procure por seções com ids `#sobre`, `#abas`, `#visitas`, `#faq` e `#inscricao`.
- **Abas**: dentro de `#abas`, duplique um botão `.tab` e um `.tab-panel` correspondente. Mantenha os IDs consistentes (`aria-controls`/`id`).
- **Cores**: no topo do `styles.css`, altere as variáveis `--primary`, `--bg`, etc.
- **Logo**: substitua `assets/pcp-logo.svg` por seu arquivo (mesmo nome) ou ajuste o `src` no HTML.
- **Formulário**: hoje apenas simula envio. Para integrar com WhatsApp/Email/serviço, altere a função `handleSubmit` no `script.js`.

## Publicação rápida
1. Hospedagem estática (ex.: Netlify): arraste a pasta inteira ou o ZIP.
2. GitHub Pages: crie um repositório, suba os arquivos e habilite Pages.
3. Vercel: importe o repositório, framework "Other".

---

Feito para ser leve, responsivo e acessível. Boa edição! ✨
