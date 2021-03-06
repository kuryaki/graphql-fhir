// Schemas
const AdverseEventSchema = require('../../schemas/adverseevent.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const AdverseEventArgs = require('../../parameters/adverseevent.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	adverseeventResolver,
	adverseeventListResolver,
	adverseeventInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'AdverseEvent',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.AdverseEventQuery
 * @summary AdverseEvent Query.
 */
module.exports.AdverseEventQuery = {
	args: Object.assign({}, CommonArgs, AdverseEventArgs),
	description: 'Query for a single AdverseEvent',
	resolve: scopeInvariant(scopeOptions, adverseeventResolver),
	type: AdverseEventSchema
};

/**
 * @name exports.AdverseEventListQuery
 * @summary AdverseEventList Query.
 */
module.exports.AdverseEventListQuery = {
	args: Object.assign({}, CommonArgs, AdverseEventArgs),
	description: 'Query for multiple AdverseEvents',
	resolve: scopeInvariant(scopeOptions, adverseeventListResolver),
	type: BundleSchema
};

/**
 * @name exports.AdverseEventInstanceQuery
 * @summary AdverseEventInstance Query.
 */
module.exports.AdverseEventInstanceQuery = {
	description: 'Get information about a single AdverseEvent',
	resolve: scopeInvariant(scopeOptions, adverseeventInstanceResolver),
	type: AdverseEventSchema
};
