# New Way to Loopy Lighthouse

## Old

```javascript
for (let num = 100; num <= 200; num++>) {
  if (num % 3 === 0 && num % 4 === 1) {
    console.log("LoopyLighthouse");
  } else if (num % 3 === 0) {
    console.log("Loopy");
  } else if (num % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(num);
  }
}
```

## New
 ```javascript
 for (const num of nums) {
   let output = "";

   if (num % 3 === 0) {
     output += "Loopy";
   }
   if (num % 4 === 0) {
     output += "Loighthouse";
   }
   console.log(output === "" ? num : output);
 }

 ```

 ternary operater thingy....

 if condition is true, print num, if condition is false, print output.