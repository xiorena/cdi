const mongoose = require('mongoose');
const cdiSchema = require('./cdi.model');

cdiSchema.statics = {
    create: function (data, cb) {
        const user = new this(data);
        user.save(cb);
    },
    login: function (query, cb) {
        this.find(query, cb);
    }
}

const cdiModel = mongoose.model('Users', cdiSchema);
module.exports = cdiModel;