/**
 * 
 * 
 * 
 * 📦 FS Module (File System) — Node.js
📌 What is fs module?
The fs module in Node.js is used to interact with the file system.
It allows you to:
Create files
Read files
Update files
Delete files
Work with directories

👉 It is a core module (no installation required)

const fs = require('fs');
⚡ Types of FS APIs
1. Synchronous (Blocking)
Executes line by line
Blocks the event loop until operation completes
const data = fs.readFileSync('file.txt', 'utf-8');
console.log(data);

📌 Use when:

Small scripts
CLI tools
2. Asynchronous (Non-blocking)
Uses callbacks
Does NOT block the event loop
fs.readFile('file.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

📌 Preferred in real applications

3. Promises (Modern approach)
const fs = require('fs/promises');

async function readFile() {
  const data = await fs.readFile('file.txt', 'utf-8');
  console.log(data);
}

📌 Best for:

Clean code
async/await usage
🧾 Common Methods
1. 📖 Read File
fs.readFile(path, encoding, callback);

OR

fs.readFileSync(path, encoding);
2. ✍️ Write File (overwrite)
fs.writeFile('file.txt', 'Hello', (err) => {});

📌 Creates file if not exists

3. ➕ Append File
fs.appendFile('file.txt', 'New Data', (err) => {});
4. ❌ Delete File
fs.unlink('file.txt', (err) => {});
5. 📁 Create Directory
fs.mkdir('folder', (err) => {});
6. 📂 Read Directory
fs.readdir('folder', (err, files) => {
  console.log(files);
});
7. ❌ Remove Directory
fs.rmdir('folder', (err) => {});
⚠️ Important Concepts
🔹 Blocking vs Non-blocking
Sync → Blocking
Async → Non-blocking (better for performance)
🔹 Error Handling

Always handle errors:

if (err) {
  console.error(err);
  return;
}
🔹 Encoding
'utf-8' → returns string
No encoding → returns buffer
🎯 Interview Points
fs is a core Node.js module
Prefer async methods over sync
fs/promises is modern and cleaner
Sync blocks event loop → bad for scalability
Used heavily in:
Logging
File uploads
Config management
🚀 Quick Summary
Feature	Description
Module Type	Core module
Purpose	File system operations
Sync	Blocking
Async	Non-blocking (preferred)
Promises	Modern async/await approach
 * 
 * 
 * 
 * 
 * 
*/