/**
 * 
 * ? Idempotence in REST APIs
 * 
 * Idempotence meaning performing an operation multiple times should have the same outcome as performing it once.
 * 
 * example sending multiple identical GET requests should return the same data without causing any side effects.
 * 
 * Idempotent HTTP methods: GET, PUT, DELETE, HEAD, OPTIONS, TRACE
 * Non-idempotent HTTP methods: POST, CONNECT, PATCH
 *  
 * 
 * 
 * 
 */