const mongoose = require('mongoose');
// Define Schemes
const studySchema = new mongoose.Schema({
    study_id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true },
    title: { type: String, required: true },
    category: { type: String },
    difficulty: { type: Number },
    isOffline: { type: Boolean, default: true },
    location: { type: String },
    subject: { type: String, required: true },
    contents: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    imgSrc: { type: String, default: "" },
    host: { type: String, required: true },
    hostName: { type: String, required: true },
    member: { type: Array },
    eventList: { type: Array },
    subGoal: { type: Array },
    boardList: { type: Array },
    progressStatus: { type: String },
    likeUser: { type: Array },
    createdDate: { type: Date }
},
    {
        timestamps: true
    });

// Create new document
studySchema.statics.create = function (payload) {
    // this === Model
    const study = new this(payload);
    // return Promise
    return study.save();
};

// Find All
studySchema.statics.findAll = function () {
    // return promise
    // V4부터 exec() 필요없음
    return this.find({});
};

// Find One by id
studySchema.statics.findOneByTodoid = function (todoid) {
    return this.findOne({ study_id });
};

// Update by id
studySchema.statics.updateByTodoid = function (todoid, payload) {
    // { new: true }: return the modified document rather than the original. defaults to false
    return this.findOneAndUpdate({ study_id }, payload, { new: true });
};

// Delete by todoid
studySchema.statics.deleteByTodoid = function (todoid) {
    return this.remove({ study_id });
};

// Create Model & Export
module.exports = mongoose.model('study', studySchema);