const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary MedicationDispensePerformer Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MedicationDispensePerformer_Input',
	description: 'Indicates who or what performed the event.  It should be assumed that the performer is the dispenser of the medication.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		actor: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The device, practitioner, etc. who performed the action.  It should be assumed that the actor is the dispenser of the medication.'
		},
		onBehalfOf: {
			type: require('./reference.input'),
			description: 'The organization the device or practitioner was acting on behalf of.'
		}
	})
});
