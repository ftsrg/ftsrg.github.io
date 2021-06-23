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

import { LocationProvider } from '@reach/router'
import { render, RenderResult } from '@testing-library/react'
import React, { FC, ReactElement } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18next from '../lib/i18next'

const Providers: FC = ({ children }) => {
  return (
    <LocationProvider>
      <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
    </LocationProvider>
  )
}

const customRender = (ui: ReactElement, options: Record<string, unknown> = {}): RenderResult => {
  return render(ui, { wrapper: Providers, ...options })
}

export * from '@testing-library/react'
export { customRender as render }
