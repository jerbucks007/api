const { Validator } = require('jsonschema');
const ajv = new Validator();

module.exports = async (toValidate) => {

    const schema = {
        type: "object",
        properties: {
            name: {
                type: String
            },
            address: {
                type: String
            },
            contactnumber: {
                type: "integer"
            }
        },
        required: ["name", "address", "contactnumber"]
    };

    const valid = ajv.validate(toValidate, schema)
    return valid;
}