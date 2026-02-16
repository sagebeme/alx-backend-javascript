0x02. ES6 classes
=================

This project practices **ES6 classes**: defining classes, constructors, getters/setters, and inheritance (e.g. Building → SkyHighBuilding, Car → EVCar).

Tasks
-----

### 1. What does `0-classroom.js` do?

It exports a **`ClassRoom` class** with a constructor that takes `maxStudentsSize` and stores it (e.g. `_maxStudentsSize`). Used as the base for creating classrooms. Run: `npm test` or the corresponding main file.

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `0-classroom.js`

### 2. What does `1-make_classrooms.js` do?

It **creates an array of ClassRoom instances** with sizes 19, 20, and 34, and returns that array. You practice instantiating the class.

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `1-make_classrooms.js`

### 3. What does `2-hbtn_course.js` do?

It exports **`HolbertonCourse`** with `name`, `length`, and `students` (getters/setters). You practice encapsulation with getters and setters.

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `2-hbtn_course.js`

### 4. What does `3-currency.js` do?

It exports a **`Currency` class** (e.g. `code`, `name`) used by the Pricing class. You practice a simple class and composition.

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `3-currency.js`

### 5. What does `4-pricing.js` do?

It exports **`Pricing`** with `amount` and `currency`, and a method like **`displayFullPrice()`** that returns a formatted string (e.g. amount and currency name). You practice using another class as an attribute.

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `4-pricing.js`

### 6. What does `5-building.js` do?

It exports **`Building`** (e.g. `sqft`) and an abstract **`evacuationWarningMessage()`** method. Used as the base for SkyHighBuilding.

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `5-building.js`

### 7. What does `6-sky_high.js` do?

It exports **`SkyHighBuilding`** that **extends Building**, adds `floors`, and implements **`evacuationWarningMessage()`** with a message that includes the number of floors. You practice inheritance and `super`.

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `6-sky_high.js`

### 8. What does `7-airport.js` do?

It exports **`Airport`** with `name` and `code`, and a default string description (e.g. `[object code]`). You practice overriding the default toString behavior.

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `7-airport.js`

### 9. What does `8-hbtn_class.js` do?

It exports **`HolbertonClass`** (e.g. `size`, `location`) used in the hoisting example. You practice class structure.

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `8-hbtn_class.js`

### 10. What does `9-hoisting.js` do?

It demonstrates **hoisting**: the difference between function declarations (hoisted) and class declarations (not hoisted). Educational.

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `9-hoisting.js`

### 11. What does `10-car.js` do?

It exports **`Car`** (e.g. `brand`, `motor`, `color`) and a **`cloneCar()`** method that returns a new car with the same attributes. You practice cloning instances.

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `10-car.js`

### 12. What does `100-evcar.js` do?

It exports **`EVCar`** that **extends Car** and adds `range` (battery range). It overrides the description so it includes the range. You practice inheritance and overriding.

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `100-evcar.js`
