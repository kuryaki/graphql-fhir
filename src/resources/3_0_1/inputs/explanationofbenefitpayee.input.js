const { GraphQLInputObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ExplanationOfBenefitPayee Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ExplanationOfBenefitPayee_Input',
	description: 'The party to be reimbursed for the services.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/payeetype
		type: {
			type: require('./codeableconcept.input'),
			description: 'Type of Party to be reimbursed: Subscriber, provider, other.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/resource-type-link
		resourceType: {
			type: require('./codeableconcept.input'),
			description: 'organization | patient | practitioner | relatedperson.'
		},
		party: {
			type: require('./reference.input'),
			description: 'Party to be reimbursed: Subscriber, provider, other.'
		}
	})
});
