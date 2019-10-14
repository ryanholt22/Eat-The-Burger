var orm = require("../config/orm.js");
var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    update: function(cols, vals, cb) {
        orm.update("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    create: function(objColVals, condition, cb) {
        orm.create("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;