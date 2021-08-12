# Contributing to ftsrg-next

Ez a dokumentáció magyarul íródik tekintettel a fejlesztők közös nyelvére és az egyszerűség kedvéért. / This documentation is written in Hungarian considering the main contributors' common language and for the sake of simplicity.

# TOC

- [Szoftveres követelmények](#szoftveres-kovetelmenyek)
- [Github pages](#github-pages)
- [A kódbázis](#a-kodbazis)
- [Funkcionalitások](#funkcionalitasok)

## Szoftveres követelmények

- Node (v12 or more)
- TypeScript
- Yarn
- VSCode (as recommended text editor)

Érdemes lehet tudni, hogy a Jest be van állítva a projektben mint tesztelési könyvtár, azonban tesztek nem íródtak, a lehetőség viszont adott.

### Installation

1. Clone this repository to you machine. Recommended text editor is VSCode.
1. Copy `.env.example` to `.env.development` and `env.production`.
1. Run `yarn` to install dependencies.

### Usage

- Run `yarn dev` or `yarn start` to start development server.
- Run `yarn test` to run unit tests. Add `--watch` to watch for changes.
- Run `yarn type-check` to run type checker.
- Run `yarn analyze` to inspect JS bundle sizes.
- Run `yarn build` to build site for production.
- Run `yarn serve` to view production build.
- Run `yarn clean` to clear cached files.
- Run `yarn format` to prettify code.

## Github pages

Mit tegyek, hogy a legújabb master kikerüljön a github pagesre is?

#TODO

## A kódbázis

#TODO

## Funkcionalitások

### Gatsby

Mit csinál a Gatsby?

#### Gatsby config

Lásd: `config` könyvtár a gyökérkönyvtárban. Itt lakik...

- a `gatsby-browser.tsx`:
- a `gatsby-config.tsx`:
- a `gatsby-node.tsx`:
- és a `gatsby-ssr.tsx`:

#### GatsbyLinks

#TODO

### i18next

#TODO

This starter assumes you don't want to generate a new page for every language but instead want to translate the interface only. If you're looking to generate new pages for each language, this may not be the starter you're looking for.

To deep link to a page in Hungarian add `?locale=hu` to the end of the URL. For English replace `hu` with `en`. Modify the query string key used along with other language settings in `src/lib/i18next.ts`.
