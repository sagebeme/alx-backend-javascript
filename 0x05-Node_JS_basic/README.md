# 0x05. Node.js basic

This project practices **Node.js** basics: console output, reading from stdin, reading files (sync and async), and building HTTP servers with the built-in `http` module and with **Express**.

---

## What does each file do?

Each answer is the **problem the file solves** and how to run it.

### **What does `0-console.js` do?**  
It exports **`displayMessage(string)`** that prints the string to the console with `console.log`. You practice exporting a function and using the console.  
**Run:** `node 0-main.js` or require and call from REPL.

### **What does `1-stdin.js` do?**  
It **reads from stdin** (e.g. user's name) and displays a welcome message. You practice reading user input in Node.  
**Run:** `node 1-stdin.js`, then type a name and press Enter.

### **What does `2-read_file.js` do?**  
It exports a function (e.g. **`countStudents`**) that **reads a file synchronously** (e.g. CSV), parses it, and prints counts by field (e.g. number of students per major). It should throw an error if the file does not exist.  
**Run:** `node 2-main_0.js database.csv` (or 2-main_1.js).

### **What does `3-read_file_async.js` do?**  
It exports the **same logic as 2** but uses **async file reading** (e.g. `fs.promises.readFile` or callbacks) and returns a Promise. You practice non-blocking I/O.  
**Run:** `node 3-main_0.js database.csv` (or 3-main_1.js).

### **What does `4-http.js` do?**  
It creates a simple **HTTP server** with the built-in `http` module that responds to **GET /** with a plain text message (e.g. "Hello Holberton School!").  
**Run:** `node 4-http.js`, then open the given port in the browser or use `curl`.

### **What does `5-http.js` do?**  
It creates an **HTTP server** that responds to **GET /** with an **HTML page** (e.g. containing "Hello Holberton School!"). You practice setting the right Content-Type and sending HTML.  
**Run:** `node 5-http.js`, then curl or open in browser.

### **What does `6-http_express.js` do?**  
It creates an **Express app** that responds to **GET /** with a plain text message. You practice using Express instead of raw `http`.  
**Run:** `node 6-http_express.js`, then curl the app port.

### **What does `7-http_express.js` do?**  
It extends the Express app (e.g. **GET /** and possibly other routes) with the same or additional behavior. You practice defining routes in Express.  
**Run:** `node 7-http_express.js`.

### **What do `0-main.js`, `2-main_0.js`, `2-main_1.js`, `3-main_0.js`, `3-main_1.js` do?**  
They are **runner scripts** that load the task module and call it (e.g. pass the CSV path to the read_file function or start the server). Use them to test your implementation.

### **What is `database.csv`?**  
A **sample CSV file** used by the read_file tasks to demonstrate parsing and counting (e.g. by field).

### **What are `babel.config.js` and `.eslintrc.js`?**  
**Babel** and **ESLint** config for the project (transpilation and linting). You usually don't edit them for the tasks.
