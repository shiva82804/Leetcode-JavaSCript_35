# Question 1

## [LeetCode 2667: Create Hello World Function](https://leetcode.com/problems/create-hello-world-function/)

This problem helps us understand the **fundamental properties of JavaScript functional programming**.  
In JavaScript, functions are **first-class citizens**, meaning they can be returned from other functions, stored in variables, or passed as arguments.

---

## ✅ Different Ways to Create the Function

### **1️⃣ Using the `function` keyword**

```js
function createHelloWorld() {
    return function() {
        return "Hello World";
    };
}

const createHelloWorld = () => () => "Hello World";
