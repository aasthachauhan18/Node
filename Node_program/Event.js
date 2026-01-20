// const { emit } = require("cluster");
// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// emitter.on("abc" , ()=>{
//     console.log("Hello");
    

// });

// emitter.emit("abc");


const EventEmitter = require("events");
const readline = require("readline");

const emitter = new EventEmitter();

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

emitter.on("abc" , (name)=>{
    console.log(`Hello ${name}`);
    
});
r1.question("Enter your name : ", (username) =>{
    emitter.emit("abc",username);
    r1.close();
})