const mongoose = require('mongoose');
let patientSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: "Required"
    },
    password: {
        type: 'string',
        required: "Required"
    },
    email: {
        type: 'string',
        required: "Required"
    },
    phone: {
        type: 'string',
        required: "Required"
    },
    adhar: {
        type: 'string',
        required: "Required"
    },
    dob: {
        type: 'string',
        required: "Required"
    },
    sex: {
        type: 'string',
        required: "Required"
    },
    allergies: {
        type: 'string',
        required: "Required"
    },
    medical: {
        type: 'string',
        required: "Required"
    }
});

mongoose.model("Patient",patientSchema);
