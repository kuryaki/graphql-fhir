const {
	StructureDefinitionQuery,
	StructureDefinitionListQuery,
	StructureDefinitionInstanceQuery
} = require('./query');

const {
	StructureDefinitionCreateMutation,
	StructureDefinitionUpdateMutation,
	StructureDefinitionDeleteMutation
} = require('./mutation');

/**
 * @name exports
 * @static
 * @summary GraphQL Configurations. This is needed to register this profile
 * with the GraphQL server.
 */
module.exports = {
	/**
	* Define Query Schema's here
	* Each profile will need to define the two queries it supports
	* and these keys must be unique across the entire application, like routes
	*/
	query: {
		StructureDefinition: StructureDefinitionQuery,
		StructureDefinitionList: StructureDefinitionListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		StructureDefinitionCreate: StructureDefinitionCreateMutation,
		StructureDefinitionUpdate: StructureDefinitionUpdateMutation,
		StructureDefinitionDelete: StructureDefinitionDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'StructureDefinition',
		path: '/3_0_1/StructureDefinition/:id',
		query: StructureDefinitionInstanceQuery
	}
};
