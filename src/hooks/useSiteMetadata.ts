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

import { useStaticQuery, graphql } from "gatsby";

interface SiteMetadata {
  baseUrl: string;
  translations: string[];
  lang: string;
  title: string;
  titleTemplate: string;
  description: string;
  author: string;
  image: string;
  social: {
    twitterUsername: string;
    instagramUsername: string;
    telegramChannel: string;
  };
  robots: string;
  keywords: string[];
}

export const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            baseUrl
            translations
            lang
            title
            titleTemplate
            description
            author
            image
            social {
              twitterUsername
              instagramUsername
              telegramChannel
            }
            keywords
            robots
          }
        }
      }
    `,
  );
  return site.siteMetadata;
};
