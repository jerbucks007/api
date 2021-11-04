
module.exports = (mongoose, connection) => {

  const schema = new mongoose.Schema({
    name: { type: String },
    address: { type: String },
    contactnumber: { type: Number },
    isActive: { type: Boolean }
  }, { timestamps: true, minimize: false });

  const model = connection.model('users', schema);
  return model;
  
};
