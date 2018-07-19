const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let CommunicationRequestResourceInputType = new GraphQLEnumType({
	name: 'CommunicationRequestResourceInputType',
	values: {
		CommunicationRequest: { value: 'CommunicationRequest' }
	}
});

/**
 * @name exports
 * @summary CommunicationRequest Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CommunicationRequest_Input',
	description: 'Base StructureDefinition for CommunicationRequest Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(CommunicationRequestResourceInputType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'A unique ID of this request for reference purposes. It must be provided if user wants it returned as part of any output, otherwise it will be autogenerated, if needed, by CDS system. Does not need to be the actual ID of the source system.'
		},
		category: {
			type: require('./codeableconcept.input'),
			description: 'The type of message to be sent such as alert, notification, reminder, instruction, etc.'
		},
		sender: {
			type: require('./reference.input'),
			description: 'The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communication.'
		},
		recipient: {
			type: new GraphQLList(require('./reference.input')),
			description: 'The entity (e.g. person, organization, clinical information system, or device) which is the intended target of the communication.'
		},
		payload: {
			type: new GraphQLList(require('./communicationrequestpayload.input')),
			description: 'Text, attachment(s), or resource(s) to be communicated to the recipient.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ParticipationMode
		medium: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'A channel that was used for this communication (e.g. email, fax).'
		},
		requester: {
			type: require('./reference.input'),
			description: 'The responsible person who authorizes this order, e.g. physician. This may be different than the author of the order statement, e.g. clerk, who may have entered the statement into the order entry application.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/communication-request-status
		status: {
			type: CodeScalar,
			description: 'The status of the proposal or order.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The status of the proposal or order.'
		},
		encounter: {
			type: require('./reference.input'),
			description: 'The encounter within which the communication request was created.'
		},
		scheduledDateTime: {
			type: DateTimeScalar,
			description: 'The time when this communication is to occur.'
		},
		_scheduledDateTime: {
			type: require('./element.input'),
			description: 'The time when this communication is to occur.'
		},
		scheduledPeriod: {
			type: require('./period.input'),
			description: 'The time when this communication is to occur.'
		},
		reason: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'The reason or justification for the communication request.'
		},
		requestedOn: {
			type: DateTimeScalar,
			description: 'The time when the request was made.'
		},
		_requestedOn: {
			type: require('./element.input'),
			description: 'The time when the request was made.'
		},
		subject: {
			type: require('./reference.input'),
			description: 'The patient who is the focus of this communication request.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/diagnostic-order-priority
		priority: {
			type: require('./codeableconcept.input'),
			description: 'Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.'
		}
	})
});
