/***
 * 
 * 
 * m-level details like:
CPU info
Memory
Platform
User info

👉 It is a core module (no installation required)

const os = require('os');
⚡ Common Methods
1. 🧠 os.arch()
Returns CPU architecture
os.arch(); // 'x64'
2. 💻 os.platform()
Returns OS platform
os.platform(); // 'win32', 'linux', 'darwin'
3. 🧾 os.hostname()
Returns system hostname
os.hostname();
4. 👤 os.userInfo()
Returns current user details
os.userInfo();
5. ⏱️ os.uptime()
System uptime (in seconds)
os.uptime();
6. 💾 Memory Info
os.totalmem(); // total RAM (bytes)
os.freemem();  // free RAM (bytes)
7. 🧮 CPU Info
os.cpus();

📌 Returns array of CPU core details

8. 📊 Load Average (Linux/Mac)
os.loadavg();

📌 Not useful on Windows (returns [0,0,0])

9. 📂 os.homedir()
Returns home directory
os.homedir();
10. 🌐 os.networkInterfaces()
Returns network details
os.networkInterfaces();
⚠️ Important Concepts
🔹 Returns Raw System Info
Values are often in:
bytes (memory)
seconds (uptime)

👉 You may need to convert manually

🔹 Platform-dependent
Some methods behave differently across OS:
loadavg() → works only on Linux/Mac
🔹 No System Control
os module is read-only
Cannot modify OS settings
🔥 Real-world Use Cases
Monitoring system health
Logging server metrics
Scaling decisions (CPU cores)
Dev tools / CLI tools
🎯 Interview Points
os is a core module
Used to get system information
Helps in:
Performance optimization
Debugging
os.cpus().length → number of CPU cores (very common)
💥 Common Interview Snippet
const os = require('os');

console.log(os.cpus().length);

👉 Used for clustering / scaling apps

🧠 Quick Summary
Method	Purpose
arch()	CPU architecture
platform()	OS type
hostname()	System name
userInfo()	User details
uptime()	System uptime
totalmem()	Total RAM
freemem()	Free RAM
cpus()	CPU core info
networkInterfaces()	Network details
🚀 Pro Tip

👉 Combine os + cluster module
→ Create scalable Node.js apps using all CPU cores
 * 
 * 
 * 
 */