const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
const subscribeMessage = (learningcom) => {
    console.log(`thanks for subscribing to the ${learningcom}`);
}
eventEmitter.addListener("subscribe", subscribeMessage);
console.log("calling the event before removing")
eventEmitter.emit("subscribe", "learningcom");

console.log("calling the event after removal of event listener");
eventEmitter.removeListener("subscribe", subscribeMessage);
eventEmitter.emit("subscribe","learningcom" );