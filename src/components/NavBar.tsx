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

import { createIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Flex, Heading, IconButton, Spacer, Stack, Tooltip, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Link as ReachLink } from '@reach/router'
import React, { FC } from 'react'
import LanguageToggle from './LanguageToggle'

const LogoIcon = createIcon({
  displayName: 'LogoIcon',
  viewBox: '0 0 46 45',
  d: 'M.708 45L23 .416 45.292 45H.708zM35 38L23 19 11 38h24z'
})

interface NavBarProps {
  siteTitle: string
}

const NavBar: FC<NavBarProps> = ({ siteTitle }) => {
  const ButtonIcon = useColorModeValue(MoonIcon, SunIcon)
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex align="center" justify="space-between" maxW="960px" margin="0 auto">
      <ReachLink to="/">
        <Stack direction="row">
          <LogoIcon fontSize="3xl" color="whiteAlpha.900" />
          <Heading as="h1" fontSize="3xl" fontFamily="Crimson Text" ml={4}>
            {siteTitle}
          </Heading>
        </Stack>
      </ReachLink>
      <Spacer />
      <Stack spacing={2} direction="row">
        <LanguageToggle />
        <Tooltip
          hasArrow
          aria-label="Activate button to toggle brightness"
          label={useColorModeValue('Decrease brightness', 'Increase brightness')}
          placement="left"
        >
          <IconButton
            color={useColorModeValue('red.500', 'gray.600')}
            aria-label="Toggle brightness"
            isRound
            variant="ghost"
            fontSize="xl"
            icon={<ButtonIcon />}
            onClick={toggleColorMode}
          />
        </Tooltip>
      </Stack>
    </Flex>
  )
}

export default NavBar
