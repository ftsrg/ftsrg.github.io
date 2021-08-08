/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
/*!
 * Copyright (C) 2020  Josh Habdas <jhabdas@protonmail.com>
 *
 * This file is part of gatsby-starter-i18n-react-i18next.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import * as Gatsby from 'gatsby'
import React from 'react'
import { render, waitFor } from '~utils/test-utils'
import SEO from '../SEO'

const getMetaTagByName = (metaName: string) => {
  const metaTags = document.querySelectorAll('head meta[name]')
  for (const [_, el] of metaTags.entries()) {
    if (el.getAttribute('name') === metaName) {
      return el.getAttribute('content')
    }
  }
}

const getMetaTagByProperty = (metaProperty: string) => {
  const metaTags = document.querySelectorAll('head meta[property]')
  for (const [_, el] of metaTags.entries()) {
    if (el.getAttribute('property') === metaProperty) {
      return el.getAttribute('content')
    }
  }
}

const getLinkTagByRel = (linkRel: string) => {
  const metaTags = document.querySelectorAll('head link[rel]')
  for (const [_, el] of metaTags.entries()) {
    if (el.getAttribute('rel') === linkRel) {
      return el.getAttribute('href')
    }
  }
}

const getTitle = () => {
  return document.querySelector('title')?.textContent
}

beforeAll(() => {
  const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')
  useStaticQuery.mockImplementation(() => ({
    site: {
      siteMetadata: {
        baseUrl: 'https://site.example/',
        lang: 'en-US',
        title: 'Sample Title',
        titleTemplate: '%s | Sample Title',
        description: 'Sample website description.',
        author: 'info@site.example',
        image: 'https://source.unsplash.com/collection/983219/2000x1322',
        social: {
          twitterUsername: '@example',
          instagramUsername: '@example',
          telegramChannel: '@example'
        },
        keywords: ['example', 'keywords'],
        robots: 'index, follow'
      }
    }
  }))
})

describe('<SEO />', () => {
  it('has default page title', async () => {
    render(<SEO />)
    await waitFor(() => {
      expect(getTitle()).toEqual('Sample Title')
    })
  })

  it('uses custom page title', async () => {
    render(<SEO title="About" />)
    await waitFor(() => {
      expect(getTitle()).toEqual('About | Sample Title')
    })
  })

  it('has open graph title', async () => {
    render(<SEO title="About" />)
    await waitFor(() => {
      expect(getMetaTagByProperty('og:title')).toEqual('About')
    })
  })

  it('has twitter card title', async () => {
    render(<SEO title="About" />)
    await waitFor(() => {
      expect(getMetaTagByName('twitter:title')).toEqual('About')
    })
  })

  it('has default description', async () => {
    render(<SEO />)
    await waitFor(() => {
      expect(getMetaTagByName('description')).toEqual('Sample website description.')
    })
  })

  it('has open graph description', async () => {
    render(<SEO />)
    await waitFor(() => {
      expect(getMetaTagByProperty('og:description')).toEqual('Sample website description.')
    })
  })

  it('has twitter card description', async () => {
    render(<SEO />)
    await waitFor(() => {
      expect(getMetaTagByName('twitter:description')).toEqual('Sample website description.')
    })
  })

  it('has canonical url', async () => {
    render(<SEO />)
    await waitFor(() => expect(getLinkTagByRel('canonical')).toEqual('https://site.example/'))
  })

  it('has default open graph image', async () => {
    render(<SEO />)
    await waitFor(() => expect(getMetaTagByProperty('og:image')).toEqual('https://source.unsplash.com/collection/983219/2000x1322'))
  })

  it('uses custom open graph image', async () => {
    render(<SEO image="https://source.unsplash.com/collection/983219/1600x900" />)
    await waitFor(() => expect(getMetaTagByProperty('og:image')).toEqual('https://source.unsplash.com/collection/983219/1600x900'))
  })

  it('supports custom, root-relative open graph image', async () => {
    render(<SEO image="/collection/983219/1600x900" />)
    await waitFor(() => expect(getMetaTagByProperty('og:image')).toEqual('https://site.example/collection/983219/1600x900'))
  })

  it('formats custom, root-relative image without slash', async () => {
    render(<SEO image="collection/983219/1600x900" />)
    await waitFor(() => expect(getMetaTagByProperty('og:image')).toEqual('https://site.example/collection/983219/1600x900'))
  })

  it('has default open graph type', async () => {
    render(<SEO />)
    await waitFor(() => expect(getMetaTagByProperty('og:type')).toEqual('website'))
  })

  it('has twitter card image', async () => {
    render(<SEO />)
    await waitFor(() => expect(getMetaTagByName('twitter:image')).toEqual('https://source.unsplash.com/collection/983219/2000x1322'))
  })

  it('uses large twitter cards', async () => {
    render(<SEO />)
    await waitFor(() => expect(getMetaTagByName('twitter:card')).toEqual('summary_large_image'))
  })

  it('has default author', async () => {
    render(<SEO />)
    await waitFor(() => expect(getMetaTagByName('author')).toEqual('info@site.example'))
  })

  it('uses custom author', async () => {
    render(<SEO author="contact@site.example" />)
    await waitFor(() => expect(getMetaTagByName('author')).toEqual('contact@site.example'))
  })

  it('defaults robots to index and follow', async () => {
    render(<SEO />)
    await waitFor(() => expect(getMetaTagByName('robots')).toEqual('index, follow'))
  })

  it('uses custom robots instruction', async () => {
    render(<SEO robots="noindex, nofollow" />)
    await waitFor(() => expect(getMetaTagByName('robots')).toEqual('noindex, nofollow'))
  })

  it('has default keywords', async () => {
    render(<SEO />)
    await waitFor(() => expect(getMetaTagByName('keywords')).toEqual('example, keywords'))
  })

  it('uses custom keywords', async () => {
    render(<SEO keywords={['other', 'keywords']} />)
    await waitFor(() => expect(getMetaTagByName('keywords')).toEqual('other, keywords'))
  })

  it('supports ad-hoc custom meta', async () => {
    render(<SEO meta={[{ name: 'referrer', content: 'same-origin' }]} />)
    await waitFor(() => expect(getMetaTagByName('referrer')).toEqual('same-origin'))
  })

  it('supports ad-hoc custom links', async () => {
    render(<SEO links={[{ rel: 'me external', href: 'https://twitter.com/sample' }]} />)
    await waitFor(() => expect(getLinkTagByRel('me external')).toEqual('https://twitter.com/sample'))
  })
})
