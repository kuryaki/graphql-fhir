const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let DeviceResourceType = new GraphQLEnumType({
	name: 'DeviceResourceType',
	values: {
		Device: { value: 'Device' }
	}
});

/**
 * @name exports
 * @summary Device Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Device',
	description: 'Base StructureDefinition for Device Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(DeviceResourceType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Unique instance identifiers assigned to a device by organizations like manufacturers or owners. If the identifier identifies the type of device, Device.type should be used.'
		},
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'Code or identifier to identify a kind of device.'
		},
		note: {
			type: new GraphQLList(require('./annotation.schema')),
			description: 'Descriptive information, usage information or implantation information that is not captured in an existing element.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/devicestatus
		status: {
			type: CodeScalar,
			description: 'Status of the Device availability.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'Status of the Device availability.'
		},
		manufacturer: {
			type: GraphQLString,
			description: 'A name of the manufacturer.'
		},
		_manufacturer: {
			type: require('./element.schema'),
			description: 'A name of the manufacturer.'
		},
		model: {
			type: GraphQLString,
			description: 'The \'model\' is an identifier assigned by the manufacturer to identify the product by its type. This number is shared by the all devices sold as the same type.'
		},
		_model: {
			type: require('./element.schema'),
			description: 'The \'model\' is an identifier assigned by the manufacturer to identify the product by its type. This number is shared by the all devices sold as the same type.'
		},
		version: {
			type: GraphQLString,
			description: 'The version of the device, if the device has multiple releases under the same model, or if the device is software or carries firmware.'
		},
		_version: {
			type: require('./element.schema'),
			description: 'The version of the device, if the device has multiple releases under the same model, or if the device is software or carries firmware.'
		},
		manufactureDate: {
			type: DateTimeScalar,
			description: 'The date and time when the device was manufactured.'
		},
		_manufactureDate: {
			type: require('./element.schema'),
			description: 'The date and time when the device was manufactured.'
		},
		expiry: {
			type: DateTimeScalar,
			description: 'The date and time beyond which this device is no longer valid or should not be used (if applicable).'
		},
		_expiry: {
			type: require('./element.schema'),
			description: 'The date and time beyond which this device is no longer valid or should not be used (if applicable).'
		},
		udi: {
			type: GraphQLString,
			description: 'United States Food and Drug Administration mandated Unique Device Identifier (UDI). Use the human readable information (the content that the user sees, which is sometimes different to the exact syntax represented in the barcode)  - see http://www.fda.gov/MedicalDevices/DeviceRegulationandGuidance/UniqueDeviceIdentification/default.htm.'
		},
		_udi: {
			type: require('./element.schema'),
			description: 'United States Food and Drug Administration mandated Unique Device Identifier (UDI). Use the human readable information (the content that the user sees, which is sometimes different to the exact syntax represented in the barcode)  - see http://www.fda.gov/MedicalDevices/DeviceRegulationandGuidance/UniqueDeviceIdentification/default.htm.'
		},
		lotNumber: {
			type: GraphQLString,
			description: 'Lot number assigned by the manufacturer.'
		},
		_lotNumber: {
			type: require('./element.schema'),
			description: 'Lot number assigned by the manufacturer.'
		},
		owner: {
			type: require('./reference.schema'),
			description: 'An organization that is responsible for the provision and ongoing maintenance of the device.'
		},
		location: {
			type: require('./reference.schema'),
			description: 'The place where the device can be found.'
		},
		patient: {
			type: require('./reference.schema'),
			description: 'Patient information, if the resource is affixed to a person.'
		},
		contact: {
			type: new GraphQLList(require('./contactpoint.schema')),
			description: 'Contact details for an organization or a particular human that is responsible for the device.'
		},
		url: {
			type: UriScalar,
			description: 'A network address on which the device may be contacted directly.'
		},
		_url: {
			type: require('./element.schema'),
			description: 'A network address on which the device may be contacted directly.'
		}
	})
});
