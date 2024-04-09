const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
const subscribeMessage = (learningcom) => {
    console.log(`thanks for subscribing to ${learningcom}`);
};
eventEmitter.addListener("subscribe", subscribeMessage);
eventEmitter.emit("subscribe", "learningcom");

console.log(`the max number of event listeners are : ${eventEmitter.getMaxListeners()}`);
eventEmitter.setMaxListeners(5);
console.log(`the updated max num of event listener is : ${eventEmitter.getMaxListeners()}`);