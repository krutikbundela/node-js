/**
 * 
 * ? HTTP methods: are set of actions 
 * 
 * ? 1. GET (Read Data)
👉 Purpose

Fetch data from server

👉 Example
GET /users
👉 Key Points

No data is changed ❌

Safe & fast

Can be cached

👉 Use when: you want to read data

 * ? 2. POST (Create Data)
👉 Purpose

Send data to server to create something new

👉 Example
POST /users
{
  "name": "Krutik"
}
👉 Key Points

Creates new resource

Data sent in request body

👉 Use when: creating new record

 * ? 3. PUT (Update Full Data)
👉 Purpose

Update entire resource (replace)

👉 Example
PUT /users/1
{
  "name": "Krutik",
  "age": 23
}
👉 Key Points

Replaces whole object

If field missing → it may be removed

👉 Use when: updating full data

 * ? 4. PATCH (Update Partial Data)
👉 Purpose

Update only specific fields

👉 Example
PATCH /users/1
{
  "age": 24
}
👉 Key Points

Only updates provided fields

More efficient than PUT

👉 Use when: partial update

 * ? 5. DELETE (Remove Data)
👉 Purpose

Delete a resource

👉 Example
DELETE /users/1
👉 Key Points

Permanently removes data

👉 Use when: deleting something

 * ? 6. HEAD
👉 Purpose

Same as GET but no response body

👉 Use Case

Check if resource exists

Get metadata (headers only)

 * ? 7. OPTIONS
👉 Purpose

Tells which methods are allowed

👉 Use Case

Used in CORS (important for React + backend)

 * ? 8. CONNECT
👉 Purpose

Used to create a tunnel (mostly HTTPS)

👉 Rarely used in normal development

 * ? 9. TRACE
👉 Purpose

Debugging (returns request back)

👉 Almost never used

🔥 Most Important (For YOU)

👉 Focus on these 5:

GET

POST

PUT

PATCH

DELETE

🔹 Quick Summary Table
Method	Action	Example Use
GET	Read	Get users
POST	Create	Add user
PUT	Replace	Update full user
PATCH	Modify	Update age
DELETE	Remove	Delete user
🔹 Easy Way to Remember

👉 CRUD Mapping:

Create → POST

Read → GET

Update → PUT / PATCH

Delete → DELETE

🔹 One-line summary

👉 HTTP methods = actions you perform on data via APIs

🔥 MERN Interview Tip

If asked:

Difference between PUT and PATCH?

👉 Answer:

PUT replaces full data

PATCH updates only specific fields
 * 
 * 
 */