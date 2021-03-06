const CodeScalar = require('../scalars/code.scalar');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const InstantScalar = require('../scalars/instant.scalar');
const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let AppointmentResourceType = new GraphQLEnumType({
	name: 'AppointmentResourceType',
	values: {
		Appointment: { value: 'Appointment' }
	}
});

/**
 * @name exports
 * @summary Appointment Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Appointment',
	description: 'Base StructureDefinition for Appointment Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(AppointmentResourceType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'This records identifiers associated with this appointment concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/appointmentstatus
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The overall status of the Appointment. Each of the participants has their own participation status which indicates their involvement in the process, however this status indicates the shared status.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The overall status of the Appointment. Each of the participants has their own participation status which indicates their involvement in the process, however this status indicates the shared status.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/c80-practice-codes
		type: {
			type: require('./codeableconcept.schema'),
			description: 'The type of appointment that is being booked (This may also be associated with participants for location, and/or a HealthcareService).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/encounter-reason
		reason: {
			type: require('./codeableconcept.schema'),
			description: 'The reason that this appointment is being scheduled. This is more clinical than administrative.'
		},
		priority: {
			type: UnsignedIntScalar,
			description: 'The priority of the appointment. Can be used to make informed decisions if needing to re-prioritize appointments. (The iCal Standard specifies 0 as undefined, 1 as highest, 9 as lowest priority).'
		},
		_priority: {
			type: require('./element.schema'),
			description: 'The priority of the appointment. Can be used to make informed decisions if needing to re-prioritize appointments. (The iCal Standard specifies 0 as undefined, 1 as highest, 9 as lowest priority).'
		},
		description: {
			type: GraphQLString,
			description: 'The brief description of the appointment as would be shown on a subject line in a meeting request, or appointment list. Detailed or expanded information should be put in the comment field.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'The brief description of the appointment as would be shown on a subject line in a meeting request, or appointment list. Detailed or expanded information should be put in the comment field.'
		},
		start: {
			type: InstantScalar,
			description: 'Date/Time that the appointment is to take place.'
		},
		_start: {
			type: require('./element.schema'),
			description: 'Date/Time that the appointment is to take place.'
		},
		end: {
			type: InstantScalar,
			description: 'Date/Time that the appointment is to conclude.'
		},
		_end: {
			type: require('./element.schema'),
			description: 'Date/Time that the appointment is to conclude.'
		},
		minutesDuration: {
			type: PositiveIntScalar,
			description: 'Number of minutes that the appointment is to take. This can be less than the duration between the start and end times (where actual time of appointment is only an estimate or is a planned appointment request).'
		},
		_minutesDuration: {
			type: require('./element.schema'),
			description: 'Number of minutes that the appointment is to take. This can be less than the duration between the start and end times (where actual time of appointment is only an estimate or is a planned appointment request).'
		},
		slot: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'The slot that this appointment is filling. If provided then the schedule will not be provided as slots are not recursive, and the start/end values MUST be the same as from the slot.'
		},
		comment: {
			type: GraphQLString,
			description: 'Additional comments about the appointment.'
		},
		_comment: {
			type: require('./element.schema'),
			description: 'Additional comments about the appointment.'
		},
		participant: {
			type: new GraphQLList(new GraphQLNonNull(require('./appointmentparticipant.schema'))),
			description: 'List of participants involved in the appointment.'
		}
	})
});
