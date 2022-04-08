# Arrow Functions

## Original Style:

```javascript
[1,2,3].forEach(function (num) {
  console.log('num: ', num);
});
```

## Change to Arrow

```javascript
[1,2,3].forEach((num) => {
  console.log('num: ', num);
});
```

## If SHORT, can do:
```javascript
[1,2,3].forEach(num => console.log('num: ', num));
```

## Info for future self in case you read this
Arrow functions don't get assigned a value for `this`
