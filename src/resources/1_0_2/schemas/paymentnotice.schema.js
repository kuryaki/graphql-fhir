const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let PaymentNoticeResourceType = new GraphQLEnumType({
	name: 'PaymentNoticeResourceType',
	values: {
		PaymentNotice: { value: 'PaymentNotice' }
	}
});

/**
 * @name exports
 * @summary PaymentNotice Schema
 */
module.exports = new GraphQLObjectType({
	name: 'PaymentNotice',
	description: 'Base StructureDefinition for PaymentNotice Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(PaymentNoticeResourceType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'The Response business identifier.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/ruleset
		ruleset: {
			type: require('./coding.schema'),
			description: 'The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/ruleset
		originalRuleset: {
			type: require('./coding.schema'),
			description: 'The style (standard) and version of the original material which was converted into this resource.'
		},
		created: {
			type: DateTimeScalar,
			description: 'The date when this resource was created.'
		},
		_created: {
			type: require('./element.schema'),
			description: 'The date when this resource was created.'
		},
		target: {
			type: require('./reference.schema'),
			description: 'The Insurer who is target  of the request.'
		},
		provider: {
			type: require('./reference.schema'),
			description: 'The practitioner who is responsible for the services rendered to the patient.'
		},
		organization: {
			type: require('./reference.schema'),
			description: 'The organization which is responsible for the services rendered to the patient.'
		},
		request: {
			type: require('./reference.schema'),
			description: 'Reference of resource to reverse.'
		},
		response: {
			type: require('./reference.schema'),
			description: 'Reference of response to resource to reverse.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/payment-status
		paymentStatus: {
			type: new GraphQLNonNull(require('./coding.schema')),
			description: 'The payment status, typically paid: payment sent, cleared: payment received.'
		}
	})
});
