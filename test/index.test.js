/* --------------------
 * `@overlookmotel/eslint-config-tests` module
 * Tests
 * ------------------*/

'use strict';

// Modules
const chai = require('chai'),
	{expect} = chai,
	eslintConfigTests = require('../index.js');

// Init
chai.config.includeStack = true;

// Tests

it('Exports an object', () => {
	expect(eslintConfigTests).to.be.an('object');
});
