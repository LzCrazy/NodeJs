var mongoose = require('mongoose');
var MovieSchema = new mongoose.Schema({
    doctor: String,
    title: String,
    language: String,
    country: String,
    summary: String,
    poster: String,
    flash: String,
    year: Number,
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    },
});

// 存储之前调用
MovieSchema.pre('save', function (next) {
    // 新增的数据
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now();
    } else {
        this.meta.updateAt = Date.now();
    }
    next();
});


MovieSchema.statics = {
    // select all
    fetch: function (cb) {
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(cb);
    },
    // select by id
    findById: function (id, cb) {
        return this
            .findOne({
                _id: id
            })
            .exec(cb);
    }
};

module.exports = MovieSchema;
