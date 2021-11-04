const models = require('../models');

const service = {};

service.getUser = async (_id) => {
    let user;
    if(_id)
        user = await models.main.users.findOne({_id});
    else
        user = await models.main.users.find({});
    return user;
}

service.saveUser = async (body) => {
    const newUser = models.main.users({ ...body, isActive: true });
    const new_user = await newUser.save();
    return new_user;
}

service.updateUser = async (_id, body) => {
    const user = await models.main.users.update({_id}, { $set: { ...body } });
    return user;
}

service.deleteUser = async (_id) => {
    const { deleted = 0 } = await models.main.users.deleteOne({_id});
    return deleted;
}

module.exports = service