const schemaUser = require("../../resources/schemas/schema-user");

module.exports = async (req, res, next) => {
    const validation = await schemaUser(req.body);
    if(validation.errors.length > 0)
        return res.status(500).send('Invalid format in Body');
    next();
}