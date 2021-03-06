const { GraphQLObjectType, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ObservationReferenceRange Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ObservationReferenceRange',
	description: 'Guidance on how to interpret the value by comparison to a normal or recommended range.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		low: {
			type: require('./quantity.schema'),
			description: 'The value of the low bound of the reference range.  The low bound of the reference range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9).   If the low bound is omitted,  it is assumed to be meaningless (e.g. reference range is <=2.3).'
		},
		high: {
			type: require('./quantity.schema'),
			description: 'The value of the high bound of the reference range.  The high bound of the reference range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9).   If the high bound is omitted,  it is assumed to be meaningless (e.g. reference range is >= 2.3).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/referencerange-meaning
		meaning: {
			type: require('./codeableconcept.schema'),
			description: 'Code for the meaning of the reference range.'
		},
		age: {
			type: require('./range.schema'),
			description: 'The age at which this reference range is applicable. This is a neonatal age (e.g. number of weeks at term) if the meaning says so.'
		},
		text: {
			type: GraphQLString,
			description: 'Text based reference range in an observation which may be used when a quantitative range is not appropriate for an observation.  An example would be a reference value of \'Negative\' or a list or table of \'normals\'.'
		},
		_text: {
			type: require('./element.schema'),
			description: 'Text based reference range in an observation which may be used when a quantitative range is not appropriate for an observation.  An example would be a reference value of \'Negative\' or a list or table of \'normals\'.'
		}
	})
});
