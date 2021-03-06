const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let MessageDefinitionResourceType = new GraphQLEnumType({
	name: 'MessageDefinitionResourceType',
	values: {
		MessageDefinition: { value: 'MessageDefinition' }
	}
});

/**
 * @name exports
 * @summary MessageDefinition Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MessageDefinition',
	description: 'Base StructureDefinition for MessageDefinition Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(MessageDefinitionResourceType),
			description: 'Type of this resource'
		},
		url: {
			type: UriScalar,
			description: 'An absolute URI that is used to identify this message definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this message definition is (or will be) published. The URL SHOULD include the major version of the message definition. For more information see [Technical and Business Versions](resource.html#versions).'
		},
		_url: {
			type: require('./element.schema'),
			description: 'An absolute URI that is used to identify this message definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this message definition is (or will be) published. The URL SHOULD include the major version of the message definition. For more information see [Technical and Business Versions](resource.html#versions).'
		},
		identifier: {
			type: require('./identifier.schema'),
			description: 'A formal identifier that is used to identify this message definition when it is represented in other formats, or referenced in a specification, model, design or an instance.'
		},
		version: {
			type: GraphQLString,
			description: 'The identifier that is used to identify this version of the message definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the message definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.'
		},
		_version: {
			type: require('./element.schema'),
			description: 'The identifier that is used to identify this version of the message definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the message definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.'
		},
		name: {
			type: GraphQLString,
			description: 'A natural language name identifying the message definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'A natural language name identifying the message definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
		},
		title: {
			type: GraphQLString,
			description: 'A short, descriptive, user-friendly title for the message definition.'
		},
		_title: {
			type: require('./element.schema'),
			description: 'A short, descriptive, user-friendly title for the message definition.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/publication-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of this message definition. Enables tracking the life-cycle of the content.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of this message definition. Enables tracking the life-cycle of the content.'
		},
		experimental: {
			type: GraphQLBoolean,
			description: 'A boolean value to indicate that this message definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		_experimental: {
			type: require('./element.schema'),
			description: 'A boolean value to indicate that this message definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		date: {
			type: new GraphQLNonNull(DateTimeScalar),
			description: 'The date  (and optionally time) when the message definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the message definition changes.'
		},
		_date: {
			type: require('./element.schema'),
			description: 'The date  (and optionally time) when the message definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the message definition changes.'
		},
		publisher: {
			type: GraphQLString,
			description: 'The name of the individual or organization that published the message definition.'
		},
		_publisher: {
			type: require('./element.schema'),
			description: 'The name of the individual or organization that published the message definition.'
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.schema')),
			description: 'Contact details to assist a user in finding and communicating with the publisher.'
		},
		description: {
			type: GraphQLString,
			description: 'A free text natural language description of the message definition from a consumer\'s perspective.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'A free text natural language description of the message definition from a consumer\'s perspective.'
		},
		useContext: {
			type: new GraphQLList(require('./usagecontext.schema')),
			description: 'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate message definition instances.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/jurisdiction
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'A legal or geographic region in which the message definition is intended to be used.'
		},
		purpose: {
			type: GraphQLString,
			description: 'Explaination of why this message definition is needed and why it has been designed as it has.'
		},
		_purpose: {
			type: require('./element.schema'),
			description: 'Explaination of why this message definition is needed and why it has been designed as it has.'
		},
		copyright: {
			type: GraphQLString,
			description: 'A copyright statement relating to the message definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the message definition.'
		},
		_copyright: {
			type: require('./element.schema'),
			description: 'A copyright statement relating to the message definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the message definition.'
		},
		base: {
			type: require('./reference.schema'),
			description: 'The MessageDefinition that is the basis for the contents of this resource.'
		},
		parent: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Identifies a protocol or workflow that this MessageDefinition represents a step in.'
		},
		replaces: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'A MessageDefinition that is superseded by this definition.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/message-events
		event: {
			type: new GraphQLNonNull(require('./coding.schema')),
			description: 'A coded identifier of a supported messaging event.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/message-significance-category
		category: {
			type: CodeScalar,
			description: 'The impact of the content of the message.'
		},
		_category: {
			type: require('./element.schema'),
			description: 'The impact of the content of the message.'
		},
		focus: {
			type: new GraphQLList(require('./messagedefinitionfocus.schema')),
			description: 'Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit message or two Account records for a merge.'
		},
		responseRequired: {
			type: GraphQLBoolean,
			description: 'Indicates whether a response is required for this message.'
		},
		_responseRequired: {
			type: require('./element.schema'),
			description: 'Indicates whether a response is required for this message.'
		},
		allowedResponse: {
			type: new GraphQLList(require('./messagedefinitionallowedresponse.schema')),
			description: 'Indicates what types of messages may be sent as an application-level response to this message.'
		}
	})
});
