"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.edit = exports.signup = exports.signout = exports.signin = exports.userId = void 0;
const userId = (req, res) => {
    try {
        res.status(200).send("working...");
    }
    catch (e) {
        console.log("error...");
    }
};
exports.userId = userId;
const signin = (req, res) => {
    try {
        res.status(200).send("working...");
    }
    catch (e) {
        console.log("error...");
    }
};
exports.signin = signin;
const signout = (req, res) => {
    try {
        res.status(200).send("working...");
    }
    catch (e) {
        console.log("error...");
    }
};
exports.signout = signout;
const signup = (req, res) => {
    try {
        res.status(200).send("working...");
    }
    catch (e) {
        console.log(e);
    }
};
exports.signup = signup;
const edit = (req, res) => {
    try {
        res.status(200).send("working...");
    }
    catch (e) {
        console.log("error...");
    }
};
exports.edit = edit;
