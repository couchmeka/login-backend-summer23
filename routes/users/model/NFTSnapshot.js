const mongoose = require('mongoose');

const nftSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  firstname: {
    type: String,
  },
  timestamp: {
    type: Date,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model('NFTSnapshot', nftSchema);



