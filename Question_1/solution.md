# Question 1

## [LeetCode 2667: Create Hello World Function](https://leetcode.com/problems/create-hello-world-function/)

This question helps us understand the **fundamental properties of JavaScript functional programming**.  
In JavaScript, we can create a function and return it in multiple ways.

---

## ✅ Methods

### **1️⃣ Using the `function` keyword**

```js
function createHelloWorld() {
    return function() {
        return "Hello World";
    };
}

2️⃣ Using Arrow Functions

const createHelloWorld = () => () => "Hello World";
