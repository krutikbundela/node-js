/**
 * 
 * 
 * ⚡ Events Module — Node.js
📌 What is events module?
The events module allows you to create and handle custom events in Node.js.
It is based on the Event-driven architecture.

👉 It is a core module (no installation required)

const EventEmitter = require('events');
🎯 What is Event-driven architecture?
Execution flow depends on events
When an event happens → a listener (callback) runs

👉 Example:

Button click → event triggered → handler runs
API request → event triggered → response sent
🧠 Core Concept
🔹 EventEmitter Class
Central class of events module
Used to:
Emit events
Listen to events
const emitter = new EventEmitter();
⚡ Basic Example
const EventEmitter = require('events');
const emitter = new EventEmitter();

// listener
emitter.on('greet', () => {
  console.log('Hello User!');
});

// emit event
emitter.emit('greet');

📌 Output:

Hello User!
🔑 Important Methods
1. 🎧 on() → Listen to event
emitter.on('eventName', callback);
2. 🚀 emit() → Trigger event
emitter.emit('eventName');
3. 🔁 once() → Run only once
emitter.once('login', () => {
  console.log('User logged in');
});

📌 Executes only first time

4. ❌ off() / removeListener()
emitter.off('eventName', callback);
5. 📊 listenerCount()
emitter.listenerCount('eventName');
📦 Passing Data with Events
emitter.on('userCreated', (name) => {
  console.log(`User: ${name}`);
});

emitter.emit('userCreated', 'Krutik');
⚠️ Important Concepts
🔹 Multiple Listeners
emitter.on('event', () => console.log('A'));
emitter.on('event', () => console.log('B'));

emitter.emit('event');

📌 Output:

A
B
🔹 Order Matters
Listeners execute in registration order
🔹 Error Handling (VERY IMPORTANT)
emitter.on('error', (err) => {
  console.error(err);
});

📌 If no error listener → Node will crash

🔥 Real-world Use Cases
Logging systems
Notification systems
Chat apps
Background jobs
Streams (internally use events)
🎯 Interview Points
events is a core module
Based on publish–subscribe pattern
EventEmitter is central class
emit() triggers, on() listens
Used internally in:
Streams
HTTP module
File system
🔁 Flow Summary
EventEmitter → Register listener → Emit event → Callback runs
🧠 Quick Summary
Method	Purpose
on()	Listen to event
emit()	Trigger event
once()	Run once
off()	Remove listener
💥 Interview Trick Question

👉 Is Node.js single-threaded? Then how events work?

✔ Answer:

Node.js is single-threaded
But uses event loop + async callbacks
Events allow non-blocking execution
 * 
 * 
 */