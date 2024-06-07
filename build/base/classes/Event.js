"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Event {
    constructor(client, options) {
        this.client = client;
        this.description = options.description;
        this.name = options.name;
        this.once = options.once;
    }
    Execute(...args) { }
}
exports.default = Event;
