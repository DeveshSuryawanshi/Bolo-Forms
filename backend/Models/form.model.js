const mongoose = require('mongoose');
const { Schema } = mongoose;

const formSchema = new mongoose.Schema({
  formData: { type: [Schema.Types.Mixed], default: [] },
});

const FormModel = mongoose.model('form', formSchema);

module.exports = {FormModel};

