/**
 * Stateful vs Stateless Authentication in Node.js
 * 
 *? Stateful Authentication(Session-based): 
 * - Server maintains session state (session ID) (e.g., in-memory or database)
 * - Client sends session ID with each request (e.g., via cookies) 
 * - Session data is stored server-side
 * 
 * !Problems:
 *  - If server restarts, all session data is lost (unless stored in a persistent store)
 * - Scalability issues (session data must be shared across servers)
 * - Server memory usage increases with session count
 * - horizontal scaling will cause problem (requires session replication or sticky sessions)[sticky sessions: it ensures ensures all requests from a specific client during a single session are consistently routed to the same backend server. sticky sessions can lead to uneven load distribution]==> to solve this we will create a centralized session store (e.g., Redis) to share session data across servers
 *  - so we have to maintain huge session store (e.g., Redis) to share session data across servers 
 * 
 * 
 * 
 * 
 * 
 *? Stateless Authentication (JWT):
 * - first user logs in and server generates a JWT token containing user information and signs it with a secret key
 * - Client receives the JWT token and stores it (e.g., in local storage or cookies)
 * - Client sends JWT token with each request (e.g., in Authorization header)
 * - Server verifies the JWT token using the secret key and extracts user information from it
 * 
 * !Advantages:
 * - No server-side session storage
 * - No server-side session storage
 * - JWT tokens contain all necessary information
 * 
 */