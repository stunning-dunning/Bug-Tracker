const mongoose = require('mongoose');
const bugSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    'default': Date.now
  },
  status: {
      type: String,
      required: true
  },
  severity: {
    type: String,
    required: true
  }
});
const projectSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    owner: {
        type: String,
        required: true
    },
    description: String,
    bugs: [bugSchema]
  });
  
  mongoose.model('Project', projectSchema);