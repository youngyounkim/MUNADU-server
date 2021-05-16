"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rank = exports.bookmark = exports.list = exports.info = void 0;
const info = (req, res) => {
    try {
        res.status(200).send("working...");
    }
    catch (e) {
        console.log("error...");
    }
};
exports.info = info;
const list = (req, res) => {
    try {
        res.status(200).send("working...");
    }
    catch (e) {
        console.log("error...");
    }
};
exports.list = list;
const bookmark = (req, res) => {
    try {
        res.status(200).send("working...");
    }
    catch (e) {
        console.log("error...");
    }
};
exports.bookmark = bookmark;
const rank = (req, res) => {
    try {
        res.status(200).send("working...");
    }
    catch (e) {
        console.log(e);
    }
};
exports.rank = rank;
