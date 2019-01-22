/* --------------------
 * @overlookmotel/eslint-config-tests module
 * Tests
 * ------------------*/

'use strict';

// Modules
const chai = require('chai'),
	{expect} = chai,
	eslintConfigTests = require('../index');

// Init
chai.config.includeStack = true;

// Tests

describe('Tests', function() {
	it.skip('all', function() {
		expect(eslintConfigTests).to.be.ok;
	});
});
