const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLList, GraphQLString, GraphQLBoolean, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ElementDefinitionSlicing Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ElementDefinitionSlicing_Input',
	description: 'Indicates that the element is sliced into a set of alternative definitions (i.e. in a structure definition, there are multiple different constraints on a single element in the base resource). Slicing can be used in any resource that has cardinality ..* on the base resource, or any resource with a choice of types. The set of slices is any elements that come after this in the element sequence that have the same path, until a shorter path occurs (the shorter path terminates the set).',
	fields: () => extendSchema(require('./element.input'), {
		discriminator: {
			type: new GraphQLList(require('./elementdefinitionslicingdiscriminator.input')),
			description: 'Designates which child elements are used to discriminate between the slices when processing an instance. If one or more discriminators are provided, the value of the child elements in the instance data SHALL completely distinguish which slice the element in the resource matches based on the allowed values for those elements in each of the slices.'
		},
		description: {
			type: GraphQLString,
			description: 'A human-readable text description of how the slicing works. If there is no discriminator, this is required to be present to provide whatever information is possible about how the slices can be differentiated.'
		},
		_description: {
			type: require('./element.input'),
			description: 'A human-readable text description of how the slicing works. If there is no discriminator, this is required to be present to provide whatever information is possible about how the slices can be differentiated.'
		},
		ordered: {
			type: GraphQLBoolean,
			description: 'If the matching elements have to occur in the same order as defined in the profile.'
		},
		_ordered: {
			type: require('./element.input'),
			description: 'If the matching elements have to occur in the same order as defined in the profile.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/resource-slicing-rules
		rules: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Whether additional slices are allowed or not. When the slices are ordered, profile authors can also say that additional slices are only allowed at the end.'
		},
		_rules: {
			type: require('./element.input'),
			description: 'Whether additional slices are allowed or not. When the slices are ordered, profile authors can also say that additional slices are only allowed at the end.'
		}
	})
});
