const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary DocumentManifestRelated Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DocumentManifestRelated',
	description: 'Related identifiers or resources associated with the DocumentManifest.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		identifier: {
			type: require('./identifier.schema'),
			description: 'Related identifier to this DocumentManifest.  For example, Order numbers, accession numbers, XDW workflow numbers.'
		},
		ref: {
			type: require('./reference.schema'),
			description: 'Related Resource to this DocumentManifest. For example, Order, ProcedureRequest,  Procedure, EligibilityRequest, etc.'
		}
	})
});
