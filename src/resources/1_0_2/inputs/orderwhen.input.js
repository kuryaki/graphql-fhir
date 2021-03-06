const { GraphQLInputObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary OrderWhen Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'OrderWhen_Input',
	description: 'When order should be fulfilled.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		code: {
			type: require('./codeableconcept.input'),
			description: 'Code specifies when request should be done. The code may simply be a priority code.'
		},
		schedule: {
			type: require('./timing.input'),
			description: 'A formal schedule.'
		}
	})
});
