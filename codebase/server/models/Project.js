const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const projectSchema = new Schema({
  projectTitle: {
    type: String,
    required: 'You need to leave a project title!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  projectText: {
    type: String,
    required: 'You need to leave a description!',
    minlength: 1,
    maxlength: 40000,
    trim: true,
  },
  projectAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  // dsybr: Added members to the schema so projects can have clearly defined members
  // members: [
  //   {
  //     member: {
  //       type: Schema.Types.ObjectId,
  //       ref: 'User',
  //       required: true,
  //     },
  //     memberRole: {
  //       type: String,
  //       required: true,
  //       trim: true,
  //     },
  //   },
  // ],
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Project = model('Project', projectSchema);

module.exports = Project;
