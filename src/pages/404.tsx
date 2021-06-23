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

import { Heading, Text } from '@chakra-ui/react'
import { PageProps } from 'gatsby'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const NotFoundPage: FC<PageProps> = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title={t('pages.404.title')} robots="noindex, nofollow" />
      <Heading>{t('pages.404.heading')}</Heading>
      <Text>{t('pages.404.notFoundText')}</Text>
    </Layout>
  )
}

export default NotFoundPage
