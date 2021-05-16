"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channel = void 0;
const channel = (req, res) => {
    try {
        res.status(200).send("working...");
    }
    catch (e) {
        console.log("error...");
    }
};
exports.channel = channel;
