
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
const subscribeMessage = (learningcom) => {
    console.log(`thanks for subscribing to ${learningcom}`);
};
eventEmitter.addListener("subscribe", subscribeMessage);
eventEmitter.emit("subscribe", "learningcom");
