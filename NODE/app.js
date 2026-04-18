
import EventEmitter from "events";

const emitter = new EventEmitter();


emitter.on('abc', () => {
    console.log("abc event fired 1");
});

emitter.on('x', () => {
    console.log("abc event fired 2");
});

emitter.emit("abc")
