1. Write a function named `objectHasProperty` that takes two arguments: an Object and a String. The function should return true if the Object contains a property with the name given by the String, false otherwise.

<br>
<br>
<br>

```js
function objectHasProperty(obj, prop) {
  for (let key in obj) {
    if (key === prop) return true;
  }

  return false;
}
```

---

2. Write a function named `incrementProperty` that takes two arguments: an Object and a String. If the Object contains a property with the specified name, the function should increment the value of that property. If the property does not exist, the function should add a new property with a value of `1`. The function should return the new value of the property.

<br>
<br>
<br>

```js
function incrementProperty(obj, property) {
  obj[property] = obj[property] ? obj[property] + 1 : 1;
  return obj[property];
}
```

---

3. Write a function named `copyProperties` that takes two Objects as arguments. The function should copy all properties from the first object to the second. The function should return the number of properties copied.

<br>
<br>
<br>

```js
function copyProperties(fromObj, toObj) {
  let count = 0;
  for (let property in fromObj) {
    toObj[property] = fromObj[property];
    count += 1;
  }

  return count;
}
```

--
4. Write a function named `wordCount` that takes a single String as an argument. The function should return an Object that contains the counts of each word that appears in the provided String. In the returned Object, you should use the words as keys, and the counts as values.

<br>
<br>
<br>

```js
function wordCount(string) {
  const words = string.split(' ');
  const out = {};

  for (const word of words) out[word] = out[word] ? out[word] + 1 : 1;

  return out;
}
```
