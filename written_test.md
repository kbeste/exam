## Written Portion (40 min)
This part of the test is closed book!

1. You've started a project in JavaScript, but for some reason your runtime lacks the `map` function! Attach one to the `Array` prototype!

```js

/* As a reminder, `map` takes a callback function and returns a *new* array, with each new value created by the output of the callback function. So:

const arr = [1,2,3];
arr.map((val) => val * val) // [1,4,9]

*/

```

Please write your answer [here](./map.js)

2. [done] What is a React `component`?

---
> Your answer here...  A component contains a modulized set of code that performs a function for your application.  The component can be changed to a class in order to set the state.
---

3. [done] You can define a React component a few different ways, including (1) as a simple function or (2) as a class that extends the `Component` piece of the React library. How should you decide when to use which syntax?

---
> Your answer here...  If the state is needed then the component should be a class which will use the "extends the component" code.  If state is not needed then the component will remain as a simple function.
---

4. [done] Please transpile the following JSX code into JavaScript that the browser can understand:

```js
<div>
    <h1 className='headline'>Hello Dojo!</h1>
</div>
```

---
> Your answer here...

<div>
	<h1 class='headline'>Hello Dojo</h1>
</div>

---

5. [done] Reverse an array. Write a function that accepts an array and returns *the same array* with the values reversed.

```js
const arr = [1,2,3];
reverseArr(arr);
console.log(arr) // [3,2,1];
```

Please write your answer [here](./reverseArr.js)  -done

6. [done] How does using the `new` keyword affect a function's behavior in JavaScript?

---
> Your answer here... The 'new' keyword will create a new instance, for example, a new instance of an object. 
---c

7. [done] What is the best thing?
* A) Callbacks
* B) Objects
* C) Promises
* D) Pushing to Github

---
> Your answer here... CALLBACKS!!	
---

Done! Time to start the [React app](./app-details.md)!