# Getting Comfy With Error Messages

## Syntax Errors

```javascript
var rank = "Imperator";
var name = "Furiosa";

console.log(rank name);
```

Becomes:
```javascript
node syntax-error.js
/vagrant/focal/syntax-error.js:4
console.log(rank name);
                 ^^^^
SyntaxError: Unexpected identifier
    at exports.runInThisContext (vm.js:73:16)
    at Module._compile (module.js:443:25)
    at Object.Module._extensions..js (module.js:478:10)
    at Module.load (module.js:355:32)
    at Function.Module._load (module.js:310:12)
    at Function.Module.runMain (module.js:501:10)
    at startup (node.js:129:16)
    at node.js:814:3
```

* 4 tells us it happened on line 4; 
* It shows there's something wront with 'name'
* notice we're missing a ','
* Change to:

```javascript
console.log(rank, name)
```


## Stack Traces

Unless you know there could be errors in the other programs affecting the outcome, ignore the stack traces...which are:

```javascript
    at exports.runInThisContext (vm.js:73:16)
    at Module._compile (module.js:443:25)
    at Object.Module._extensions..js (module.js:478:10)
    at Module.load (module.js:355:32)
    at Function.Module._load (module.js:310:12)
    at Function.Module.runMain (module.js:501:10)
    at startup (node.js:129:16)
    at node.js:814:3
```


## Trickier Syntax Errors

```javascript
if (5 > 10) {
  console.log("Imp[ossible!");
console.log("Phew, logical fallacies avoided.");
```
Error Message Key Moment:
```javascript
SyntaxError: Unexpected token )
```
* It's talking about a point in the code that doesn't exist (it mentions the wrong line), and it points to a moment that doesn't exist in the code.
* Often means we're missing something in the code...like a parenthesis or brace


## Reference Errors

```javascript
var firstName = "Jane";
var lastName = "Doe";

console.log(firstName, lasName);
```
Points to:

```javascript
console.log(firstName, lasName);
```
These happen when we try to use the value of something that is undefined


## Type Errors

``` javascript
var favouriteMeal = "BREAKFAST";

console.log(favouriteMeal.toLower());
```

Important message moment:
```javascript
/vagrant/focal/type-error.js:3
console.log(favouriteMeal.toLower());
                          ^
TypeError: undefined is not a function
```

Realize we called a function that doesn't exist. Change to:

```javascript
var favouriteMeal = "BREAKFAST";

console.log(favouriteMeal.toLowerCase());
```
