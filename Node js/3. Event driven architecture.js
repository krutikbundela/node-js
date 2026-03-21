/**
 * ? What is Event-driven architecture?
 * * * Event-driven architecture is a software design pattern in which the flow of the program is determined by events, such as user actions or system events. In this architecture, components of the system communicate with each other through events, rather than direct method calls. This allows for greater flexibility and scalability, as components can be added or removed without affecting the overall system. In Node.js, event-driven architecture is a core principle, and it allows for efficient handling of concurrent connections and asynchronous operations.
 * 
 * ? Components of Event-driven architecture
 * *1.Events: Events are the core of event-driven architecture. They represent actions or occurrences that can trigger a response from the system. In Node.js, events can be emitted by various components, such as user interactions, network requests, or timers.
 * example: events can be  a user clicking a button, a file being uploaded, or a timer expiring.
 * 
 * *2. Event Emitters: Event emitters are objects that can emit events and allow other components to listen for those events. In Node.js, the EventEmitter class is used to create event emitters. Components can subscribe to specific events emitted by an event emitter and define callback functions to handle those events when they occur.
 * example: In Node.js, you can create an event emitter using the EventEmitter class and emit events using the emit() method. Other components can listen for those events using the on() method and define callback functions to handle them.
 * 
 * *3. Event Listeners: Event listeners are functions that are registered to listen for specific events emitted by event emitters. When an event is emitted, the corresponding event listeners are executed, allowing the system to respond to the event in a timely manner.
 * example: In Node.js, you can register an event listener using the on() method of an event emitter. When the specified event is emitted, the registered callback function will be executed to handle the event.
 * 
 * 
 * *4. Event Loop: The event loop is a fundamental part of the event-driven architecture in Node.js. It is responsible for continuously checking the event queue for new events and processing them in a non-blocking manner. The event loop allows Node.js to handle multiple concurrent events efficiently without blocking the execution of code, making it well-suited for building scalable and responsive applications.
 * example: In Node.js, the event loop continuously checks for new events in the event queue and processes them as they arrive. This allows Node.js to handle multiple concurrent events without blocking the execution of code, making it efficient for building real-time applications and handling I/O operations.
 * 
 * * 5. Event queue: The event queue is a data structure that holds events that have been emitted but have not yet been processed. In Node.js, the event loop continuously checks the event queue for new events and processes them in a non-blocking manner. This allows for efficient handling of concurrent events without blocking the execution of code.
 * example: In Node.js, when an event is emitted, it is added to the event queue. The event loop continuously checks the event queue for new events and processes them as they arrive. This allows Node.js to handle multiple concurrent events without blocking the execution of code, making it efficient for building real-time applications and handling I/O operations.
 * 
 * 
 * 
 * 
 * 
 */