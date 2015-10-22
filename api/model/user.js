/**
 * Created by stephenwu on 8/25/15.
 */
var mongoose                    = require('mongoose');
var Schema                      = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
    name: String,
    password: String,
    admin: Boolean
}));