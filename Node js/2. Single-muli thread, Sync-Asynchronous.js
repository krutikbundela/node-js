/**
 * ? what is Single Thread in Node js?
 * * * Single-threaded means that Node.js operates on a single thread of execution. This means that all code runs in a single thread, and only one operation can be performed at a time. However, Node.js uses an event-driven architecture and asynchronous programming to handle multiple concurrent connections efficiently without blocking the execution of code.
 * 
 * ? what is Synchronous in Node js?
 * * * Synchronous programming means that code is executed sequentially, and each operation must complete before the next one can begin. In a synchronous model, if a task takes a long time to complete, it can block the execution of other tasks, leading to performance issues. However, Node.js primarily uses asynchronous programming, which allows it to perform non-blocking operations and handle multiple tasks concurrently without waiting for each task to finish.
 * 
 * 
 * ? what is Multi-thread in Node js?
 * * * * Multi-threading in Node.js is achieved through the use of worker threads. Worker threads allow you to run JavaScript code in parallel on multiple threads, which can be useful for CPU-intensive tasks. However, it's important to note that Node.js itself is single-threaded, and worker threads are a way to offload work to separate threads while still maintaining the single-threaded nature of the main event loop.
 * 
 * 
 * ? what is Asynchronous in Node js?
 * * * Asynchronous programming in Node.js allows you to perform non-blocking operations. This means that while one task is being executed, other tasks can continue to run without waiting for the first task to finish. Asynchronous programming is typically achieved using callbacks, promises, or async/await syntax. This approach helps improve performance and responsiveness, especially when dealing with I/O operations or long-running tasks.
 * 
 * ? Synchronous vs Asynchronous in Node.js
 * 
 * | Feature       | Synchronous                     | Asynchronous                    |
| ------------- | ------------------------------- | ------------------------------- |
| Execution     | Sequential                      | Non-blocking                     |
| Performance   | Can be slower due to blocking   | Faster due to non-blocking        |
| Use Cases     | Simple tasks, small scripts     | I/O operations, long-running tasks |

 * 
 *
 * 
 * 
 */