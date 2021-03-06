const OidScalar = require('../scalars/oid.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ImagingObjectSelectionStudy Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImagingObjectSelectionStudy',
	description: 'Study identity and locating information of the DICOM SOP instances in the selection.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		uid: {
			type: new GraphQLNonNull(OidScalar),
			description: 'Study instance UID of the SOP instances in the selection.'
		},
		_uid: {
			type: require('./element.schema'),
			description: 'Study instance UID of the SOP instances in the selection.'
		},
		url: {
			type: UriScalar,
			description: 'WADO-RS URL to retrieve the study. Note that this URL retrieves all SOP instances of the study, not only those in the selection.'
		},
		_url: {
			type: require('./element.schema'),
			description: 'WADO-RS URL to retrieve the study. Note that this URL retrieves all SOP instances of the study, not only those in the selection.'
		},
		imagingStudy: {
			type: require('./reference.schema'),
			description: 'Reference to the Imaging Study in FHIR form.'
		},
		series: {
			type: new GraphQLList(new GraphQLNonNull(require('./imagingobjectselectionstudyseries.schema'))),
			description: 'Series identity and locating information of the DICOM SOP instances in the selection.'
		}
	})
});
