const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary BundleEntry Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'BundleEntry_Input',
	description: 'An entry in a bundle resource - will either contain a resource, or information about a resource (transactions and history only).',
	fields: () => extendSchema(require('./backboneelement.input'), {
		fullUrl: {
			type: UriScalar,
			description: 'The Absolute URL for the resource. This must be provided for all resources. The fullUrl SHALL not disagree with the id in the resource. The fullUrl is a version independent reference to the resource.'
		},
		_fullUrl: {
			type: require('./element.input'),
			description: 'The Absolute URL for the resource. This must be provided for all resources. The fullUrl SHALL not disagree with the id in the resource. The fullUrl is a version independent reference to the resource.'
		},
		// TODO: Figure out how to handle this
		// resource: {
		// 	type: require('./resourcelist.input'),
		// 	description: 'The Resources for the entry.'
		// },
		search: {
			type: require('./bundleentrysearch.input'),
			description: 'Information about the search process that lead to the creation of this entry.'
		},
		request: {
			type: require('./bundleentryrequest.input'),
			description: 'Additional information about how this entry should be processed as part of a transaction.'
		},
		response: {
			type: require('./bundleentryresponse.input'),
			description: 'Additional information about how this entry should be processed as part of a transaction.'
		}
	})
});
