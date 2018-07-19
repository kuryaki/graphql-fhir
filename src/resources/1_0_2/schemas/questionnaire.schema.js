const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let QuestionnaireResourceType = new GraphQLEnumType({
	name: 'QuestionnaireResourceType',
	values: {
		Questionnaire: { value: 'Questionnaire' }
	}
});

/**
 * @name exports
 * @summary Questionnaire Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Questionnaire',
	description: 'Base StructureDefinition for Questionnaire Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(QuestionnaireResourceType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'This records identifiers associated with this question set that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).'
		},
		version: {
			type: GraphQLString,
			description: 'The version number assigned by the publisher for business reasons.  It may remain the same when the resource is updated.'
		},
		_version: {
			type: require('./element.schema'),
			description: 'The version number assigned by the publisher for business reasons.  It may remain the same when the resource is updated.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The lifecycle status of the questionnaire as a whole.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The lifecycle status of the questionnaire as a whole.'
		},
		date: {
			type: DateTimeScalar,
			description: 'The date that this questionnaire was last changed.'
		},
		_date: {
			type: require('./element.schema'),
			description: 'The date that this questionnaire was last changed.'
		},
		publisher: {
			type: GraphQLString,
			description: 'Organization or person responsible for developing and maintaining the questionnaire.'
		},
		_publisher: {
			type: require('./element.schema'),
			description: 'Organization or person responsible for developing and maintaining the questionnaire.'
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.schema')),
			description: 'Contact details to assist a user in finding and communicating with the publisher.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		subjectType: {
			type: new GraphQLList(CodeScalar),
			description: 'Identifies the types of subjects that can be the subject of the questionnaire.'
		},
		_subjectType: {
			type: require('./element.schema'),
			description: 'Identifies the types of subjects that can be the subject of the questionnaire.'
		},
		group: {
			type: new GraphQLNonNull(require('./questionnairegroup.schema')),
			description: 'A collection of related questions (or further groupings of questions).'
		}
	})
});
