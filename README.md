# ftsrg-next

Base code copied from [gatsby-starter-i18n-react-i18next](https://code.habd.as/comfusion/gatsby-starter-i18n-react-i18next), special thanks to Josh Habdas.

Introducing the portfolio and blog of the Critical Systems Research Group - better known as Ftsrg.

Table of contents:

- [Contributing](#contributing)
- [Tech Stack](#readmes)
- [Good to know](#good-to-know)
- [License](#license)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). It's written in Hungarian.

## Tech Stack

- [Gatsby](https://www.gatsbyjs.org/) - Gatsby configuration written in TypeScript
- [Jest](https://jestjs.io/) testing framework using [Testing Library](https://testing-library.com/) with integrated [test-utils](https://testing-library.com/docs/react-testing-library/setup#configuring-jest-with-test-utils) and example tests.
  - No test written yet, this is optional for the project.
- Functional [React](https://reactjs.org/) component examples written in [TypeScript](https://www.typescriptlang.org/) (strict) and using [React Hooks](https://reactjs.org/docs/hooks-reference.html) API.
- UI provided by bootstrap, using the [React Bootstrap](https://react-bootstrap.github.io/) components.
- Internationalization with [react-i18next](https://react.i18next.com/) and button to toggle between English and Hungarian.
- Automatic, in-browser language detection via integrated [i18next plugin](https://github.com/i18next/i18next-browser-languageDetector).
- SEO component with Open Graph images, robots meta, keywords and Canonical URLs.

## Good to know

### Browsers

[By default](https://www.gatsbyjs.org/docs/browser-support/) Gatsby supports [these browsers](https://browserl.ist/?q=%22%3E0.25%25%22%2C+%22not+dead%22). This starter customizes the Gatsby defaults and uses [the defaults](https://browserl.ist/?q=defaults) provided by [Browserslist](https://github.com/browserslist/browserslist) instead. Remove `.browsersrc` if you wish to restore the default Gatsby settings. Note this will affect the size of your bundled JavaScipt files. See [Performance](#performance) for more information on bundle sizes.

### Performance

Gatsby uses server-side rendering to generate static HTML files during its build process. In addition to HTML files Gatsby will also generate a number of JavaScript bundles loaded at runtime to perform [Hijax](https://domscripting.com/blog/display/41). As more code is added to your site it may become bloated which can impede performance and damage search rankings. Here are some tips to help keep your site running fast:

- Decrease the size of your images with [gatsby-image](https://www.gatsbyjs.org/docs/using-gatsby-image/) and use SVG graphics whenever possible.
- Always use WOFF2 for web fonts. Create WOFF2 files from TTF files using [woff2](https://github.com/google/woff2) compress.
- Adjust supported browsers to decrease JS bundle sizes [as noted](https://www.gatsbyjs.org/docs/browser-support/) in the Gatsby docs.
- Use the [Offline plugin](https://www.gatsbyjs.org/packages/gatsby-plugin-offline/) to more heavily cache in-browser page resources.
- Try the [Bundle Analyzer](https://www.gatsbyjs.org/packages/gatsby-plugin-webpack-bundle-analyser-v2/) Gatsby plug-in as an alternative to the included `analyze` script.
- Use [SpeedTracker](https://habd.as/post/monitor-pwa-website-performance/) to monitor site performance over time.

Don't optimize too early or you may end up optimizing things you decide you don't need later on.

### SEO

Unlike most starters a `keywords` field is provided in the `siteMetadata.keywords` object in `config/gatsby-config.ts`. While some search engines may not utilize this field to curb keyword stuffing it's metadata and you may find other uses for it. Keywords may be overridden on a page-by-page basis if desired. To do so pass the `keywords` prop to the `SEO` component in your TSX files like:

```jsx
const PageSpecificKeywords = () => (
  <SEO keywords={['foo', 'bar', 'baz', 'bat']}>
)
```

To instruct search engines and other spiders not to crawl the website add `noindex, nofollow` to `siteMetadata.robots` in `config/gatsby-config.ts`. You may wish to do this if, for instance, you're testing your production deployment and do yet wish to appear in search engines. Like `keywords` this may be set on a page-by-page basis. Use it to prevent legal pages and other low-value pages from appearing in search engines.

### Environment

An empty `.env.example` file has been left in this project. This is where environment variables keys and sample values can be documented and checked in along with the source code. Add actual key names used inside but either leave their values blank or use phony values those keys. **Do not place actual key values in this file.** Those should be kept outside of source control.

See [Environment Variables](https://www.gatsbyjs.org/docs/environment-variables/) in the Gatsby docs for more information.

## License

Copyright © 2020 Josh Habdas <jhabdas@protonmail.com>

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.

This work incorporates fonts covered under copyright by Adobe and Sebastian Kosch. See the fonts directory for copyright and permissions notices.
