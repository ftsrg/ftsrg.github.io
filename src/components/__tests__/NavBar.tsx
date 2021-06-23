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
// eslint-disable-next-line import/no-unresolved
import { render, screen } from 'test-utils'
import NavBar from '../NavBar'

beforeAll(() => {
  const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')
  useStaticQuery.mockImplementation(() => ({
    site: {
      siteMetadata: {
        translations: ['id'],
        lang: 'en-US'
      }
    }
  }))
})

describe('<NavBar />', () => {
  it('has svg icon hidden to screen readers', () => {
    render(<NavBar siteTitle="Sample Title" />)
    expect(screen.getAllByRole('presentation')).toHaveLength(1)
    expect(screen.getAllByRole('presentation')[0]).toContainHTML('svg')
  })

  it('displays expected site title in heading', () => {
    render(<NavBar siteTitle="Sample Title" />)
    expect(screen.getByText('Sample Title')).toBeTruthy()
    expect(screen.queryByText('Jmupuri')).toBeNull()
    expect(screen.getByText('Sample Title')).toContainHTML('h1')
  })

  it('has button to toggle language', () => {
    render(<NavBar siteTitle="Sample Title" />)
    expect(screen.queryByRole('button', { name: 'Toggle language' })).toBeTruthy()
  })

  it('has button to toggle brightness', () => {
    render(<NavBar siteTitle="Sample Title" />)
    expect(screen.queryByRole('button', { name: 'Toggle brightness' })).toBeTruthy()
  })
})
