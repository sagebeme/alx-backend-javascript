# 0x03. ES6 data manipulation

This project practices **array methods** (map, filter, reduce) and **data structures** (Set, Map, TypedArrays, WeakMap/WeakSet) in JavaScript.

---

## What does each file do?

Each answer is the **problem the file solves**. Run with `npm run dev <n>-main.js` or `npm test`.

### **What does `0-get_list_students.js` do?**  
It exports **`getListStudents()`** that returns a fixed array of student objects (id, firstName, location). Used as the data source for later tasks.

### **What does `1-get_list_student_ids.js` do?**  
It exports a function that takes the list of students and **returns an array of their ids** (using `map`).

### **What does `2-get_students_by_loc.js` do?**  
It exports a function that **filters students by location** and returns the matching students (using `filter`).

### **What does `3-get_ids_sum.js` do?**  
It exports a function that **returns the sum of all student ids** (using `reduce`).

### **What does `4-update_grade_by_city.js` do?**  
It exports a function that **updates the grade** of students in a given city (using `map` and matching by city).

### **What does `5-typed_arrays.js` do?**  
It exports a function that creates a **TypedArray** (e.g. from an ArrayBuffer) with a given length and position. You practice Int8Array or similar.

### **What does `6-set.js` do?**  
It exports **`setFromArray(array)`** that returns a **Set** from the given array (removing duplicates).

### **What does `7-has_array_values.js` do?**  
It exports **`hasValuesFromArray(set, array)`** that returns **true** if every element in `array` is in `set`, else false.

### **What does `8-clean_set.js` do?**  
It exports a function that takes a Set and a start string, and **returns a string** of all set values that start with that string, joined by `-`.

### **What does `9-groceries_list.js` do?**  
It exports a function that **converts an array of [name, quantity] pairs into a Map** (grocery name → quantity).

### **What does `10-update_uniq_items.js` do?**  
It exports a function that **updates a Map**: for any key that appears with value 1, set its value to 100. You practice iterating and updating Map entries.

### **What does `100-weak.js` do?**  
It exports a function that uses **WeakMap** or **WeakSet** to query by endpoint (or similar). You practice weak references and when to use them.

### **What are the `*-main.js` files?**  
They are **driver scripts** that import and call the task functions so you can run and see output (e.g. `npm run dev 0-main.js`).

---

## Learning Objectives

- How to use map, filter and reduce on arrays
- Typed arrays
- The Set, Map, and Weak link data structures

## Requirements

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Your code will be tested using Jest and the command `npm run test`
- Your code will be verified against lint using ESLint
- All of your functions must be exported
