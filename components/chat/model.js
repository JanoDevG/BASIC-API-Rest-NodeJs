const mongoose = require("mongoose");

constSchema = mongoose.Schema;

const mySchema = Schema({
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

const model = mongoose.model("Chat", mySchema);

module.exports = model;