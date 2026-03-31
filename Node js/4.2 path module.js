/**
 * 
 * 
 * 📦 Path Module — Node.js
📌 What is path module?
The path module is used to work with file and directory paths.
Helps handle paths in a cross-platform way (Windows vs Linux)

👉 It is a core module (no installation required)

const path = require('path');
🎯 Why use path module?

Without path:

const fullPath = __dirname + '/files/data.txt'; // ❌ not safe

With path:

const fullPath = path.join(__dirname, 'files', 'data.txt'); // ✅ safe

📌 Handles:

/ vs \
Absolute vs relative paths
⚡ Important Methods
1. 🧩 path.join()
Joins multiple path segments into one
path.join('folder', 'file.txt');
// folder/file.txt
path.join(__dirname, 'files', 'data.txt');

📌 Automatically fixes slashes

2. 🎯 path.resolve()
Returns absolute path
path.resolve('file.txt');
// /full/system/path/file.txt
path.resolve(__dirname, 'files', 'data.txt');

📌 Starts from current directory

3. 📂 path.basename()
Returns file name
path.basename('/user/test/file.txt');
// file.txt
4. 📁 path.dirname()
Returns directory path
path.dirname('/user/test/file.txt');
// /user/test
5. 🧾 path.extname()
Returns file extension
path.extname('file.txt');
// .txt
6. 🔍 path.parse()
Returns object with details
path.parse('/user/test/file.txt');

Output:

{
  root: '/',
  dir: '/user/test',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
7. 🔗 path.format()
Converts object → path
path.format({
  dir: '/user/test',
  name: 'file',
  ext: '.txt'
});
⚠️ Important Concepts
🔹 __dirname vs __filename
console.log(__dirname);  // folder path
console.log(__filename); // full file path
🔹 Absolute vs Relative Path
Type	Example
Absolute	/users/app/file.js
Relative	./file.js
🔹 OS Compatibility
Windows → \
Linux/Mac → /

👉 path module handles this automatically

🎯 Interview Points
path is a core module
Used to avoid manual string path handling
join() vs resolve() (VERY COMMON QUESTION):
join() → just joins
resolve() → returns absolute path
Prevents bugs in cross-platform apps
🔥 join vs resolve (Important)
path.join('/a', '/b');    // /a/b
path.resolve('/a', '/b'); // /b

📌 resolve() treats /b as root and ignores /a

🚀 Quick Summary
Method	Purpose
join()	Join paths safely
resolve()	Get absolute path
basename()	File name
dirname()	Folder path
extname()	File extension
parse()	Path → object
format()	Object → path
 * 
 * 
 * 
 */