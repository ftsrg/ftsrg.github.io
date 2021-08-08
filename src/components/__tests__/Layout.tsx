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
import Layout from '~layout/Layout'
import { render, screen } from '~utils/test-utils'

beforeAll(() => {
  const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')
  useStaticQuery.mockImplementation(() => ({
    site: {
      siteMetadata: {
        baseUrl: 'https://site.example/',
        translations: ['id'],
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

describe('<Layout />', () => {
  it('has accessible page header', () => {
    render(<Layout />)
    expect(screen.getAllByRole('banner')).toHaveLength(1)
    expect(screen.getAllByRole('banner')[0]).toHaveTextContent('Sample Title')
  })

  it('has accessible page content', () => {
    render(<Layout />)
    expect(screen.getAllByRole('main')).toHaveLength(1)
    expect(screen.getAllByRole('main')[0]).toBeDefined()
  })
})
