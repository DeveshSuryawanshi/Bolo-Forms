const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    item: {type : String},
    belongesto: {type : String}
});

const formDataSchema = new mongoose.Schema({
  categories: {
    type: [String], 
    required: true
  },
  description: {
    type: String,
    required: true
  },
  questiontype: {
    type: String,
    required: true
  },
  points: {
    type: String,
    required: true
  },
  questions: {
    type: [questionSchema], 
  }
});

const FormDataSchema = new mongoose.Schema({
  id: Number,
  data: formDataSchema
})

const formSchema = new mongoose.Schema({
  formdata: {
    type: [FormDataSchema], 
    required: true
  }
},{
  versionKey : false
});


const FormModel = mongoose.model('form', formSchema);

module.exports = {FormModel};
