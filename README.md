# ALX Backend — JavaScript

Backend JavaScript track: **ES6 Promises**, **ES6 Classes**, **ES6 Data manipulation**, **Node.js basics**, and **Unit testing (Mocha/Chai/Sinon)**. This README explains **what each folder and file does** and **how to run the exercises** so you can follow or redo them yourself.

---

## Repository structure

| Folder | Topic | What you'll practice |
|--------|--------|----------------------|
| `0x01-ES6_promise` | Promises & async | Promise, then/catch, async/await, try/catch |
| `0x02-ES6_classes` | ES6 classes | class, constructor, getters/setters, inheritance |
| `0x03-ES6_data_manipulation` | Arrays & structures | map, filter, reduce, Set, Map, TypedArrays |
| `0x05-Node_JS_basic` | Node.js | Console, stdin, readFile (sync/async), HTTP server, Express |
| `0x06-unittests_in_js` | Testing | Mocha, Chai, Sinon (spies, stubs), async tests, skip |

---

## Prerequisites

- **Node.js 12.11.x** (or compatible LTS)
- **npm** for installing dependencies

Per-project setup (typical):

```bash
cd <project_folder>
npm install
```

Many tasks use **Babel** for ES6+ and **Jest** or **Mocha** for tests; see each folder’s `package.json` and README.

---

## 0x01 — ES6 Promises

**Problem:** Async operations (APIs, I/O) need a consistent way to handle success and failure and to chain or combine results. Promises (and later async/await) solve that. This project practices creating and consuming Promises.

### Files and what they solve

| File | Problem solved | How to run |
|------|----------------|------------|
| `0-promise.js` | Return a Promise from a function | `npm run dev 0-main.js` |
| `1-promise.js` | Resolve or reject based on boolean (getFullResponseFromAPI) | `npm run dev 1-main.js` |
| `2-then.js` | Append .then/.catch to a promise; log "Got a response from the API" | `npm run dev 2-main.js` |
| `3-all.js` | handleProfileSignup: Promise.all(uploadPhoto, createUser); log body, firstName, lastName | `npm run dev 3-main.js` |
| `4-user-promise.js` | signUpUser(firstName, lastName) → resolved promise with { firstName, lastName } | `npm run dev 4-main.js` |
| `5-photo-reject.js` | uploadPhoto(fileName) → reject with Error | `npm run dev 5-main.js` |
| `6-final-user.js` | handleProfileSignup: Promise.allSettled(signUpUser, uploadPhoto); return status/value array | `npm run dev 6-main.js` |
| `7-load_balancer.js` | Return the value of the promise that resolves first (chinaDownload, USDownload) | `npm run dev 7-main.js` |
| `8-try.js` | divideFunction(numerator, denominator); throw if denominator === 0 | `npm run dev 8-main.js` |
| `9-try.js` | guardrail(mathFunction): run function, push result or error message to queue, push "Guardrail was processed" | `npm run dev 9-main.js` |
| `utils.js` | uploadPhoto / createUser (return resolved promises) — provided for tasks | Used by 3-all, etc. |

### Doing the exercises yourself

1. **0:** `return new Promise((resolve) => resolve(...));` or `return Promise.resolve(...)`.
2. **1:** Inside Promise executor: if `success` then resolve with `{ status: 200, body: 'Success' }`, else reject with `new Error('...')`.
3. **2–3:** Use `.then()` and `.catch()`; for 3, use `Promise.all([uploadPhoto(), createUser()])` and log the required fields.
4. **4–6:** Return promises (resolve/reject); for 6 use `Promise.allSettled` and map to `{ status, value }` or `{ status, reason }`.
5. **7:** `Promise.race([chinaDownload, USDownload])`.
6. **8–9:** Synchronous throw and try/catch; 9 builds an array with result or error message and "Guardrail was processed".

Run from project dir: `npm run dev <file>.js`.

---

## 0x02 — ES6 Classes

**Problem:** Model real-world entities (classrooms, courses, pricing, buildings, airports, cars) with classes, getters/setters, and inheritance. This project practices ES6 class syntax and OOP in JavaScript.

### Files and what they solve

| File | Problem solved | How to run |
|------|----------------|------------|
| `0-classroom.js` | ClassRoom class with maxStudentsSize | Import and instantiate; use in 1-make_classrooms |
| `1-make_classrooms.js` | Create array of ClassRoom instances (sizes 19, 20, 34) | `npm run dev 1-main.js` or test |
| `2-hbtn_course.js` | HolbertonCourse (name, length, students) with getters/setters | Jest/test |
| `3-currency.js` | Currency class (code, name) | Used by 4-pricing |
| `4-pricing.js` | Pricing (amount, currency); displayFullPrice method | Jest/test |
| `5-building.js` | Building (sqft); EvacuationWarningMessage abstract | Used by 6 |
| `6-sky_high.js` | SkyHighBuilding extends Building (floors); evacuation message | Jest/test |
| `7-airport.js` | Airport (name, code); default string description | Jest/test |
| `8-hbtn_class.js` | HolbertonClass (size, location) | Used by 9 |
| `9-hoisting.js` | Hoisting demo (function vs class) | Educational |
| `10-car.js` | Car (brand, motor, color); cloneCar method | Jest/test |
| `100-evcar.js` | EVCar extends Car (range); override description | Jest/test |

### Doing the exercises yourself

1. Define classes with `class Name { constructor(...) { ... } }`.
2. Use getters/setters where required: `get name() { return this._name; }`.
3. Use `extends` and `super()` for inheritance (e.g. SkyHighBuilding, EVCar).
4. Run tests: `npm test` in the project folder (if Jest is configured).

---

## 0x03 — ES6 Data manipulation

**Problem:** Process lists of students, grades, and other data using map, filter, reduce, and structures like Set and Map. This project practices functional array methods and typed/weak structures.

### Files and what they solve

| File | Problem solved | How to run |
|------|----------------|------------|
| `0-get_list_students.js` | Return array of student objects (id, firstName, location) | Used by other tasks |
| `1-get_list_student_ids.js` | Map list of students to array of ids | `npm run dev 1-main.js` or test |
| `2-get_students_by_loc.js` | Filter students by location | `npm run dev 2-main.js` or test |
| `3-get_ids_sum.js` | Sum of student ids (reduce) | `npm run dev 3-main.js` or test |
| `4-update_grade_by_city.js` | Update grades by city (map + find) | `npm run dev 4-main.js` or test |
| `5-typed_arrays.js` | Create TypedArray from buffer (Int8, etc.) | `npm run dev 5-main.js` or test |
| `6-set.js` | setFromArray(array) → Set | `npm run dev 6-main.js` or test |
| `7-has_array_values.js` | hasValuesFromArray(set, array) → boolean | `npm run dev 7-main.js` or test |
| `8-clean_set.js` | Clean Set: return string of values starting with given string (joined by '-') | `npm run dev 8-main.js` or test |
| `9-groceries_list.js` | Map: grocery name → quantity (from array of arrays) | `npm run dev 9-main.js` or test |
| `10-update_uniq_items.js` | Update map: set value 100 for keys that appear exactly once | `npm run dev 10-main.js` or test |
| `100-weak.js` | WeakMap / WeakSet usage (query by endpoint) | `npm run dev 100-main.js` or test |

### Doing the exercises yourself

1. Use `array.map`, `array.filter`, `array.reduce` for list transformations.
2. Use `new Set(array)` and Set methods; build Map from entries.
3. For TypedArrays: use `ArrayBuffer` and view constructors (Int8Array, etc.).
4. Run: `npm test` or `npm run dev <n>-main.js`.

---

## 0x05 — Node.js basic

**Problem:** Use Node.js for console output, reading input, reading files (sync and async), and building HTTP servers (plain and with Express). This project builds small Node scripts and servers.

### Files and what they solve

| File | Problem solved | How to run |
|------|----------------|------------|
| `0-console.js` | displayMessage(string) → console.log(string) | `node 0-main.js` or require and call |
| `1-stdin.js` | Read from stdin; display welcome message with name | `node 1-stdin.js` (type name and press Enter) |
| `2-read_file.js` | Read file synchronously; count students by field; throw if missing | `node 2-main_0.js database.csv` |
| `3-read_file_async.js` | Same as 2 but async (Promise-based) | `node 3-main_0.js database.csv` |
| `4-http.js` | HTTP server: GET / → "Hello Holberton School!" | `node 4-http.js` then curl localhost:port |
| `5-http.js` | HTTP server: GET / → HTML page with "Hello Holberton School!" | `node 5-http.js` |
| `6-http_express.js` | Express app: GET / → "Hello Holberton School!" | `node 6-http_express.js` |
| `7-http_express.js` | Express app: GET / → same; read path and respond | `node 7-http_express.js` |
| `database.csv` | Sample CSV for read_file tasks | Pass as first argument to 2-main / 3-main |

### Doing the exercises yourself

1. **0:** Export a function that calls `console.log`.
2. **1:** Use `process.stdin` (or readline) to read name and print welcome message.
3. **2–3:** Use `fs.readFileSync` or `fs.promises.readFile`; parse CSV and group by field; throw Error if file missing.
4. **4–5:** Use `http.createServer` and respond with plain text or HTML.
5. **6–7:** Use Express: `app.get('/', ...)` and optionally other routes.

Run: `node <script>.js [args]` (e.g. `node 2-read_file.js database.csv`).

---

## 0x06 — Unittests in JS

**Problem:** Ensure functions and APIs behave correctly using tests. This project uses Mocha, Chai, and Sinon to write unit tests (assert, expect, spies, stubs) and simple integration tests.

### Files and what they solve

| File | Problem solved | How to run |
|------|----------------|------------|
| `0-calcul.js` | calculateNumber(a, b) — round a and b, return sum | Implementation |
| `0-calcul.test.js` | Test calculateNumber with assert | `npm test 0-calcul.test.js` |
| `1-calcul.js` | calculateNumber(type, a, b) — SUM, SUBTRACT, DIVIDE (type) | Implementation |
| `1-calcul.test.js` | Test SUM, SUBTRACT, DIVIDE and edge cases (describe) | `npm test 1-calcul.test.js` |
| `2-calcul_chai.js` | Same as 1-calcul | Copy of 1-calcul |
| `2-calcul_chai.test.js` | Same tests using Chai expect | `npm test 2-calcul_chai.test.js` |
| `utils.js` | Utils.calculateNumber (same logic) — for payment tests | Used by 3–5 |
| `3-payment.js` | sendPaymentRequestToApi(totalAmount, totalShipping); calls Utils.calculateNumber('SUM', ...), logs total | Implementation |
| `3-payment.test.js` | Spy on Utils.calculateNumber; verify called with SUM, 100, 20 | `npm test 3-payment.test.js` |
| `4-payment.js` | Same as 3 | Copy of 3 |
| `4-payment.test.js` | Stub Utils.calculateNumber to return 10; spy on console.log; verify "The total is: 10" | `npm test 4-payment.test.js` |
| `5-payment.js` | Same as 4 | Copy of 4 |
| `5-payment.test.js` | Two tests; use beforeEach/afterEach to spy console.log; verify message and call count | `npm test 5-payment.test.js` |
| `6-payment_token.js` | getPaymentTokenFromAPI(success) → Promise with { data: '...' } if true | Implementation |
| `6-payment_token.test.js` | Async test with done(); test getPaymentTokenFromAPI(true) | `npm test 6-payment_token.test.js` |
| `7-skip.test.js` | Skip the failing test (it('1 is equal to 3')) with it.skip so suite passes | `npm test 7-skip.test.js` |

### Concepts

- **Assert (Node):** `assert.strictEqual(actual, expected)`.
- **Chai expect:** `expect(value).to.equal(...)`, `expect(...).to.be.true`.
- **Sinon spy:** `sinon.spy(Utils, 'calculateNumber'); ... ; Utils.calculateNumber.restore();`
- **Sinon stub:** `sinon.stub(Utils, 'calculateNumber').returns(10);`
- **Async:** Use `done` callback or return a Promise so Mocha waits.

### Doing the exercises yourself

1. Implement calcul functions; write tests for normal and edge cases (e.g. DIVIDE by 0 → 'Error').
2. For payment: implement sendPaymentRequestToApi; in tests, spy or stub Utils.calculateNumber and optionally console.log.
3. For 6: implement getPaymentTokenFromAPI; in test, call with true and in .then (or async/await) assert on result and call done().
4. For 7: change the failing test to `it.skip('1 is equal to 3', ...)` so it is skipped.

Run: `npm test` or `npm test <file>.test.js`.

---

## Quick reference: run by project

```bash
# Promises (Babel + Node)
cd 0x01-ES6_promise && npm install && npm run dev 0-main.js

# Classes (Jest)
cd 0x02-ES6_classes && npm install && npm test

# Data manipulation (Jest)
cd 0x03-ES6_data_manipulation && npm install && npm test

# Node basic
cd 0x05-Node_JS_basic && node 0-main.js
cd 0x05-Node_JS_basic && node 2-main_0.js database.csv

# Unittests (Mocha)
cd 0x06-unittests_in_js && npm install && npm test 0-calcul.test.js
```

---

## Summary

- **0x01-ES6_promise:** Create and consume Promises; then/catch, all/race/allSettled; throw/try/catch.
- **0x02-ES6_classes:** ES6 classes, getters/setters, extends, super.
- **0x03-ES6_data_manipulation:** map, filter, reduce, Set, Map, TypedArrays.
- **0x05-Node_JS_basic:** Console, stdin, fs (sync/async), http, Express.
- **0x06-unittests_in_js:** Mocha, Chai, Sinon (spy, stub), async tests, skip.

Each subfolder has its own `README.md` with detailed task descriptions; this file is the high-level map of **what each file is for** and **how to run and redo the exercises**.
