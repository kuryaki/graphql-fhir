const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const InstantScalar = require('../scalars/instant.scalar');
const TimeScalar = require('../scalars/time.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let ObservationResourceInputType = new GraphQLEnumType({
	name: 'ObservationResourceInputType',
	values: {
		Observation: { value: 'Observation' }
	}
});

/**
 * @name exports
 * @summary Observation Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Observation_Input',
	description: 'Base StructureDefinition for Observation Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(ObservationResourceInputType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'A unique identifier assigned to this observation.'
		},
		basedOn: {
			type: new GraphQLList(require('./reference.input')),
			description: 'A plan, proposal or order that is fulfilled in whole or in part by this event.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/observation-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the result value.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The status of the result value.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/observation-category
		category: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'A code that classifies the general type of observation being made.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/observation-codes
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'Describes what was observed. Sometimes this is called the observation \'name\'.'
		},
		subject: {
			type: require('./reference.input'),
			description: 'The patient, or group of patients, location, or device whose characteristics (direct or indirect) are described by the observation and into whose record the observation is placed.  Comments: Indirect characteristics may be those of a specimen, fetus, donor,  other observer (for example a relative or EMT), or any observation made about the subject.'
		},
		context: {
			type: require('./reference.input'),
			description: 'The healthcare event  (e.g. a patient and healthcare provider interaction) during which this observation is made.'
		},
		effectiveDateTime: {
			type: DateTimeScalar,
			description: 'The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the \'physiologically relevant time\'. This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.'
		},
		_effectiveDateTime: {
			type: require('./element.input'),
			description: 'The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the \'physiologically relevant time\'. This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.'
		},
		effectivePeriod: {
			type: require('./period.input'),
			description: 'The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the \'physiologically relevant time\'. This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.'
		},
		issued: {
			type: InstantScalar,
			description: 'The date and time this observation was made available to providers, typically after the results have been reviewed and verified.'
		},
		_issued: {
			type: require('./element.input'),
			description: 'The date and time this observation was made available to providers, typically after the results have been reviewed and verified.'
		},
		performer: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Who was responsible for asserting the observed value as \'true\'.'
		},
		valueQuantity: {
			type: require('./quantity.input'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		valueCodeableConcept: {
			type: require('./codeableconcept.input'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		valueString: {
			type: GraphQLString,
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		_valueString: {
			type: require('./element.input'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		valueBoolean: {
			type: GraphQLBoolean,
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		_valueBoolean: {
			type: require('./element.input'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		valueRange: {
			type: require('./range.input'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		valueRatio: {
			type: require('./ratio.input'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		valueSampledData: {
			type: require('./sampleddata.input'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		valueAttachment: {
			type: require('./attachment.input'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		valueTime: {
			type: TimeScalar,
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		_valueTime: {
			type: require('./element.input'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		valueDateTime: {
			type: DateTimeScalar,
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		_valueDateTime: {
			type: require('./element.input'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		valuePeriod: {
			type: require('./period.input'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/observation-valueabsentreason
		dataAbsentReason: {
			type: require('./codeableconcept.input'),
			description: 'Provides a reason why the expected value in the element Observation.value[x] is missing.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/observation-interpretation
		interpretation: {
			type: require('./codeableconcept.input'),
			description: 'The assessment made based on the result of the observation.  Intended as a simple compact code often placed adjacent to the result value in reports and flow sheets to signal the meaning/normalcy status of the result. Otherwise known as abnormal flag.'
		},
		comment: {
			type: GraphQLString,
			description: 'May include statements about significant, unexpected or unreliable values, or information about the source of the value where this may be relevant to the interpretation of the result.'
		},
		_comment: {
			type: require('./element.input'),
			description: 'May include statements about significant, unexpected or unreliable values, or information about the source of the value where this may be relevant to the interpretation of the result.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodySite: {
			type: require('./codeableconcept.input'),
			description: 'Indicates the site on the subject\'s body where the observation was made (i.e. the target site).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/observation-methods
		method: {
			type: require('./codeableconcept.input'),
			description: 'Indicates the mechanism used to perform the observation.'
		},
		specimen: {
			type: require('./reference.input'),
			description: 'The specimen that was used when this observation was made.'
		},
		device: {
			type: require('./reference.input'),
			description: 'The device used to generate the observation data.'
		},
		referenceRange: {
			type: new GraphQLList(require('./observationreferencerange.input')),
			description: 'Guidance on how to interpret the value by comparison to a normal or recommended range.'
		},
		related: {
			type: new GraphQLList(require('./observationrelated.input')),
			description: 'A  reference to another resource (usually another Observation) whose relationship is defined by the relationship type code.'
		},
		component: {
			type: new GraphQLList(require('./observationcomponent.input')),
			description: 'Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.'
		}
	})
});
