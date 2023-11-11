const mongoose = require("mongoose");

const querySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  query: {
    type: String,
    required: true,
  },
});

const Query = mongoose.model("QUERY", querySchema);

module.exports = Query;
