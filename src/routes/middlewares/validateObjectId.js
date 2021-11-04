const schemaObjectId = require("../../resources/schemas/schema-objectId");

module.exports = async (req, res, next) => {
    const validated = await schemaObjectId(req.params);
    if(! validated)
        return res.status(500).send('Invalid Object Id');
    next();
}