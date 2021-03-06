const PositiveIntScalar = require('../scalars/positiveint.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ExplanationOfBenefitProcedure Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ExplanationOfBenefitProcedure_Input',
	description: 'Ordered list of patient procedures performed to support the adjudication.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'Sequence of procedures which serves to order and provide a link.'
		},
		_sequence: {
			type: require('./element.input'),
			description: 'Sequence of procedures which serves to order and provide a link.'
		},
		date: {
			type: DateTimeScalar,
			description: 'Date and optionally time the procedure was performed .'
		},
		_date: {
			type: require('./element.input'),
			description: 'Date and optionally time the procedure was performed .'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/icd-10-procedures
		procedureCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'The procedure code.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/icd-10-procedures
		procedureReference: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The procedure code.'
		}
	})
});
