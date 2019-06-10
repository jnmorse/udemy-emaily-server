const mongoose = require('mongoose')

const { Schema } = mongoose
const recipient = require('./Recipient')

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [recipient],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date,
  lastResponed: Date
})

mongoose.model('surveys', surveySchema)
