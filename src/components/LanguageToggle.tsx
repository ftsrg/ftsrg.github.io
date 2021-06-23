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

import React, { FC } from "react";
import { IconButton, Tooltip } from "@chakra-ui/core";
import { MdLanguage } from "react-icons/md";

import { useTranslation } from "react-i18next";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { Locale } from "../utils/language";

const LanguageToggle: FC = () => {
  const { translations } = useSiteMetadata() as {
    translations: Array<keyof typeof Locale>;
  };
  const { i18n } = useTranslation();
  const locale = i18n.language as keyof typeof Locale;
  const toggleLanguage = () => {
    locale === "en" ? i18n.changeLanguage("id") : i18n.changeLanguage("en");
  };

  return (
    <Tooltip
      hasArrow
      aria-label="Switch languages"
      label={
        locale === "en"
          ? `Switch to ${Locale["id"]}`
          : `Switch to ${Locale["en"]}`
      }
      placement="left"
    >
      <IconButton
        disabled={!translations.some((locale) => locale === "id")}
        color="gray.600"
        aria-label="Toggle language"
        isRound
        variant="ghost"
        fontSize="xl"
        icon={<MdLanguage />}
        onClick={toggleLanguage}
      />
    </Tooltip>
  );
};

export default LanguageToggle;
