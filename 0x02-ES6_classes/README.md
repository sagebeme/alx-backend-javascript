# 0x02. ES6 classes

This project practices **ES6 classes**: defining classes, constructors, getters/setters, and inheritance (e.g. Building → SkyHighBuilding, Car → EVCar).

---

## What does each file do?

Each answer is the **problem the file solves**. Run with `npm test` or the corresponding main/test file.

### **What does `0-classroom.js` do?**  
It exports a **`ClassRoom` class** with a constructor that takes `maxStudentsSize` and stores it (e.g. `_maxStudentsSize`). Used as the base for creating classrooms.

### **What does `1-make_classrooms.js` do?**  
It **creates an array of ClassRoom instances** with sizes 19, 20, and 34, and returns that array. You practice instantiating the class.

### **What does `2-hbtn_course.js` do?**  
It exports **`HolbertonCourse`** with `name`, `length`, and `students` (getters/setters). You practice encapsulation with getters and setters.

### **What does `3-currency.js` do?**  
It exports a **`Currency` class** (e.g. `code`, `name`) used by the Pricing class. You practice a simple class and composition.

### **What does `4-pricing.js` do?**  
It exports **`Pricing`** with `amount` and `currency`, and a method like **`displayFullPrice()`** that returns a formatted string (e.g. amount and currency name). You practice using another class as an attribute.

### **What does `5-building.js` do?**  
It exports **`Building`** (e.g. `sqft`) and an abstract **`evacuationWarningMessage()`** method. Used as the base for SkyHighBuilding.

### **What does `6-sky_high.js` do?**  
It exports **`SkyHighBuilding`** that **extends Building**, adds `floors`, and implements **`evacuationWarningMessage()`** with a message that includes the number of floors. You practice inheritance and `super`.

### **What does `7-airport.js` do?**  
It exports **`Airport`** with `name` and `code`, and a default string description (e.g. `[object code]`). You practice overriding the default toString behavior.

### **What does `8-hbtn_class.js` do?**  
It exports **`HolbertonClass`** (e.g. `size`, `location`) used in the hoisting example. You practice class structure.

### **What does `9-hoisting.js` do?**  
It demonstrates **hoisting**: the difference between function declarations (hoisted) and class declarations (not hoisted). Educational.

### **What does `10-car.js` do?**  
It exports **`Car`** (e.g. `brand`, `motor`, `color`) and a **`cloneCar()`** method that returns a new car with the same attributes. You practice cloning instances.

### **What does `100-evcar.js` do?**  
It exports **`EVCar`** that **extends Car** and adds `range` (battery range). It overrides the description so it includes the range. You practice inheritance and overriding.
