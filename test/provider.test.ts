/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as Github from '../src'

test('make sure classes were generated', () => {
  expect(Github.GithubProvider.name).toBe('GithubProvider');
});