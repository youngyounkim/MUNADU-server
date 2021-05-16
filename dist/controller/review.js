"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.deleteReview = exports.create = exports.userList = exports.martialList = void 0;
const martialList = (req, res) => {
    try {
        res.status(200).send("working...");
    }
    catch (e) {
        console.log("error...");
    }
};
exports.martialList = martialList;
const userList = (req, res) => {
    try {
        res.status(200).send("working...");
    }
    catch (e) {
        console.log("error...");
    }
};
exports.userList = userList;
const create = (req, res) => {
    try {
        res.status(200).send("working...");
    }
    catch (e) {
        console.log("error...");
    }
};
exports.create = create;
const deleteReview = (req, res) => {
    try {
        res.status(200).send("working...");
    }
    catch (e) {
        console.log(e);
    }
};
exports.deleteReview = deleteReview;
const update = (req, res) => {
    try {
        res.status(200).send("working...");
    }
    catch (e) {
        console.log("error...");
    }
};
exports.update = update;
