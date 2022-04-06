# Truthy and Falsy

## == Can Be Dangerous
* this alters the type of the value to see if it still rings true
* 23 == '23'  is true
* 23 === '23' is false

Everything has an inherent Truthy or Falsy Value

## Actual Falsey Values:
* 0
* False
* NaN
* undefined
* ""
* null

## Truthy Can Help Check Conditions in Code

Eg. save name to string, but only if we don't have a value saved yet:

```javascript
username = '';
 if (!username) {
   username = 'Sibhan';
 }
```

Eg. to check if shopping list is empty:

```javascript
shoppingList = [];

if (!shoppingList.length) {
  shoppingList.push('coconut milk');
}
```