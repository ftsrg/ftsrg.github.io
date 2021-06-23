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

import { Box } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import NavBar from './NavBar'
import SEO from './SEO'

const Layout: FC = ({ children }) => {
  const { title, image } = useSiteMetadata()
  return (
    <>
      <SEO />
      <Box
        as="header"
        _before={{
          content: `""`,
          position: 'fixed',
          width: '100%',
          height: '100vh',
          opacity: 0.2,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          zIndex: -1
        }}
      >
        <Box bg="transparent" color="gray.100" p={4} style={{ backdropFilter: 'brightness(0.7) saturate(80%) blur(5px)' }} boxShadow="xl">
          <NavBar siteTitle={title} />
        </Box>
      </Box>
      <Box as="main" mt={6} maxW="960px" marginX={[4, 4, 4, 'auto']}>
        {children}
      </Box>
    </>
  )
}

export default Layout
