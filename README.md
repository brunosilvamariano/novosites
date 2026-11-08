# Proteu

Template em React, TypeScript, GSAP e Tailwind que muda de identidade conforme o nicho: cores, fontes, textos, arte generativa e composição. O seletor no rodapé da tela troca tudo em tempo real.

## Como rodar

Requer Node 20.19 ou superior.

```bash
npm install
npm run dev
```

Para gerar a versão final: `npm run build` (saída em `dist/`).

## Estrutura

```
src/
├── main.tsx               Ponto de entrada
├── app/                   Composição da página e estado do nicho ativo
├── config/site.ts         Nicho padrão, seletor ligado ou não, ordem das seções
├── niches/                Um arquivo por nicho: tema, textos e ícones
├── sections/              Uma pasta por seção (componente + CSS)
│   └── registry.ts        Catálogo de seções disponíveis
├── components/
│   ├── layout/            Header, seletor de nichos, persianas, cursor
│   └── ui/                Peças reutilizáveis
├── art/
│   ├── LiveForm.tsx       Canvas da arte de abertura
│   ├── behaviors/         Uma arte generativa por arquivo
│   └── posters/           Pôsteres vetoriais de Works
├── hooks/                 useGsapScope, useFitText
├── lib/                   GSAP, carregamento de fontes, tema, preferências de movimento
└── styles/                Tailwind, tokens e estilos globais
```

## Entregar para um cliente

1. Em `src/config/site.ts`, defina `defaultNiche` e use `showNicheDock: false`.
2. No arquivo do nicho, troque marca, WhatsApp, e-mail, endereço e todos os textos. Os dados atuais são fictícios.
3. Em `Works`, substitua `<Poster />` por fotos reais do cliente quando houver.
4. Atualize `<title>` e a descrição em `index.html`.

## Criar um nicho

1. Copie um arquivo de `src/niches/` e altere tema e textos.
2. Acrescente o id em `NicheId` (`src/niches/types.ts`) e registre o nicho em `src/niches/index.ts`.
3. Para arte própria, crie um arquivo em `src/art/behaviors/`, registre em `behaviors/index.ts`, acrescente o tipo em `ArtKind` e crie a composição em `art/posters/Poster.tsx`.

As fontes vêm do Google Fonts: copie o trecho `family=...` para `fontsQuery`. O título se ajusta sozinho à largura de qualquer fonte.

## Reordenar ou remover seções

Edite a lista `sections` em `src/config/site.ts`. Para uma seção nova, crie a pasta em `src/sections/` e registre em `sections/registry.ts`.

## Licenças

GSAP, incluindo ScrollTrigger, é gratuito também para uso comercial. Confira as condições em gsap.com antes de publicar.
