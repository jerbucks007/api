const mongoose = require('mongoose');

module.exports = async (toValidate) => {

    const ObjectId = mongoose.Types.ObjectId;
    const valid = ObjectId.isValid(toValidate._id)

    return valid;
}