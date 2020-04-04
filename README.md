[![NPM version](https://img.shields.io/npm/v/@overlookmotel/eslint-config-tests.svg)](https://www.npmjs.com/package/@overlookmotel/eslint-config-tests)
[![Build Status](https://img.shields.io/travis/overlookmotel/eslint-config-tests/master.svg)](http://travis-ci.org/overlookmotel/eslint-config-tests)
[![Dependency Status](https://img.shields.io/david/overlookmotel/eslint-config-tests.svg)](https://david-dm.org/overlookmotel/eslint-config-tests)
[![Dev dependency Status](https://img.shields.io/david/dev/overlookmotel/eslint-config-tests.svg)](https://david-dm.org/overlookmotel/eslint-config-tests)
[![Greenkeeper badge](https://badges.greenkeeper.io/overlookmotel/eslint-config-tests.svg)](https://greenkeeper.io/)
[![Coverage Status](https://img.shields.io/coveralls/overlookmotel/eslint-config-tests/master.svg)](https://coveralls.io/r/overlookmotel/eslint-config-tests)

# @overlookmotel's ESLint config for tests with mocha and chai

## Usage

Add dev dependencies in `package.json`:

* `@overlookmotel/eslint-config-tests`
* `eslint`
* `eslint-plugin-chai-friendly`

Add to `.eslintrc`: `"extends": "@overlookmotel/eslint-config-tests"`

NB Does not extend the base config [@overlookmotel/eslint-config](https://www.npmjs.com/package/@overlookmotel/eslint-config) so use `"extends": "@overlookmotel/eslint-config"` too in `.eslintrc`.

## Versioning

This module follows [semver](https://semver.org/). Breaking changes will only be made in major version updates.

All active NodeJS release lines are supported (v10+ at time of writing). After a release line of NodeJS reaches end of life according to [Node's LTS schedule](https://nodejs.org/en/about/releases/), support for that version of Node may be dropped at any time, and this will not be considered a breaking change. Dropping support for a Node version will be made in a minor version update (e.g. 1.2.0 to 1.3.0). If you are using a Node version which is approaching end of life, pin your dependency of this module to patch updates only using tilde (`~`) e.g. `~1.2.3` to avoid breakages.

## Tests

Use `npm test` to run the tests. Use `npm run cover` to check coverage.

## Changelog

See [changelog.md](https://github.com/overlookmotel/eslint-config-tests/blob/master/changelog.md)

## Issues

If you discover a bug, please raise an issue on Github. https://github.com/overlookmotel/eslint-config-tests/issues

## Contribution

Pull requests are very welcome. Please:

* ensure all tests pass before submitting PR
* add tests for new features
* document new functionality/API additions in README
* do not add an entry to Changelog (Changelog is created when cutting releases)
