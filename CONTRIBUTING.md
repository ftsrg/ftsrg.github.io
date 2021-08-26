# Contributing to ftsrg-next

Ez a dokumentáció _nagyrészt_ magyarul íródik tekintettel a fejlesztők közös nyelvére és az egyszerűség kedvéért. / This documentation is written _mainly_ in Hungarian considering the main contributors' common language and for the sake of simplicity.

# TOC

- [Szoftveres követelmények](#szoftveres-követelmények)
- [Github pages](#github-pages)
- [A kódbázis](#a-kódbázis)
- [Funkcionalitások](#funkcionalitások)

## Szoftveres követelmények

- Node (v12.x.x or more)
- TypeScript
- Yarn (v1.22.x)
- VSCode (as recommended text editor)

Érdemes lehet tudni, hogy a Jest be van állítva a projektben mint tesztelési könyvtár, azonban tesztek nem íródtak, a lehetőség viszont adott.

### Installálás

1. Clone this repository to you machine. Open with recommended text editor, VSCode.
1. Copy `.env.example` to `.env.development` and `env.production`. // Jelenleg nem fontos, nem használt
1. Run `yarn install` to install dependencies.

### Usage

- Run `yarn dev` or `yarn start` to start development server.
- Run `yarn test` to run unit tests. Add `--watch` to watch for changes. // Jelenleg nincsenek tesztek
- Run `yarn type-check` to run type checker.
- Run `yarn analyze` to inspect JS bundle sizes.
- Run `yarn build` to build site for production.
- Run `yarn serve` to view production build.
- Run `yarn clean` to clear cached files.
- Run `yarn format` to prettify code.

## Github pages

Q: Mit tegyek, hogy a legújabb source kikerüljön a github pagesre is?
A: Semmit. A jelenleg használt workflow (deploy.yml) megfigyeli, van-e új commit a source branchen, és ha igen, akkor újradeployolja a source branchet a masterre. A Github Pages pedig a master branch tartalmát szolgálja ki az ftsrg.github.io oldalon (illetve a CNAME által adott domainen).

## A kódbázis

A lintelést szigorúan vesszük, ESLint és Prettier kerül használatba, ezek miatt ajánlott a VSCode használata. A lehető legkevesebbszer éljünk az `eslint-disable` kommentekkel, hagyjuk érvényesülni, és aszerint javítsuk kódunkat. Ha nem vagy biztos, hogy szép kódot írtál, használd a `yarn lint` parancsot, ami visszaadja a megoldandó gondokat. Természetesen nem tiltott az ESLint szabályok letiltása, de a lehető legkevesebbszer forduljunk ezen gyógyír felé.

Az scss-ek a `src/utils/scss` mappában laknak, ide kell új `_site-<akármi>` scss modulokat létrehozni, ha személyre szabnád az egyik komponensed. Azonban próbáljunk meg ragaszkodni a bootstrap 4.6 classjaihoz, ha paddingre van szükséged, használd a bootstrap által felajánlott paddingeket, csak utolsó esetben forduljunk az scss felé.

Jelenleg minden oldal komponenseinek (section-ök) saját gyűjtő mappája van. Ez nem kötelező, csak jól jött kiszervezni sectionökbe az egyes összetartozó részeket, hogy kisebb legyen a `src/pages` mappában a fájlok tartalma.

## Funkcionalitások

### Gatsby

Mit csinál a Gatsby? Lehetővé teszi különböző pluginok által a site szebbé, információdúsabbá és könnyebben maintainelhetőbbé válását, gatsby plugin van arra, hogy:

- blog posztok markdownból épüljenek fel // Még nem használt funkció
- yaml fájlokban tároljuk a tömbösíthető adatokat, és ne kelljen a html fában redundanciát okozni
- a SEO profibb legyen
- a képek lazy loadolhatók legyenek (gatsby-plugin-image)

#### Entitások

Jelenleg a `src/content` alatt lakik a page pure elszeparált adatként tárolt contentje.

Q: Új entitásra van szükség?
A: `gatsby-config.ts` fájlban adjunk hozzá egy újabb `gatsby-source-filesystem` forrást, majd `gatsby-transformer-yaml` pedig ebből tud majd GraphQL-en keresztül újabb lekérésekre [lehetőséget adni](https://www.gatsbyjs.com/plugins/gatsby-transformer-yaml/). Érdemes lehet ennek az új entitásnak saját propot felvenni, amivel majd a típusát passzolgathatod a komponenseknek és megszerezheted a GraphQL-lel: `src/utils/props` mappában hozz létre erre egy típust/interfészt.

Q: Képet hogy adok az entitásnak?
A: Ha képet is tartalmaz egy entitás, nézd meg pl. az `events` entitást, amiben a featuredImage egy dinamikusan szerzett kép. A képeket érdemes a content mappa images mappája alá tenni, ne a staticba. Így csak igény szerint fog letöltödni a kép.

#### Gatsby config

Lásd: `config` könyvtár a gyökérkönyvtárban. Itt lakik...

- a `gatsby-browser.tsx`
- a `gatsby-config.ts`
- a `gatsby-node.ts`
- és a `gatsby-ssr.tsx`

#### GatsbyLinks

Fontos lehet, hogy mivel a React Virtual DOMját használja a Gatsby, ezért használjuk az oldalon belülre vezető linkekhez a `gatsby` modul `Link` komponensét. [Tudnivalók itt](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/#reminder-use-link-only-for-internal-links).

### i18next

This starter assumes you don't want to generate a new page for every language but instead want to translate the interface only. If you're looking to generate new pages for each language, this may not be the starter you're looking for.

To deep link to a page in Hungarian add `?locale=hu` to the end of the URL. For English replace `hu` with `en`. Modify the query string key used along with other language settings in `src/lib/i18next.ts`.

A translation fájlok a `src/locales` alatt mindig legyenek a következőképp rendezve:

- Minden oldalnak saját json & ezen belül minden kulcs kezdődjön az oldal nevével.
- Nyugodtan használjunk hosszabb keychaineket (pl.: `home.competences.description.<ésígytovább>...`)
- Az általánosan használt kulcsokat tegyük a sima `translation.json`-ba
- Az új json-t ne felejtsd el beimportálni a `src/lib/i18next.ts` fájlban
