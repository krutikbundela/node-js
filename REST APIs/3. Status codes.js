/***
 *  
 * 👉 What are Status Codes?

👉 HTTP status codes are numbers sent by the server to tell the client what happened with the request

🔹 5 Categories of Status Codes
Range	Meaning
1xx	Informational
2xx	Success ✅
3xx	Redirection 🔁
4xx	Client Error ❌
5xx	Server Error 💥
🔹 1. 2xx (Success)
✅ 200 OK

👉 Request successful
Example: GET users

✅ 201 Created

👉 Resource created
Example: POST user

✅ 204 No Content

👉 Success but no data returned

🔹 2. 3xx (Redirection)
🔁 301 Moved Permanently

👉 Resource moved to new URL

🔁 302 Found

👉 Temporary redirect

👉 Not very common in APIs (more in websites)

🔹 3. 4xx (Client Errors)
❌ 400 Bad Request

👉 Invalid input
Example: missing required fields

❌ 401 Unauthorized

👉 Not logged in

❌ 403 Forbidden

👉 No permission

❌ 404 Not Found

👉 Resource not found

🔹 4. 5xx (Server Errors)
💥 500 Internal Server Error

👉 Something broke on server

💥 502 Bad Gateway

👉 Server got bad response from another server

💥 503 Service Unavailable

👉 Server down / overloaded

🔥 Most Important (For YOU)

👉 Focus on these:

200 → success

201 → created

400 → bad request

401 → unauthorized

403 → forbidden

404 → not found

500 → server error
 * 
 * 
 */