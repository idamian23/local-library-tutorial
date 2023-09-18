const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    first_name: { type: String, require: true, maxLength: 100 },
    family_name: { type: String, require: true, maxLength: 100 },
    data_of_birth: { type: Date },
    data_of_death: { type: Date },
});

AuthorSchema.virtual("name").get(function () {
    let fullname = "";

    if (this.first_name && this.family_name) {
        fullname = `${this.family_name}, ${this.first_name}`;
    }

    return fullname;
});

AuthorSchema.virtual("url").get(function () {
    return `/catalog/author/${this._id}`;
});

module.exports = mongoose.model("Author", AuthorSchema);
