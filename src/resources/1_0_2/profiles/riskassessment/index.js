const {
	RiskAssessmentQuery,
	RiskAssessmentListQuery,
	RiskAssessmentInstanceQuery
} = require('./query');

const {
	RiskAssessmentCreateMutation,
	RiskAssessmentUpdateMutation,
	RiskAssessmentDeleteMutation
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
		RiskAssessment: RiskAssessmentQuery,
		RiskAssessmentList: RiskAssessmentListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		RiskAssessmentCreate: RiskAssessmentCreateMutation,
		RiskAssessmentUpdate: RiskAssessmentUpdateMutation,
		RiskAssessmentDelete: RiskAssessmentDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'RiskAssessment',
		path: '/1_0_2/RiskAssessment/:id',
		query: RiskAssessmentInstanceQuery
	}
};
