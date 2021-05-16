"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.deleteReply = exports.create = exports.userList = exports.reviewList = void 0;
const reviewList = (req, res) => {
    try {
        res.status(200).send("working...");
    }
    catch (e) {
        console.log("error...");
    }
};
exports.reviewList = reviewList;
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
const deleteReply = (req, res) => {
    try {
        res.status(200).send("working...");
    }
    catch (e) {
        console.log(e);
    }
};
exports.deleteReply = deleteReply;
const update = (req, res) => {
    try {
        res.status(200).send("working...");
    }
    catch (e) {
        console.log(e);
    }
};
exports.update = update;
