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

module.exports = {
  transform: {
    "^.+\\.[jt]sx?$": `<rootDir>/config/jest-preprocess.js`,
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
  },
  moduleDirectories: ["node_modules", "utils", __dirname],
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  setupFiles: [
    `<rootDir>/config/loadershim.js`,
    `<rootDir>/config/__mocks__/browser-mocks.js`,
  ],
  setupFilesAfterEnv: ["<rootDir>/config/setup-test-env.js"],
};
