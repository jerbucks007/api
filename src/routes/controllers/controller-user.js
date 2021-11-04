
const serviceUser = require("../../services/service-user");

const fn = {};

fn.get = async (req, res) => {
    const { _id } = req.params;
    const user = await serviceUser.getUser(_id);
    if(user) return res.send(user);
    return res.status(404).send("User Doesn't Exist");
}

fn.save = async (req, res) => {
    const body = req.body;
    const result = await serviceUser.saveUser(body);
    if(result) return res.status(201).send('User Successfully Created');
    return res.status(500).send('User Failed to Create');
}

fn.update = async (req, res) => {
    const body = req.body;
    const { _id } = req.params;
    const result = await serviceUser.updateUser(_id, body);
    if(result.matchedCount > 0) return res.status(201).send('User Successfully Updated');
    return res.status(500).send('User Failed to Update');
}

fn.delete = async (req, res) => {
    const { _id } = req.params;
    const result = await serviceUser.deleteUser(_id);
    if(result) return res.status(204).send('User Successfully Deleted');
    return res.status(500).send('User Failed to Delete');
}

module.exports = fn;

