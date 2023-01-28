const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    resume:{
        type: String,
    },
    email: {
        type: String,
    },
    location: {
        type: String,
    },
    skills : {
        type: String,
    },
    degree: {
        type: String,
    },
    edu_info : {
        type: String,
    },
    joblist : [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Job'
        }
    ]
});

module.exports = mongoose.model('Employee', EmployeeSchema);