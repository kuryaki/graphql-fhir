const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ImplementationGuideContact Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImplementationGuideContact',
	description: 'Contacts to assist a user in finding and communicating with the publisher.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		name: {
			type: GraphQLString,
			description: 'The name of an individual to contact regarding the implementation guide.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'The name of an individual to contact regarding the implementation guide.'
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.schema')),
			description: 'Contact details for individual (if a name was provided) or the publisher.'
		}
	})
});
