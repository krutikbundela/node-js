/**
 * ?What is CORS?

CORS (Cross-Origin Resource Sharing) is a browser security mechanism that controls how resources on one origin (domain + protocol + port) can be requested from another origin.

It is built on top of the browser’s Same-Origin Policy (SOP).

*? 1. Same-Origin Policy (Why CORS Exists)
The browser only allows requests when:
Protocol is same (http vs https)
Domain is same (example.com)
Port is same (3000, 5173, etc.)


 */
app.use(cors()); // Enable CORS for all routes and origins

/**
 * ?2. CORS Headers
When a browser makes a cross-origin request, the server can include specific headers in the response to indicate whether the request is allowed.    
- Access-Control-Allow-Origin: Specifies which origins are allowed to access the resource. It can be a specific origin (e.g., http://example.com) or a wildcard (*) to allow all origins.
- Access-Control-Allow-Methods: Specifies which HTTP methods (e.g., GET, POST, PUT) are allowed when accessing the resource.
- Access-Control-Allow-Headers: Specifies which headers can be used in the actual request.
- Access-Control-Allow-Credentials: Indicates whether the response to the request can be exposed when the credentials flag is true. It allows cookies and HTTP authentication to be included in cross-origin requests.

 */

app.use(
  cors({
    origin: "http://example.com", // Allow only requests from this origin
    methods: ["GET", "POST"], // Allow only GET and POST requests
    allowedHeaders: ["Content-Type", "Authorization"], // Allow only specific headers
    credentials: true, // Allow cookies and HTTP authentication
  }),
);



/**
 * 🛫 What is a Preflight Request?

A preflight request is a special request sent by the browser before the actual API request to check:

👉 “Does the server allow this cross-origin request?”

It is part of the CORS mechanism.

🧠 Why Preflight Exists

Some requests are considered potentially risky:

Sending authentication headers

Using non-standard HTTP methods

Sending JSON with custom headers

So instead of sending the real request directly, the browser first asks permission.

🔎 How Preflight Works (Step-by-Step)

Imagine:

React app → http://localhost:5173
Express API → http://localhost:5000

Frontend sends:

fetch("http://localhost:5000/api/users", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer token"
  },
  body: JSON.stringify(data)
});
✅ Step 1 — Browser sends PRE-FLIGHT (OPTIONS request)

Before actual request:

OPTIONS /api/users
Origin: http://localhost:5173
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: Content-Type, Authorization

This is NOT your real request.

It’s just a permission check.

✅ Step 2 — Server must respond

Server replies:

Access-Control-Allow-Origin: http://localhost:5173
Access-Control-Allow-Methods: GET,POST,PUT,DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
✅ Step 3 — Browser decides

If allowed:

👉 Browser sends actual PUT request.

If not:

👉 Browser blocks request (CORS error).

🔥 Visual Flow
React App
   |
   | (OPTIONS request)
   ↓
Express Server
   |
   | (Allowed headers/methods?)
   ↓
Browser checks response
   |
   | YES → Send real request
   | NO  → Block
⚠️ When Does Preflight Happen?

Not every request triggers preflight.

🚫 No Preflight (Simple Requests)

If:

Method = GET / POST / HEAD

Content-Type =

text/plain

application/x-www-form-urlencoded

multipart/form-data

No custom headers

✅ Preflight Happens When:

Method is:

PUT

DELETE

PATCH

OR

Using headers like:

Authorization
X-Custom-Header

OR

Content-Type is:

application/json   ← VERY COMMON (React apps)
 */